import { createContext, useEffect, useState } from "react";
import Homepage from "./components/Homepage/Homepage"
import ProductPage from "./components/ProductPage/ProductPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/ManageListings/addProduct";
import Navbar from "./components/Header/Navbar";
import SelectAProduct from "./components/SelectAProduct";
import WomenProducts from "./components/ProductPage/WomenProducts";
import "../src/components/Header/header.css"
import MenProducts from "./components/ProductPage/MenProducts";
import Accessories from "./components/ProductPage/Accessories";
import Background from "./components/Background/Background";
import Hero from "./components/Homepage/Hero";




export const MyProductsContext = createContext();


function App() {

  let heroData = [
      {text1:"Have a ton of", text2:"clothes you don't wear?"},
      {text1:"Want to get rid of them", text2:"and make some good money?"},
      {text1:"eSlay is the", text2:"solution you're looking for!"}

  ]

  const [heroCount, setHeroCount] = useState(0);

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
        
        <Background heroCount={heroCount}/>
        <Navbar />
        <Hero 
              heroData={heroData}
              heroCount={heroCount} 
              setHeroCount={setHeroCount}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/women" element={<WomenProducts category="women"/>} />
          <Route path="/products/men" element={<MenProducts category="men"/>} />
          <Route path="/products/accessories" element={<Accessories category="accessories"/>} />
          <Route path="/product/:productId" element={<SelectAProduct/>} />

        </Routes>
      </BrowserRouter>
    </MyProductsContext.Provider>

  )
}

export default App
