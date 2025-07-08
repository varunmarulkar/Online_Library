import React, { useState } from 'react';
import { booksdata } from '../Utils/HardCoded';
import BooksList from './BooksList';
import { Link, useParams } from 'react-router-dom';
import FilteredNav from './FilteredNav';
import { useSelector } from 'react-redux';

const Books = () => {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const {id}=useParams()

  const addedBooks=useSelector((store)=>store.book.items)
  const addBooks=[...booksdata,...addedBooks]

  const categoryFiltered = category
    ? addBooks.filter((book) =>
        book.category.toLowerCase() === category.toLowerCase()
      )
    : addBooks;


  const searchedBooks = categoryFiltered.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <FilteredNav />
      <div className="text-center m-4">
        <input
          className="border w-[300px] text-center rounded-2xl p-2"
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-around flex-wrap">
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => (
         <Link key={book.id} to= {`/books/info/${book.id}`}> <BooksList  data={book} /></Link>  
          ))
        ) : (
          <p className="text-center text-red-500">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
