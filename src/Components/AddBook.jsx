import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../Utils/addBookSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


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

    const navigate=useNavigate()

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        const isEmpty=Object.values(formData).some(val=>val.trim()==="")
        if(isEmpty){
            alert("Please Fill Required Fields")
            return;
        }

        dispatch(addBook(formData))
        alert("book added successfully")
        navigate("/Books")
    }
    return (
        <div className='h-screen bg-gray-300 border'>
     <Link to="/"> <h1 className='m-2 hover:text-red-400 hover:underline '>⬅️Back To Home Page</h1></Link>  
        <div className='flex flex-col items-center justify-center '>  
        <h1 className='font-black text-4xl'>Add Book</h1>
            <form className='flex flex-col gap-4 m-5'> 
                    
                <input className='border w-50  rounded-sm text-center' type="text" name="id" placeholder='Id' value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })} />

                <input className='border w-50  rounded-sm text-center'  type="text" name="title" placeholder='Title' value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} />


                <input className='border w-50  rounded-sm text-center'  type="text" name="author" placeholder='Author' value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })} />

                <input className='border w-50  rounded-sm text-center'  type="text" name="category" placeholder='Category' value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })} />

                <input className='border w-50  rounded-sm text-center'  type="text" name="description" placeholder='Description' value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

                <input className='border w-50  rounded-sm text-center'  type="number" name="rating" placeholder='Rating' value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />

                <input className='border w-50  rounded-sm text-center'  type="text" name="isbn" placeholder='ISBN' value={formData.isbn}
                    onChange={(e) => setFormData({ ...formData, isbn: e.target.value })} />

                <button className='border bg-red-500 rounded-2xl text-white cursor-pointer' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default AddBook
