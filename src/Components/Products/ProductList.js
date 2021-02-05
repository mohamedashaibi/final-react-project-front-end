import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import './Css/ProductList.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/Actions/Products/actions'

function ProductList() {
    
    const dispatch = useDispatch()

    const products = useSelector(state=>state.ProductsReducer.products)

    const searchText = useSelector(state=>state.ProductsReducer.searchText)

    
    const [productsList, setProductsList] = useState([])
    
    useEffect(() => {

        setProductsList(products)

    }, [])

    return (
        <div className="product-list">
            {productsList?products.filter(el=>el.name.toLowerCase().includes(searchText.toLowerCase().trim())).map((item, index)=>{
                
                return <ProductCard product={item} key={index}/>
            }):"Products is empty"}
        </div>
    )
}

export default ProductList
