import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className='product'>
      <Link to="/">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard