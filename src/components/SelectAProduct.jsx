import React from 'react'

function SelectAProduct({product}) {
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