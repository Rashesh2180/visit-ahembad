import Blog from '@/components/architecture-of-the-city/Blog'
import DualSection from '@/components/architecture-of-the-city/DualSection'
import Places from '@/components/architecture-of-the-city/Places'
import React from 'react'

const page = () => {
  return (
    <div>
      <DualSection/>
      <Blog/>
      <Places/>
    </div>
  )
}

export default page
