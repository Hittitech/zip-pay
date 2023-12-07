import React from 'react'
import Image from 'next/image';

const Partner = () => {
    const startImageNumber = 29;
    const endImageNumber = 36;
     const numberOfImages = endImageNumber - startImageNumber + 1;
  
   
  return (
    <div className='pt-10 flex flex-col w-3/4 m-auto justify-center mb-10  text-center'>
      <h1 className='text-2xl pb-12'>We Are Trusted By</h1>
      <div className='pt-6 flex flex-wrap w-200 gap-x-4 gap-y-2 '>
    
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