import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyProductsContext } from '../App'

function SelectAProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    img: "",
    price: 0,
    description: "",
    size: "",
    brand: "",
    condition: "",
    category: "",
    gender: ""
  })

  useEffect(() => {
    fetch(`/api/products/${productId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET"
    })
      .then(data => data.json())
      .then(response => {
        if (response) {
          setProduct(response);
        }
      });
  }, []);

  return (
    <section>
      <div className='images'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='item-details'>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <p>{product.size}</p>
        <p>{product.brand}</p>
        <p>Condition: {product.condition}</p>
      </div>
    </section>
  )
}

export default SelectAProduct