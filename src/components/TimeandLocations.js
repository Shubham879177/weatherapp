import React from 'react'
import { formatToLocalTime } from '../Service/WeatherService'

const TimeandLocations = ({weather:{current_dt,name,current_zone,country}}) => {
  return (
    <div>
      <div className='flex items-center justify-center my-5'>
        <p className=' text-white font-light text-xl'>{formatToLocalTime(current_dt)}</p>
      </div>
      <div className='flex items-center justify-center my-5'>
        <p className=' text-white font-semibold text-3xl'>{name},{country}</p>
      </div>
    </div>
  )
}

export default TimeandLocations
