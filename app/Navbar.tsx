import React from 'react'
import Link from 'next/link'
import Logo from "../public/Logo.png"
import Image from 'next/image'
import OrnageButton from './components/OrnageButton'
const Navbar = () => {
  
  return (
    <div className='w-full pt-10 bg-black text-white'>
    <nav className="flex justify-between w-[80%] m-auto space-x-6   px-5 h-14  items-center ">
       <Link href={"/"}>
        <Image alt='fampay-logo' width={148} height={43} src={Logo}></Image>
        </Link>
        <ul className='flex gap-x-12 items-center justify-between'>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <OrnageButton
          orange={true}
          text="Download App"
          />

        </ul>
    </nav>
    </div>
  )
}

export default Navbar