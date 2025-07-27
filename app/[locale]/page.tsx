"use client"
import Image from "next/image";
import Hero from "../components/Home/Hero";
import Searchinput from "../components/Home/Searchinput";
import CarsFilterOption from "../components/Home/CarsFilterOption";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import CarsList from "../components/Home/CarsList";


export default function Home() {

  const [carsList, setCarslist] = useState<any>([])
  const [carsOrgList, setCarsOrglist] = useState<any>([])
  useEffect(() => {
    getCarsList_();
  }, [])
  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarslist(result?.carLists)
    setCarsOrglist(result?.carLists)
  }

  const filterCarList = (brand: string, priceOrder?: string) => {
    let filtered = [...carsOrgList];

    if (brand) {
      filtered = filtered.filter((item: any) => item.carBrand === brand);
    }

    if (priceOrder === 'asc') {
      filtered = filtered.sort((a: any, b: any) => a.price - b.price);
    } else if (priceOrder === 'desc') {
      filtered = filtered.sort((a: any, b: any) => b.price - a.price);
    }
    setCarslist(filtered);
  }



  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
      <Searchinput />
      <CarsFilterOption
        carsList={carsOrgList}
        onFilterChange={(brand: string, priceOrder: string) =>
          filterCarList(brand, priceOrder)
        }/>
      <CarsList carsList={carsList} />
    </div>
  );
}
