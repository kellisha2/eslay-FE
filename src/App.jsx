import { createContext, useEffect, useState } from "react";
import Homepage from "./components/Homepage/Homepage"
import ProductPage from "./components/ProductPage/ProductPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/ManageListings/addProduct";
import Navbar from "./components/Header/Navbar";
import SelectAProduct from "./components/SelectAProduct";
import Categories from "./components/Homepage/Categories";
import WomenProducts from "./components/ProductPage/WomenProducts";
import "../src/components/Header/header.css"

// 1. createContext
export const MyProductsContext = createContext();


function App() {
  const [products, setProducts] = useState([]);

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
    <MyProductsContext.Provider value={{ products, setProducts }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/women" element={<WomenProducts category="women"/>} />
          <Route path="/products/men" element={<Categories category="men"/>} />
          <Route path="/products/accessories" element={<Categories category="accessories"/>} />
          <Route path="/product/:productId" element={<SelectAProduct/>} />

        </Routes>
      </BrowserRouter>
    </MyProductsContext.Provider>

  )
}

export default App
