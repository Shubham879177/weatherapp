import React, { useState } from 'react'
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'

const Inputs = ({setQuery,setUnits}) => {
    const [city,setCity]=useState("")

    const handelSeachButton=()=>{
       if(city!=="") setQuery({q:city})
    }

    const handelUnitChange=(e)=>{
        const selectedUnits = e.currentTarget.value
        setUnits(selectedUnits)
    }
    const handelUnitChange1=(e)=>{
        setUnits({units:"metric"})
    }

    const handelLocationClick=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.lat
                let lon = position.coords.lon
                setQuery({lon,lat})
            })
        }
    }



    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-row justify-center items-center w-[75%] space-x-4 '>
                <input 
                type="search"
                value={city}
                className="px-4 py-2 w-full placeholder:lowercase capitalize font-light shadow-xl " 
                placeholder="Enter you location..." onChange={(e)=>setCity(e.currentTarget.value)} />
                <UilSearch onClick={handelSeachButton} className="text-white cursor-pointer hover:scale-150" size={25} />
                <UilLocationPinAlt onClick={handelLocationClick} className="text-white cursor-pointer hover:scale-150" size={25} />
            </div>
            <div className='flex flex-row justify-center items-center ml-32'>
              <button
              name='matric'
              className='text-xl text-white font-light transition ease-out hover:scale-125'onClick={handelUnitChange1} >°C</button>
              <p className='text-white mx-1'>|</p>
              <button
              name='matric'
              className='text-xl text-white font-light transition ease-out hover:scale-125 ' onClick={handelUnitChange}>°F</button>
            </div>
        </div>
    )
}

export default Inputs
