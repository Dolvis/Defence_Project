import Image from 'next/image'
import React, { useState } from 'react'
import { FaGasPump } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { PiSteeringWheelFill } from 'react-icons/pi';


function CarCard(props:any) {

    const [car,setCar]=useState(props.car)
    
    return (
        <div className='group bg-gray-50 w- max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-3 bg-base-100 shadow-md sm:p-4 rounded-2xl text-sm sm:text-base
        hover:bg-white hover:border-[1px] cursor-pointer
        duration-200 border-blue-500 '>
            
            <h2 className='text-[20px] font-medium text-black mb-4'>{car.name}</h2>
            <h2 className='text-[28px] font-bold mb-4 text-black'>
                <span className='text-[12px] font-light text-black'>$</span>
                {car.price}
                <span className='text-[12px] font-light text-black'> /day</span>
            </h2>
            <Image src={car.image?.url}
                alt={car.name}
                width={220}
                height={200}
                className='w-[250px] h-[150px] mb-6 object-contain' />
                <div className='flex items-flex justify-around group-hover:hidden '>
                    <div className='text-center text-gray-500'>
                        <PiSteeringWheelFill className='w-full mx-auto text-[22px] mb-2' />
                        <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
                    </div>
                    <div className='text-center text-gray-500'>
                        <MdAirlineSeatReclineNormal className='w-full mx-auto text-[22px] mb-2' />
                        <h2 className='line-clamp-5 text-[14px] font-light'>{car.seat} Seat</h2>
                    </div>
                    <div className='text-center text-gray-500'>
                        <FaGasPump className='w-full text-[22px] mx-auto mb-2' />
                        <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg} MPG</h2>
                    </div>
                </div>
                
            <button className="hidden group-hover:flex
                items-center p-5 justify-between w-full py-3 mt-1 rounded-lg text-white bg-blue-500 transition" > Rent Now
                <span className="bg-blue-600 p-1 rounded" >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ transform: "rotate(-0deg)" }}
                        className="w-4 h-4 text-white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.03 20.03a.75.75 0 0 1 0-1.06L17 13H4.75a.75.75 0 0 1 0-1.5H17l-5.97-5.97a.75.75 0 0 1 1.06-1.06l7.25 7.25a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </button >
        </div >

    );
}


export default CarCard;