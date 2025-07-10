import React from 'react'
import CarCard from './CarCard'

function CarsList(props: any) {
    return (
        <div className='grid p-5 space-y-3 space-x-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {props.carsList.map((car: any, index: number) => (
                <div key={car.id}>
                    <CarCard car={car}/>
        
                </div>
            ))}

        </div>
    )
}

export default CarsList