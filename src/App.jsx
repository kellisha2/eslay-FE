import { useEffect, useState } from "react";
import Homepage from "./components/Homepage/Homepage"
import ProductPage from "./components/ProductPage/ProductPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/ManageListings/addProduct";
import Navbar from "./components/Header/Navbar";

function App() {
  const [ products, setProducts ] = useState([]);

  const getProducts = async () => {
    try {

      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data)
    } catch (error) {
      console.error({ err: error.message })
    }
  }

  useEffect(() => {
    getProducts();
  }, []);



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allproducts" element={<ProductPage produc/>} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
