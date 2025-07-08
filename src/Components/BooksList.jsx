import React from 'react'


const BooksList = (props) => {
    return (
        <div className='m-4 w-[200px] text-center'>
          <img className='w-30 rounded-2xl' src={`https://covers.openlibrary.org/b/isbn/${props.data.isbn}-M.jpg`}  alt="books-image" />
            <h1 className='w-30 font-black'>{props.data.title}</h1>
            <h2 className='w-30'>{props.data.author}</h2>
            <h2 className='w-30'>{props.data.category}</h2>
            <h3 className='w-30 font-black'>{props.data.rating}⭐</h3>
        </div>
    )
}

export default BooksList
