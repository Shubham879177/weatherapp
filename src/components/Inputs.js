import React from 'react'
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'

const Inputs = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-row justify-center items-center w-[75%] space-x-4 '>
                <input 
                type="search" 
                className="px-4 py-2 w-full placeholder:lowercase capitalize font-light shadow-xl " 
                placeholder="Enter you location..." />
                <UilSearch className="text-white cursor-pointer hover:scale-150" size={25} />
                <UilLocationPinAlt className="text-white cursor-pointer hover:scale-150" size={25} />
            </div>
            <div className='flex flex-row justify-center items-center ml-32'>
              <button
              name='matric'
              className='text-xl text-white font-light '>°C</button>
              <p className='text-white mx-1'>|</p>
              <button
              name='matric'
              className='text-xl text-white font-light'>°F</button>
            </div>
        </div>
    )
}

export default Inputs
