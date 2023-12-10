import React from 'react'
import Image from 'next/image';

const Partner = () => {
    const startImageNumber = 29;
    const endImageNumber = 36;
     const numberOfImages = endImageNumber - startImageNumber + 1;
  
   
  return (
    <div className='px-8  md:px-32  flex flex-col justify-center md:gap-6 text-center items-center mt-24'>
      <h1 className='text-2xl mb-12'>We Are Trusted By</h1>
      <div className='pt-6 flex w-50  items-center text-center flex-wrap md:w-200 gap-x-4 gap-y-4 md:gap-y-4 '>
    
    {[...Array(numberOfImages)].map((_, index) => (
          <div             key={index}
          className='flex  rounded-md bg-gray-600  bg-opacity-20'>

          <Image
            src={`/image%20${startImageNumber + index}.png`}
            alt={`Image ${startImageNumber + index}`}
            width={200}
            height={250}
            className='p-6'
          />
          </div>
        ))}
    </div>
  </div>

   
  
  )
}

export default Partner