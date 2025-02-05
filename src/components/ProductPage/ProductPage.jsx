import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { MyProductsContext } from '../../App'
import Title from '../Homepage/Title'

function ProductPage() {
  const { products } = useContext(MyProductsContext);

  return (
    <div>
      <div className='flex justify-between text-base sm:text-2x1 mb-4'>
        <Title />

      {/* Sort by Price */}
        <select className='border-2 border-gray-300 text-sm px-3 '>
          <option value="price">Sort by: Price</option>
          <option value="img">Sort by: Low to High</option>
          <option value="price">Sort by: High to Low</option>
        </select>

      </div>
     <div className='grid grid-cols-4 gap-4 gap-y-6 h-200px'>
      <h1 >All Product</h1>
      {products &&
        products.map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))
      }
      </div>
    </div>
  )
}

export default ProductPage