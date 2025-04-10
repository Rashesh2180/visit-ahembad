import React from 'react'
import CuratedHero from '@/components/curated-experiences/CuratedHero'
import MakeIt from '@/components/curated-experiences/MakeIt'
import jsonData from "../../public/assets/text/en.json";

const page = () => {

  const data = jsonData?.curated
  return (
    <div>
        <CuratedHero data={data?.hero}/>
        <MakeIt data={data?.makeIt} generalText={jsonData?.general}/>
      
    </div>
  )
}

export default page
