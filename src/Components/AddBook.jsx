import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../Utils/addBookSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { booksdata } from '../Utils/HardCoded'

const AddBook = () => {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        author: "",
        category: "",
        description: "",
        rating: "",
        isbn: "",
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addedBooks=useSelector((store)=>store.book.items)
    const allBooks=[...booksdata,...addedBooks]
    

    function handleSubmit(e) {
        e.preventDefault()
        const isEmpty = Object.values(formData).some(val => val.trim() === "")
        const isDuplicate=allBooks.some((book)=>book.id==formData.id)
        if (isEmpty) {
            alert("Please Fill Required Fields")
           
            return;
        }

        if(isDuplicate){
            alert("This ID has already in use, use ID from 21")
            return;
        }

        dispatch(addBook(formData))
        alert("Book added successfully")
        navigate("/Books")
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-300'>
            <Link to="/" className='block text-sm text-blue-600 hover:underline m-4'>⬅ Back To Home Page</Link>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-3xl mb-4'>📘 Add Book</h1>
                <form className='flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-[90%] max-w-md'>

                    

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="text" name="id" placeholder='Id' value={formData.id}
                        onChange={(e) => setFormData({ ...formData, id: e.target.value })} />

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="text" name="title" placeholder='Title' value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="text" name="author" placeholder='Author' value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })} />

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="text" name="category" placeholder='Category' value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })} />

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="text" name="description" placeholder='Description' value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="number" name="rating" placeholder='Rating' value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />

                    <input className='border p-2 rounded-md text-center focus:ring-2 focus:ring-red-400' type="text" name="isbn" placeholder='ISBN' value={formData.isbn}
                        onChange={(e) => setFormData({ ...formData, isbn: e.target.value })} />

                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition hover:cursor-pointer' type='submit' onClick={handleSubmit}>
                        ➕ Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddBook
