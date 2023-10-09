import {useEffect,useState} from 'react'
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import data from './data'
function Product(){

const [products] = useState(data);
return(
    <div style={{padding:32}}>
      {products.map(pro=>(
        <div key={pro.item_basic.itemid}>
          
          {pro.item_basic.name}
          ---
          {pro.item_basic.price}
          ---
          {pro.item_basic.price_max}
          ---
          <img src={`https://down-vn.img.susercontent.com/file/${pro.item_basic.image}`} alt=''/>
        </div>
      ))}
      
    </div>
  )


}
export default Product
