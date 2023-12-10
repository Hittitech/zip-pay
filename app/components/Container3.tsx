import React from 'react'
import Image from 'next/image'
import QrImage from "@/public/QrImage.png"
import OrnageButton from './OrnageButton'
import Check from "@/public/Vector 43.jpg"


const Container3 = () => {

    const data=["Scan & Pay with your customised UPI ID",
        "Choose personalised QR themes to match your style",
        "Recharge, pay bills, shop online, and more"        
]
  return (
    <div className='flex flex-col gap-x-24 justify-center gap-y-12  gap-6  text-center items-center m-auto capitalize mt-24 md:flex-row '>
        <Image 
        src={QrImage}
        className='md:pl-12'
        alt='Card-image'
        width={400}
        />
        <div className='flex flex-col justify-between text-start gap-6  '>
        <h1 className="  text-2xl md:text-4xl tracking-wider  font-semibold  break-words">
        Your own UPI to make <br/> super fast payments

        </h1>
        <div>
        <ul className='list-none flex flex-col gap-y-4'>
      {data.map((text: string, index: number) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-5 h-5 border items-center justify-center text-center border-gray-300  mr-2">
           
            <Image
            alt='check'
            className='pt-2'
            src={Check}
            width={30}
            height={30}
            />
          </div>
          <span className="md:text-xl">{text}</span>
        </li>
      ))}
    </ul>
  </div>

        
          <div className='flex '>
          <OrnageButton 
            text='Get Your Own Upi'
            orange={true}
          />
          
          </div>

          
         

        </div>
    </div>
  )
}

export default Container3