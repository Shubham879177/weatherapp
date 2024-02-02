import React from 'react'

const TopButton = ({setQuery}) => {
  const city=[
    {
      id:1,
      title:"Leh"
    },
    {
      id:2,
      title:"Manali"
    },
    {
      id:3,
      title:"Shimla"
    },
    {
      id:4,
      title:"Dehradun"
    },
    {
      id:5,
      title:"Nainital"
    }
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {city.map((cities)=>(
        <button key={cities.id} className='text-white text-lg font-light hover:scale-110' 
        onClick={()=>setQuery({q:cities.title})}>{cities.title}</button>
      ))}
    </div>
  )
}

export default TopButton
