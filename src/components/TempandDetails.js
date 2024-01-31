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
function TempandDetails() {
    return (
        <div>
            <div className=' flex flex-row items-center justify-center py-4 text-xl text-cyan-200'>
                <p>Clear</p>
                <UilSun className="text-white mx-5" size={25} />
            </div>
            <div className='flex flex-row items-center justify-between py-3 text-white'>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="PIC" className='w-20' />
                <p className='text-5xl'>°19</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-start justify-center text-sm font-light'>
                        <UilTemperature size={18} className="mr-1" />Real fell:
                        <span className='font-semibold mx-1'>34°</span>
                    </div>
                    <div className='flex items-start justify-center text-sm font-light'>
                        <UilTear size={18} className="mr-1" />Humidity:
                        <span className='font-semibold mx-1'>65%</span>
                    </div>
                    <div className='flex items-start justify-center text-sm font-light'>
                        <UilWind size={18} className="mr-1" />Wind:
                        <span className='font-semibold mx-1'>11 Km/ph</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 py-3 text-white text-sm'>
                <UilSun/>
                <p className='font-light'>Rise: <span className='font-medium ml-1'>6:00AM</span></p>
                <p>|</p>
                <UilSunset/>
                <p className='font-light'>SunSet: <span className='font-medium ml-1'>6:00AM</span></p>
                <p>|</p>
                <UilArrowUp/>
                <p className='font-light'>High: <span className="font-medium ml-1" >45°</span></p>
                <p>|</p>
                <UilArrowDown/>
                <p className='font-light'>Low: <span className="font-medium ml-2" >29°</span></p>
               

            </div>
        </div>
    )
}

export default TempandDetails
