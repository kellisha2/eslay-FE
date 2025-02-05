import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { MyProductsContext } from '../../App'

function ProductPage() {
  const { products } = useContext(MyProductsContext);

  return (
    <div className='product-page'>
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