import React, { useState } from 'react'

function AddProduct() {
  const [ product, setProduct ] = useState({
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
      .then(response => console.log(response))
      .catch(error => console.error(error));
    }

    const updateData = async (id, updatedData) =>{
      try {
        const response = await fetch(`api/products/${id}`, {
          method:'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData)
        })
        const result = await response.json();
        console.log('Updated successfully' , result)
      } catch(error) {
        console.log('Error: Update not complete' , error)
      }

    }


  return (
    <div className='mt-5  sm:mx-auto sm:w-full sm:max-w-md m-12 '>
      <h1>Manage Your Listings</h1>
      <h2>Add a Listing:</h2>
      <form className='mb-0 space-y-6 ' onSubmit={handleSubmit}>
        <label className='block text-medium font medium text-gray-700'>name:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="name" onChange={handleChange} /><br />
        <label>image URL:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'type="text" name="img" onChange={handleChange}/><br />
        <label>price:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'type="text" name="price" onChange={handleChange}/><br />
        <label>description:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'type="text" name="description" onChange={handleChange}/><br />
        <label>size:</label><select onChange={handleChange} className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'>
          <option value="">Small</option>
          <option value="">Medium</option>
          <option value="">Large</option>
          <option value="">X-Large</option>
        </select><br />
        <label>brand:</label><input className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'type="text" name="brand" onChange={handleChange}/><br />
        <label>condition:</label><input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="condition" onChange={handleChange}/><br />
        <label>category:</label><input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="category" onChange={handleChange}/><br />
        <label>gender:</label><input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="gender" onChange={handleChange}/>
        <div><button className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button></div>
      </form>
      <h2 className='mt-3'>Update a Listing:</h2>
      <form>
        <label className='mt-3'>product id:<input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" /></label><br/>
        <label className='mt-3'>update category:<select className=' mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'>
        <option value="">Select:</option>
          <option value="name">name</option>
          <option value="img">image</option>
          <option value="price">price</option>
          <option value="description">description</option>
          <option value="size">size</option>
          <option value="brand">brand</option>
          <option value="condition">condition</option>
          <option value="category">category</option>
          <option value="gender">gender</option>
        </select></label>
        <label className='mt-3'>change to:<input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" /></label>
        <div><button className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded mt-3' type='submit'>Submit</button></div>

      </form>
      <h2 className='mt-3' >Delete a Listing:</h2>
      <form>
        <label className='mt-3'>product id:<input className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'type="text" /></label>
        <label className='mt-3'>reason:<select className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'>
          <option value="">no inventory</option>
          <option value="">item damaged</option>
          <option value=""></option>
          <option value=""></option>
        </select></label>
        <div><button className='mt-3 bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button></div>
      </form>

    </div>
  )
}

export default AddProduct