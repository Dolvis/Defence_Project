"use client";
import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

function CarsList(props: any) {
    const [selectedCar, setSelectedCar] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (car: any) => {
        setSelectedCar(car);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedCar(null);
    };

    return (
        <>
            <div className="grid p-2 space-y-3 space-x-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {props.carsList.map((car: any, index: number) => (
                    <div
                        key={car.id || index}
                        onClick={() => openModal(car)}
                        className="cursor-pointer"
                    >
                        <CarCard car={car} />
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <BookingModal car={selectedCar} onClose={closeModal}/>
            )}
        </>
    );
}

export default CarsList;
