import Products from '@/components/shop/Products'
import React from 'react'
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const shopData = jsonData?.shopping
  return (
    <div>
      <Products data={shopData} />
    </div>
  )
}

export default page
