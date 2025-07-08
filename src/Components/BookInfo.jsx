import React from 'react'
import { booksdata } from '../Utils/HardCoded'
import { useParams, Link } from 'react-router-dom'


const BookInfo = () => {
    const params=useParams()
    // console.log(params)
    const book=booksdata.filter((books)=>{
     return books.id==params.id
    })
  return (
    <div>
       <Link to="/books"><h1 className='m-3 hover:underline hover:text-red-400'>⬅️Back</h1></Link> 
      {book.map((b)=>{
        return  <div key={b.id} className='text-center m-4'>
            <img className='w-50 rounded-2xl mx-auto' src={`https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg`}  alt="books-image" />
             <h1 className='text-2xl font-black'>{b.title}</h1>
             <h2>Author Name: {b.author}</h2>
             <h2>Category: {b.category}</h2>
             <h2>Description: {b.description}</h2>
             <h2>Rating: {b.rating}⭐</h2>
             <h2>Isbn: {b.isbn}</h2>
        </div>
      })}
    </div>
  )
}

export default BookInfo
