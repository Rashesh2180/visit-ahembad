import Events from '@/components/home/Events'
import Explore from '@/components/home/Explore'
import Featurre from '@/components/home/Feature'
import Festival from '@/components/home/Festival'
import GreenGreeting from '@/components/home/GreenGreeting'
import HeritageCity from '@/components/home/HeritageCity'
import HeroBanner from '@/components/home/HeroBanner'
import HomeBanner from '@/components/home/HomeBanner'
import LocationMap from '@/components/home/LocationMap'
import MustSeePlace from '@/components/home/MustSeePlace'
import VisitCity from '@/components/home/VisitCity'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <HeroBanner/>
    <HeritageCity/>
    <MustSeePlace/>
    <Explore/>
    <Featurre/>
    <GreenGreeting/>
    <LocationMap/>
  
    </>
  )
}

export default HomePage
