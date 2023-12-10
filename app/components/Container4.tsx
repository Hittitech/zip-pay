import React from 'react'
import Image from 'next/image'
import Phone1 from "@/public/phone1.png"

import Image39 from "@/public/image 39.png"
import Image40 from "@/public/image 40.png"
import Image41 from "@/public/image 41.png"

const Container4 = () => {

    
  return (
    <div className=' flex flex-col justify-center gap-x-24 gap-y-12 text-center  min-h-screen items-center m-auto md:flex-row mt-24 mb-24 md:mb-6'>
        <Image 
        src={Phone1}
        alt='Card-image'
        width={400}
        />
        <div className='flex pt-4 capitalize flex-col justify-between text-center items-center md:items-start md:text-start gap-6  '>
        <h1 className=" text-3xl md:text-4xl ">
        Earn unlimited rewards
        </h1>
        <p className='md:text-xl'>
        Win infinite cashbacks, discounts,<br/> and offers on your favourite brands
        </p>

        <div className='flex flex-col gap-y-4 w-full md:items-left justify-center md:text-left'>
            <div className='flex justify-between py-2  px-4 gap-6  rounded-md  bg-opacity-20 bg-gray-500 w-full md:w-3/4 '>
                <Image
                alt='image'
                className='w-3/4 md:w-6'
                src={Image39}
                height={30}
                width={30}
                />
                <p>Rewards every time you spend with FamPay</p>
            </div>
            <div className='flex justify-between py-2 px-4 gap-6  rounded-md  bg-opacity-20 bg-gray-500 w-full md:w-3/4 '>
                <Image
                alt='image'
                className='w-3/4 md:w-6'
                src={Image40}
                height={30}
                width={30}
                />
                <p>Rewards every time you spend with FamPay</p>
            </div>
            <div className='flex justify-between py-2 px-4 md:gap-6  rounded-md  bg-opacity-20 bg-gray-500  w-full md:w-3/4 '>
                <Image
                alt='image'
                className='w-3/4 md:w-6'
                src={Image41}
                height={30}
                width={30}
                />
                <p>Rewards every time you spend with FamPay</p>
            </div>

        </div>

       

        
          
         

        </div>
    </div>
  )
}

export default Container4