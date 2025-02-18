import React, { useContext, useState } from 'react'
import ProductCard from './ProductCard'
import { MyProductsContext } from '../../App'

function ProductPage() {
  const { products } = useContext(MyProductsContext);
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className='flex'>

      {/* Filter by Category */}

      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Women'} />Women</p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Men'} />Men</p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Unisex'} />Unisex</p>

            </div>
            <select className='border-2 border-gray-300 text-sm px-3 '>
              <option value="price">Sort by: Price</option>
              <option value="img">Sort by: Low to High</option>
              <option value="price">Sort by: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className='all-products'>
        <h1 className='text-center mb-6'>All Products</h1>
        <div className='grid grid-cols-4 gap-4 gap-y-6'>

          {products &&
            products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default ProductPage