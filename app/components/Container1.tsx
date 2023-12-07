import React from 'react'
import Image from 'next/image'
import FamXCard from "@/public/FamXCard.png"
import OrnageButton from './OrnageButton'


const Container = () => {
  return (
    <div className='flex justify-center gap-6 text-center items-center m-auto'>
        <Image 
        src={FamXCard}
        className='transform rotate-45 '
        alt='Card-image'
        width={700}
        />
        <div className='flex flex-col  text-start gap-y-6 '>
        <h1 className="text-5xl tracking-wider gap-y-6  break-words">
        Personalised UPI <br/> and card for teens
        </h1>
          <p className='text-white  tracking-wide text-xl'>Lörem ipsum androception migt.<br/> Plalonde van supraktig. Rer rens i </p>
        
          <div className='flex gap-8'>
          <OrnageButton 
            text='Get Now'
            orange={true}
          />
          <OrnageButton 
            orange={false}
            text='Learn More'
          />
          </div>

          <div className='flex gap-x-6'>
            <div className='flex flex-col justify-center  text-center p-4 rounded-md bg-gray-600  bg-opacity-20'>
              <h1 className=' text-xl'>4.4 ratings</h1>
              <p className=' text-gray-500  opacity-60'>on google playstore</p>
            </div>
            <div className='flex flex-col justify-center  text-center p-4 rounded-md bg-gray-600  bg-opacity-20'>
              <h1 className=' text-xl'>10M+ Downloads</h1>
              <p className=' text-gray-500  opacity-60'>on google playstore</p>
            </div>
            
          </div>
         

        </div>
    </div>
  )
}

export default Container