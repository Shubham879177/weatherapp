import React from 'react'
import { formatTime, iconUrlFromCode } from '../Service/WeatherService'

const Forcast = (params) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{params.title}</p>
            </div>
            <hr className=' my-2 bg-white' />
            <div className='flex flex-row items-center justify-between text-white'>
                {params.weather.mylist.map((value)=>
                <div className='flex flex-col itm-center justify-center'>
                    <p className='font-light text-sm'>
                        {formatTime(Number.parseInt(value.time))}
                    </p>
                    <img src={iconUrlFromCode(value.icon)} className='w-12 mt-1' />
                    <p className='font-medium ml-3'>{value.temp}</p>
                </div>
                )}

            </div>
        </div>
    )
}

export default Forcast
