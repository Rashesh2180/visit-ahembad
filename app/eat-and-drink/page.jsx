"use client"
import Adventure from '@/components/eat-and-drink/Adventure'
import FoodCategory from '@/components/eat-and-drink/FoodCategory'
import FoodHero from '@/components/eat-and-drink/FoodHero'
import React from 'react'
import jsonData from "../../public/assets/text/en.json";

const page = () => {

  const foodData = jsonData?.food
  return (
    <div>
      <FoodHero data={foodData?.hero}/>
      <Adventure data={foodData?.adeventure}/>
      <FoodCategory data={foodData?.foodCategory}/>
    </div>
  )
}

export default page
