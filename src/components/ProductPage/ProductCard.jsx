import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyProductsContext } from '../../App';

function ProductCard({ product }) {
  const {getProducts} = useContext(MyProductsContext);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      fetch(`/api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE"
      })
        .then(data => data.json())
        .then(response => {
          if(response) {
            alert("Product delete successfully");
            getProducts();
          }
        });
    }
  }

  return (
    <div>
      <div className='product'>
        <Link to="/product/:productId">
          <img className="" src={product.img} alt={product.name} /></Link>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-price' >{product.price}</p>

        <div className='buttons'>
           <Link to={`/update/${product._id}`}>Update</Link>
          <button className='btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard