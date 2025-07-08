import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul className='flex justify-around m-5 shadow-sm font-sans p-3 cursor-pointer '>
        <li className='hover:translate-y-[-2px] hover:border-b-2'>Home</li>
      <Link to="/Books"> <li className='hover:translate-y-[-2px] hover:border-b-2'> Browse Books</li></Link> 
      <Link to="/AddBook"> <li className='hover:translate-y-[-2px] hover:border-b-2'>Add Book</li></Link> 
      </ul>
    </div>
  )
}

export default Navigation
