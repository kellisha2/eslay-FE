import React, { useContext , useState} from 'react'
import { useParams } from 'react-router-dom'
import { MyProductsContext } from '../App'

function SelectAProduct({product}) {

  const { products } = useContext(MyProductsContext);

  const {productId} = useParams();

  console.log(productId)
  return (
    <div>
        <section className='images'>
            <img src={product.img} alt={product.name}/>
        </section>
        <section className='item-details'>
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <p>{product.size}</p>
        </section>


    </div>
  )
}

export default SelectAProduct