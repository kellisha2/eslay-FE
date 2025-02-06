import { createContext, useEffect, useState } from "react";
import Homepage from "./components/Homepage/Homepage"
import ProductPage from "./components/ProductPage/ProductPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/ManageListings/addProduct";
import Navbar from "./components/Header/Navbar";
import SelectAProduct from "./components/SelectAProduct";
import WomenProducts from "./components/ProductPage/WomenProducts";
import MenProducts from "./components/ProductPage/MenProducts";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
// import "../src/components/Header/header.css"

export const MyProductsContext = createContext();


function App() {

  const [isAdmin, setIsAdmin ] = useState(false); //Toggle state
  const [products, setProducts] = useState([]);   //Data state

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
    <MyProductsContext.Provider value={{ products, setProducts, getProducts, isAdmin, setIsAdmin }}>
      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/women" element={<WomenProducts category="women"/>} />
          <Route path="/products/men" element={<MenProducts category="men"/>} />
          <Route path="/update/:productId" element={<UpdateProduct/>} />
          <Route path="/product/:productId" element={<SelectAProduct/>} />
        </Routes>
      </BrowserRouter>
    </MyProductsContext.Provider>

  )
}

export default App
