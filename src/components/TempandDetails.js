import React from 'react'
import { UilSun } from '@iconscout/react-unicons'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSunset,
    UilArrowUp,
    UilArrowDown
    
} from "@iconscout/react-unicons";
import { iconUrlFromCode,formatTime } from '../Service/WeatherService';

function TempandDetails({weather:{details,icon,sunrise,current_temp,sunset,temp_max,temp_min,feels_like,humidity,speed}}) {
    return (
        <div>
            <div className=' flex flex-row items-center justify-center py-4 text-xl text-cyan-200'>
                <p>{details}</p>
                <UilSun className="text-white mx-5" size={25} />
            </div>
            <div className='flex flex-row items-center justify-between py-3 text-white'>
                <img src={iconUrlFromCode(icon)} alt="PIC" className='w-20' />
                <p className='text-5xl'>{current_temp}</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-start justify-center text-sm font-light'>
                        <UilTemperature size={18} className="mr-1" />Real feel:
                        <span className='font-semibold mx-1'>{feels_like}</span>
                    </div>
                    <div className='flex items-start justify-center text-sm font-light'>
                        <UilTear size={18} className="mr-1" />Humidity:
                        <span className='font-semibold mx-1'>{humidity}</span>
                    </div>
                    <div className='flex items-start justify-center text-sm font-light'>
                        <UilWind size={18} className="mr-1" />Wind:
                        <span className='font-semibold mx-1'>{speed} Km/ph</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 py-3 text-white text-sm'>
                <UilSun/>
                <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatTime(sunrise)}</span></p>
                <p>|</p>
                <UilSunset/>
                <p className='font-light'>SunSet: <span className='font-medium ml-1'>{formatTime(sunset)}</span></p>
                <p>|</p>
                <UilArrowUp/>
                <p className='font-light'>High: <span className="font-medium ml-1" >{temp_max}</span></p>
                <p>|</p>
                <UilArrowDown/>
                <p className='font-light'>Low: <span className="font-medium ml-2" >{temp_min}</span></p>
               

            </div>
        </div>
    )
}

export default TempandDetails
