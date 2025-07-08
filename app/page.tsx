"use client"
import Image from "next/image";
import Hero from "./components/Home/Hero";
import Searchinput from "./components/Home/Searchinput";
import CarsFilterOption from "./components/Home/CarsFilterOption";

export default function Home() {
  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero/>
      <Searchinput/>
      <CarsFilterOption/>
    </div>
  );
}
