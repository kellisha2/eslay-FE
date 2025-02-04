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
  return (
    <div>
      <h1>Manage Your Listings</h1>
      <h2>Add a Listing:</h2>
      <form onSubmit={handleSubmit}>
        <label>name:</label><input type="text" name="name" onChange={handleChange} /><br />
        <label>image URL:</label><input type="text" name="img" onChange={handleChange}/><br />
        <label>price:</label><input type="text" name="price" onChange={handleChange}/><br />
        <label>description:</label><input type="text" name="description" onChange={handleChange}/><br />
        <label>size:</label><input type="text" name="size" onChange={handleChange}/><br />
        <label>brand:</label><input type="text" name="brand" onChange={handleChange}/><br />
        <label>condition:</label><input type="text" name="condition" onChange={handleChange}/><br />
        <label>category:</label><input type="text" name="category" onChange={handleChange}/><br />
        <label>gender:</label><input type="text" name="gender" onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      <h2>Update a Listing:</h2>
      <form>
        <label>product id:<input type="text" /></label>
        <label>update category:<select className='update-item'>
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
        <label>change to:<input type="text" /></label>

      </form>
      <h2>Delete a Listing:</h2>
      <form>
        <label>product id:<input type="text" /></label>
        <label>reason:<select className="cars">
          <option value="">no inventory</option>
          <option value="">item damaged</option>
          <option value=""></option>
          <option value=""></option>
        </select></label>
      </form>

    </div>
  )
}

export default AddProduct