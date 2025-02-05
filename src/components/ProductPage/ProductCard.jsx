import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (

    <div>
      <div className='product'>
        <Link to="/product/:productId">
        <img className="h-100" src={product.img} alt={product.name} /></Link>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-price' >{product.price}</p>

      </div>


    </div>


  )
}

export default ProductCard