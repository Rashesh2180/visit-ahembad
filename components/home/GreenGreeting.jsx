import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const GreenGreeting = ({GreetingData,generalData}) => {
  return (
    <div className='bg-[#F1FFE0] pb-10 pt-16'>
        <div className='max-w-4xl mx-auto sm:h-[450px] sm:p-32 p-14 green-bg flex justify-center items-center'>
            <div className=' w-full bg-white sm:p-20 p-5'>
                <h2 className='text-black sm:text-3xl text-2xl font-semibold text-center mb-5'>{GreetingData?.title} </h2>
                <p className='text-center text-black text-sm mb-3'>{GreetingData?.subTitle}</p>
                <Link href="/" className='text-center underline text-black text-sm block uppercase'>{generalData?.readMore}</Link>

            </div>

        </div>
      
    </div>
  )
}

export default GreenGreeting
