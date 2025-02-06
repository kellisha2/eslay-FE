import React, { useContext, useState } from 'react'
import { MyProductsContext } from '../../App';

function AddProduct() {
  const {getProducts} = useContext(MyProductsContext);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product)
    })
      .then(data => data.json())
      .then(response => {
        if(response._id) {
          alert("Product added successfully");
          getProducts();
        }
      })
      .catch(error => console.error(error));
  }



  return (
    
    <div className='mt-5  sm:mx-auto sm:w-full sm:max-w-md m-12 '>
      <h1 className='' >Manage Your Listings</h1>
      <div className='border-3 border-gray-500 rounded-xl p-4 shadow-lg'>
        
        <h2>Add a Listing:</h2>
        <form className='mb-0 space-y-6 ' onSubmit={handleSubmit}>
          <label className='block text-medium font medium text-gray-700'>name:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="name" onChange={handleChange} /><br />
          <label className='mt-3'>image URL:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="img" onChange={handleChange} /><br />
          <label className='mt-3'>price:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="price" onChange={handleChange} /><br />
          <label className='mt-3'>description:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="description" onChange={handleChange} /><br />
          <label className='mt-3'>size:</label><select onChange={handleChange} name="size" className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
          </select><br />
          <label className='mt-3'>brand:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="brand" onChange={handleChange} /><br />
          <label className='mt-3'>condition:</label><input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="condition" onChange={handleChange} /><br />
          <label className='mt-3'>category:</label><input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="category" onChange={handleChange} /><br />
          <label className='mt-3'>gender:</label><input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="gender" onChange={handleChange} />
          <div><button className='mt-3 bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button></div>
        </form>
      </div>

        

        <div className='mt-3 border-3 border-gray-500 rounded-xl p-4 shadow-lg'>
        <h2 className='mt-3' >Delete a Listing:</h2>
        <form>
          <label className='mt-3'>product id:<input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" /></label>
          <label className='mt-3'>reason:<select className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'>
            <option value="">no inventory</option>
            <option value="">item damaged</option>
            <option value=""></option>
            <option value=""></option>
          </select></label>
          <div><button className='mt-3 bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded mb-8' type='submit'>Submit</button></div>
        </form></div>

      </div>
      )
}

      export default AddProduct