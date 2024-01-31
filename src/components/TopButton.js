import React from 'react'

const TopButton = () => {
  const city=[
    {
      id:1,
      title:"India"
    },
    {
      id:2,
      title:"London"
    },
    {
      id:3,
      title:"Tokyo"
    },
    {
      id:4,
      title:"Toranto"
    },
    {
      id:5,
      title:"Canada"
    }
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {city.map((cities)=>(
        <button key={cities.id} className='text-white text-lg font-light hover:scale-110'>{cities.title}</button>
      ))}
    </div>
  )
}

export default TopButton
