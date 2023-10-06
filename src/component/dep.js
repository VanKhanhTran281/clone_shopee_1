import {useEffect,useState} from 'react'
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import data from './data'
function Product(){
//     const [selectedBrand, setSelectedBrand] = useState('Asus');
//   const [selectedPriceRange, setSelectedPriceRange] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     fetch(`https://fptshop.com.vn/apiFPTShop/Product/GetProductList?brandAscii=&url=https:%2F%2Ffptshop.com.vn%2Fmay-tinh-xach-tay&s=4ab70922b94e4567e35475b24f5274d3283c8359ed14959a292638698627b818`)
//       .then(res => res.json())
//       .then(listss => {
//         const filtered = listss.datas.filterModel.listDefault.list.filter(product => product.brandName === selectedBrand);
//         setProducts(filtered);
//         setFilteredProducts(filtered);
//       });
//   }, [selectedBrand]);
return(
    <h1>Trần văn Khánh</h1>
)

}
export default Product
