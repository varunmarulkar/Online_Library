import React from 'react'

const HomeBooks = (props) => {
  return (
    <div className='flex flex-col text-center'>
     <img className='w-30 rounded-2xl' src={props.data.image} alt="" />
      <h1 className='font-black'>{props.data.title}</h1>
      <h2>{props.data.author}</h2>
      <h2>{props.data.category}</h2>
      <h2>{props.data.rating}</h2>
    </div>
  )
}

export default HomeBooks
