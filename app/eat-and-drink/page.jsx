import Adventure from '@/components/eat-and-drink/Adventure'
import FoodCategory from '@/components/eat-and-drink/FoodCategory'
import FoodHero from '@/components/eat-and-drink/FoodHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <FoodHero/>
      <Adventure/>
      <FoodCategory/>
    </div>
  )
}

export default page
