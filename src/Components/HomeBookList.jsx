import React from 'react'
import { homeBooks } from '../Utils/HardCoded'
import { useParams,Link } from 'react-router-dom'


const HomeBookList = () => {
    const params = useParams()

    const book = homeBooks.filter((book) => {
        return book.id === Number(params.id)
    })

    return (
        <div>
           <Link to="/"> <h1 className='m-2 hover:underline hover:text-red-400'>⬅️Back To Home Page</h1></Link>
            {book.map((b) => {
                return <div key={b.id}  className='text-center m-4'>
                    <img className='w-50 rounded-2xl mx-auto' src={b.image} alt="books-image" />
                    <h1 className='text-2xl font-black'>{b.title}</h1>
                    <h2>Author Name: {b.author}</h2>
                    <h2>Category: {b.category}</h2>
                    <h2>Description: {b.description}</h2>
                    <h2>Rating: <b >{b.rating}⭐</b></h2>
                    <h2>Isbn: {b.isbn}</h2>
                </div>
            })}
        </div>
    )
}

export default HomeBookList
