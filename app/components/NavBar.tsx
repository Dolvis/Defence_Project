"use client";

import Image from 'next/image'
import React from 'react'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

function NavBar(){
    return(
        <header className='flex items-center p-3 px-5 justify-between shadow-blue-600 shadow-md border-b0[1px] '>
            <div className="flex justify-end items-center">
            <Image src='/icon2.png'
            alt='logo'
            width={100}
            height={10}
            />
            </div>
            <span  className='hidden md:flex gap-5'>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white text-gray-400'>Home</h2>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white text-gray-400'>History</h2>
                <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white text-gray-400'>Contact Us</h2>
            </span>
            <div className="flex justify-end items-center p-4 gap-7 h-10 ">
            <UserButton/>
            </div>
        </header>
    )
}

export default NavBar;
