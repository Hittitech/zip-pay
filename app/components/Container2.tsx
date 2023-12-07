import React from 'react'
import Image from 'next/image'
import FamXCard from "@/public/FamXCard.png"
import OrnageButton from './OrnageButton'


const Container2 = () => {

    const listData:string[]=["Tap & Pay with your personalised card",
                     "A Numberless card that keeps all your info secure"  ,
                     "Design your own card with a customised name and doodles" ,
                     "Super safe card that you can block or pause anytime"    
                ]
  return (
    <div className='flex capitalize justify-center gap-6 text-center items-center  mb-10'>
        <Image 
        src={FamXCard}
        className='transform rotate-45 '
        alt='Card-image'
        width={700}
        />
        <div className='flex flex-col  text-start gap-y-6 '>
        
          <h1 className='text-4xl tracking-tight text-orange-400 '>Fampay</h1>
          <div>
            <ul className=' list-none flex flex-col font-semibold gap-y-4 text-xl'>
                

                        {
                            listData.map((text: string, index: number) => (
                         <li key={index} className="relative before:block before:w-2 before:h-2 before:bg-orange-400 before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
                                {text}
                              </li>
                            ))
                          }
                          
                    
                


            </ul>
          </div>

        
            
         

        </div>
    </div>
  )
}

export default Container2