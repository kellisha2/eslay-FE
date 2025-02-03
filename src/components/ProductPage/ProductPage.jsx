import React, { useContext } from 'react'
import Navbar from '../Header/Navbar'
import ProductCard from './ProductCard'
import { MyProductsContext } from '../../App'

function ProductPage() {
  const { products } = useContext(MyProductsContext);

  return (
    <div className='productPage'>
      <h1>ProductPage</h1>
      {products &&
        products.map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))
      }
    </div>
  )
}

export default ProductPage