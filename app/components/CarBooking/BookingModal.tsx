import React, { useState } from 'react'
import CarCard from '../Home/CarCard';
import Form from './Form';

function BookingModal({ car, onClose }: any) {
    if (!car) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-lg shadow-xl overflow-hidden flex flex-col">
                {/* Modal Content */}

                <div className="bg-white w-full max-w-2xl rounded-lg overflow-y-auto flex-1 p-6 shadow-xl animate-fadeIn">
                    <div className='border-b-[1px] border-blue-500 border rounded-lg pb-2'>
                        <h3 className='text-[30px] font-light text-center text-gray-400'>Rent A Car Now!</h3>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='p-2 sm:w-full'>
                            <CarCard car={car} />
                        </div>
                        <div>
                            <Form car={car} onClose={onClose} />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default BookingModal