import IconicDualSection from '@/components/iconic-monuments/IconicDualSection'
import IconicGallery from '@/components/iconic-monuments/IconicGallery'
import ImageBanner from '@/components/iconic-monuments/ImageBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <ImageBanner/>
      <IconicDualSection/>
      <IconicGallery/>
    </div>
  )
}

export default page
