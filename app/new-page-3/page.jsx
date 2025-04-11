import HeroPage3 from '@/components/new-page-3/HeroPage3'
import React from 'react'
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const page3Data = jsonData?.newPage3
  return (
    <div>
      <HeroPage3 data={page3Data}/>
      
    </div>
  )
}

export default page