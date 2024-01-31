import React from 'react'

const Forcast = (params) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{params.title}</p>
            </div>
            <hr className=' my-2 bg-white' />
            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col itm-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12 mt-1' />
                    <p className='font-medium ml-3'>22°</p>
                </div>
                <div className='flex flex-col itm-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12 mt-1' />
                    <p className='font-medium ml-3'>22°</p>
                </div>
                <div className='flex flex-col itm-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12 mt-1' />
                    <p className='font-medium ml-3'>22°</p>
                </div>
                    <div className='flex flex-col itm-center justify-center'>
                        <p className='font-light text-sm'>
                            4:30 PM
                        </p>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12 mt-1' />
                        <p className='font-medium ml-3'>22°</p>
                    </div>
                    <div className='flex flex-col itm-center justify-center'>
                        <p className='font-light text-sm'>
                            4:30 PM
                        </p>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12 mt-1' />
                        <p className='font-medium ml-3'>22°</p>
                    </div>

            </div>
        </div>
    )
}

export default Forcast
