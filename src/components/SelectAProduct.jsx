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
    <section className="flex items-start space-x-6 p-4">
    {/* Image Section */}
    <div className="w-1/3">
      <img src={product.img} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
    </div>
  
    {/* Product Details */}
    <div className="w-1/3 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <span className="block text-gray-700 font-bold">${product.price}</span>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-500">Size: {product.size}</p>
      <p className="text-gray-500">Brand: {product.brand}</p>
      <p className="text-gray-500">Condition: {product.condition}</p>
    </div>
  
    {/* Button Section */}
    <div className="w-1/3 flex items-center">
      <button
        type="button"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900"
      >
        Add to Cart
      </button>
    </div>
  </section>
  )
}

export default SelectAProduct