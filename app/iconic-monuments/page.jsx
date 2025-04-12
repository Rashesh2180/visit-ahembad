"use client"
import IconicDualSection from '@/components/iconic-monuments/IconicDualSection'
import IconicGallery from '@/components/iconic-monuments/IconicGallery'
import ImageBanner from '@/components/iconic-monuments/ImageBanner'
import React from 'react'
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const iconicData = jsonData?.iconic
  return (
    <div>
      <ImageBanner title={iconicData?.heroTitle}/>
      <IconicDualSection  data={iconicData?.fortDeatail}/>
      <IconicGallery data={iconicData?.galleryData}/>
    </div>
  )
}

export default page
