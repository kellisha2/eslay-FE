import React from 'react'

function AddProduct() {
  return (
    <div>
        <h1>Manage Your Listings</h1>
        <h2>Add a Listing:</h2>
        <form>
            <label>name:</label><input type="text" /><br/>
            <label>image URL:</label><input type="text" /><br/>
            <label>price:</label><input type="text" /><br/>
            <label>description:</label><input type="text" /><br/>
            <label>size:</label><input type="text" /><br/>
            <label>brand:</label><input type="text" /><br/>
            <label>condition:</label><input type="text" /><br/>
            <label>category:</label><input type="text" /><br/>
            <label>gender:</label><input type="text" />
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