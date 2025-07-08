import React from 'react'
import { Link } from 'react-router-dom'

const FilteredNav = () => {
    return (
        <div>
           <Link to="/">
           <div className='m-2  hover:text-red-400 hover:underline'>
               ⬅️ back to Home page
            </div></Link> 
            <ul className='flex justify-around m-4 shadow-lg p-2'>
               <Link to="/books"><li className='hover:underline border rounded-2xl p-2 w-20 text-center bg-red-500 text-white font-black'>All</li></Link>
                <Link to="/books/Sci-Fi"><li className='hover:underline border rounded-2xl p-2 w-20 text-center bg-red-500 text-white font-black'>SciFi</li></Link>
                <Link to="/books/Fiction"><li className='hover:underline border rounded-2xl p-2 w-20 text-center bg-red-500 text-white font-black'>Fiction</li></Link>
                <Link to="/books/Non-fiction"><li className='hover:underline border rounded-2xl p-2 w-30 text-center bg-red-500 text-white font-black'>Non-Fiction</li></Link>
                <Link to="/books/Self-Help"><li className='hover:underline border rounded-2xl p-2 w-30 text-center bg-red-500 text-white font-black ' >Self-Help</li></Link>
            </ul>
        </div>
    )
}

export default FilteredNav
