import Activities from '@/components/nightLife/Activities'
import NightLifeCarasol from '@/components/nightLife/NightLifeCarasol'
import React from 'react'
import jsonData from "../../public/assets/text/en.json";

const NightLife = () => {
  const nightLifeData = jsonData?.nightLife
  return (
    <div>
        <NightLifeCarasol  nightPlace={nightLifeData?.hero}/>
        <Activities activitiesdata={nightLifeData?.nightActivites} />
      
    </div>
  )
}

export default NightLife
