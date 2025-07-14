import React, { useEffect, useState } from "react";

function CarsFilterOption({ carsList, onFilterChange }: any) {
    const [brandList, setBrandList] = useState<any[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string>("");
    const [selectedPrice, setSelectedPrice] = useState<string>("");

    useEffect(() => {
        const uniqueBrands = new Set<string>();
        carsList.forEach((car: any) => uniqueBrands.add(car.carBrand));
        setBrandList(Array.from(uniqueBrands));
    }, [carsList]);

    // Run filter when either brand or price changes
    useEffect(() => {
        onFilterChange(selectedBrand, selectedPrice);
    }, [selectedBrand, selectedPrice]);

    const resetFilters = () => {
        setSelectedBrand("");
        setSelectedPrice("");
        onFilterChange("", "");
    };

    return (
        <div className="mt-10 flex items-center justify-between">
            <div>
                <h2 className="text-[30px] font-bold">Cars Catalog</h2>
                <h2>Explore our cars you might likes</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5  mx-2">
                {/* ✅ Brand Filter */}
                <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="select bordered block border-1 font-semibold text-black rounded-md outline-none bg-gray-100 hover:bg-gray-200 focus:ring-2 shadow-md focus:ring-blue-400 p-3 border-gray-300"
                >
                    <option value="">Manufactural</option>
                    {brandList.map((brand, index) => (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>

                <div className="gap-2 flex items-center justify-between">
                {/* ✅ Price Filter */}
                <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="select bordered md:block max-w-xs border-1 rounded-md p-3 shadow-sm outline-none text-black bg-gray-100 font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-blue-400 border-gray-300"
                >
                    <option value="">Price</option>
                    <option value="asc">Min to Max</option>
                    <option value="desc">Max to Min</option>
                </select>

                

                <button
                    onClick={resetFilters}
                    className="btn bg-red-500 lg:w-15 text-white sm:w-24 md:w-28 text-sm sm:text-base rounded  hover:bg-red-600  transition-all px-3 py-3">
                    Reset
                </button>
                </div>
            </div>
        </div>
    );
}

export default CarsFilterOption;
