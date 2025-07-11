import React, { useState } from 'react'
import CarCard from './CarCard'

function CarsList(props: any) {
    const [activeCarId, setActiveCarId] = useState<string | null>(null);
    return (
        <div className='grid p-6 space-y-3 space-x-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {props.carsList.map((car: any) => (

                <CarCard
                    key={car.id}
                    car={car}
                    isActive={activeCarId === car.id}
                    onClick={() =>
                        setActiveCarId((prev) => (prev === car.id ? null : car.id))
                    } />

            ))}

        </div>
    );
}

export default CarsList;