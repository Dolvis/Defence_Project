"use client"
import Image from "next/image";
import Hero from "./components/Home/Hero";
import Searchinput from "./components/Home/Searchinput";
import CarsFilterOption from "./components/Home/CarsFilterOption";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import CarsList from "./components/Home/CarsList";

export default function Home() {

  const [carsList,setCarlist]=useState<any>([])
  useEffect(()=>{
    getCarsList_();
  },[])
  const getCarsList_=async()=>{
    const result:any=await getCarsList();
    setCarlist(result?.carLists)
  }

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero/>
      <Searchinput/>
      <CarsFilterOption/>
      <CarsList carsList={carsList}/>
    </div>
  );
}
