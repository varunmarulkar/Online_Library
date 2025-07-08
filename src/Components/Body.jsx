import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import { useState } from 'react'
import { homeBooks } from '../Utils/HardCoded'
import HomeBooks from './HomeBooks'
import { Link } from 'react-router-dom'

const Body = () => {
    const [books,setBooks]=useState(homeBooks)
  return (
    <div>
      <Header/>
      <Navigation/>
      <div className='flex flex-wrap justify-around'>
      {books.map((book)=>{
       return <Link key={book.id} to={`/HomeBookList/${book.id}`}><HomeBooks  data={book}/></Link> 
      })}
      </div>
  
    </div>
  )
}


export default Body
