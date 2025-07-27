import { createBooking, getStoreLocations } from '@/services'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


function Form({ car, onClose }: any) {

    const [storeLocation, setStoreLocation] = useState<any>([]);
    const [formValue, setFormValue] = useState({
        location: "",
        pickUpDate: "",
        dropOffDate: "",
        pickUpTime: "",
        dropOffTime: "",
        contactNumber: "",
        userName: "",
        carId: "cmcv1dhnc8afh06l7oibpy6l4"

    })
    useEffect(() => {
        getStoreLocation_();
    }, [])

    useEffect(() => {
        if (car) {
            setFormValue((prev) => ({
                ...prev,
                carId: car.id
            }));
        }
    }, [car])
    const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        console.log(resp);
        setStoreLocation(resp?.storesLocations)
    }

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async () => {
        try {
            const resp = await createBooking(formValue);
    
            if (resp?.createBooking?.id) {
                toast.success("Booking created successfully!");
                onClose(); // optional: close modal after success
            } else {
                toast.error("Booking failed. Please try again.");
            }
        } catch (error) {
            console.error("Error creating booking:", error);
            toast.error("Something went wrong. Please try again later.");
        }
    };
    

    return (
        <div>
            <form className="w-full max-w-3xl mx-auto p-6 bg-white ">
                {/* Pick Up Location */}
                <div className="">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Pick Up Location</label>
                    <select className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400" name="location"
                        value={formValue.location} onChange={handleChange}>
                        <option value="" disabled>Pickup Location?</option>
                        {storeLocation && storeLocation.map((loc: any, index: number) => (
                            <option key={index} value={loc.addresse}>{loc.addresse}</option>
                        ))}

                    </select>





                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Pick Up Date</label>
                        <input
                            type="date"
                            placeholder='Type here'
                            name="pickUpDate"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Drop Off Date</label>
                        <input
                            type="date"
                            placeholder='Type here'
                            name="dropOffDate"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Times */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Pick Up Time</label>
                        <input
                            type="time"
                            placeholder='Type here'
                            name="pickUpTime"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Drop Off Time</label>
                        <input
                            type="time"
                            placeholder='Type here'
                            name="dropOffTime"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number</label>
                    <input
                        type="tel"
                        placeholder="Type here"
                        name="contactNumber"
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

            </form>
            <div className="p-4 modal-action border-t flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition"
                >
                    CLOSE
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition"
                >
                    SAVE
                </button>
            </div>
        </div>
    )
}

export default Form