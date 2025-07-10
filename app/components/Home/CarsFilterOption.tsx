import React from 'react'

function CarsFilterOption() {
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
                <h2>Explore our cars you might likes</h2>
            </div>
            <div className="flex gap-5">
                <select defaultValue='Price' className="select bordered md:block w-full max-w-xs border-1 rounded-md p-3 shadow-sm outline-none text-black bg-gray-100 font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-blue-400 border-gray-300 ">
                    <option disabled={true} className='font-bold'>Price</option>
                    <option>Min to Max</option>
                    <option>Max to Min</option>
                </select>
                <select defaultValue='Manufactural' className="select bordered md:block w-full max-w-xs hidden border-1 font-semibold text-black rounded-md outline-none bg-gray-100 hover:bg-gray-200 focus:ring-2 shadow-md focus:ring-blue-400 p-3 border-gray-300 ">
                    <option disabled={true} className='font-bold'>Manufactural</option>
                    <option>Honda</option>
                    <option>BMW</option>
                    <option>Toyota</option>
                </select>
            </div>
        </div>

    )
}
export default CarsFilterOption