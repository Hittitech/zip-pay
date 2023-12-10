import React from 'react'
import Link from 'next/link'
import Logo from "../public/Logo.png"
import Image from 'next/image'
const Navbar = () => {
  
  return (
    <div className='flex text-white bg-black justify-center gap-6 text-center items-center m-auto pt-12'>
    <nav className="flex justify-between w-[90%] m-auto space-x-6   px-5 h-6  items-center ">
       <Link href={"/"}>
        <Image
         alt='fampay-logo'
         className='w-16  md:w-32'
          width={148} 
          height={43} 
          src={Logo}></Image>
        </Link>
        <ul className='flex gap-x-4  text-sm md:text-xl md:gap-x-12 items-center justify-between'>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li className='bg-orange-400 rounded-full text-[0.3rem]  text-center items-center   md:text-sm md:py-2 px-3 md:font-medium '>
              Download 
          </li>

        </ul>
    </nav>
    </div>
  )
}

export default Navbar