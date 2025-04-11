import GoShoppingPage from '@/pages/goShopping/GoShoppingPage'
import React from 'react'
import jsonData from "../../public/assets/text/en.json";
import TextTileArticle from '@/components/goshop/TextTileArticle';

const GoShopping = () => {
  return (
    <div>
        <GoShoppingPage/>
        <TextTileArticle data={jsonData?.goShopping?.textTile}/>
      
    </div>
  )
}

export default GoShopping
