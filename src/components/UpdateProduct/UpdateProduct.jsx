import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyProductsContext } from '../../App';

const UpdateProduct = () => {
    const { productId } = useParams(); // to get the product id from the URL 
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


    useEffect(() => {                           //use the id from the useParams hook to get all the product details for that specific id to fill the form use the get product by id route 
        fetch(`/api/products/${productId}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET"
        })
            .then(data => data.json())
            .then(response => {
                if (response) {
                    setProduct(response);  // once we get the id we set it to the product state using the setProduct setter function
                }
            });
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((previous) => ({
            ...previous,   // keeps the other fields unchanged 
            [name]: value,
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product)
            })
            const result = await response.json();
            if(result._id) {
                alert("Product updated successfully");
                getProducts();
              }
        } catch (error) {
            console.log('Error: Update not complete', error)
        }
    }


    return (
        <div className='mt-3 border-3 border-gray-500 rounded-xl p-4 shadow-lg'>
            <h2 className='mt-3'>Update a Listing:</h2>
            <form className='mb-0 space-y-6 ' onSubmit={handleSubmit}>
                <label className='block text-medium font medium text-gray-700'>name:</label><input value={product.name} className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="name" onChange={handleChange} /><br />
                <label className='mt-3'>image URL:</label><input value={product.img} className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="img" onChange={handleChange} /><br />
                <label className='mt-3'>price:</label><input value={product.price} className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="price" onChange={handleChange} /><br />
                <label className='mt-3'>description:</label><input value={product.description} className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="description" onChange={handleChange} /><br />
                <label className='mt-3'>size:</label><select value={product.size} onChange={handleChange} name="size" className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500'>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select><br />
                <label className='mt-3'>brand:</label><input value={product.brand} className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' type="text" name="brand" onChange={handleChange} /><br />
                <label className='mt-3'>condition:</label><input value={product.condition} className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="condition" onChange={handleChange} /><br />
                <label className='mt-3'>category:</label><input value={product.category} className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="category" onChange={handleChange} /><br />
                <label className='mt-3'>gender:</label><input value={product.gender} className='mt-3 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500' type="text" name="gender" onChange={handleChange} />
                <div><button className='mt-3 bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button></div>
            </form></div>
    )
}

export default UpdateProduct