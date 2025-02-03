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
           <select className=''>
            <option value="name">name</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
           <label><input type="text" /></label>
            
        </form>
        <h2>Delete a Listing:</h2>
        <form>
        <label><input type="text" /></label>
        <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        </form>

    </div>
  )
}

export default AddProduct