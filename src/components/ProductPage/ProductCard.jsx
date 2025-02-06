import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyProductsContext } from '../../App';

function ProductCard({ product }) {
  const { getProducts } = useContext(MyProductsContext);
  const { isAdmin } = useContext(MyProductsContext)

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
          if (response) {
            alert("Product delete successfully");
            getProducts();  //add this function to get the latest products so we don't have to refresh to see the deletion
          }
        });
    }
  }

  return (

    <div className='product'>
      <Link to={`/product/${product._id}`}>
        <img className="" src={product.img} alt={product.name} />
      </Link>
      <h3 className='product-name'>{product.name}</h3>
      <p className='product-price' >{new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(product.price)}</p>
      {isAdmin && <div className='buttons flex gap-1 justify-center'>
        <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to={`/update/${product._id}`}>Update</Link>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleDelete(product._id)}>Delete</button>
      </div>
      }

    </div>

  )
}

export default ProductCard