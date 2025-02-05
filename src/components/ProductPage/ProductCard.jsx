import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className='product'>
      <div><Link to="/product/:productId">
        <img className="product-img" src={product.img} alt={product.name} /></Link></div>
        <div><h3 className='product-name'>{product.name}</h3></div>
        <p className='product-price' >{product.price}</p>
    
    </div>
  )
}

export default ProductCard