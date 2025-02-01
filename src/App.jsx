import { useEffect } from "react";
import Homepage from "./components/Homepage/Homepage"
import ProductPage from "./components/ProductPage/ProductPage"

function App() {
 const {products, setProducts} = useState("");

useEffect(() => {
  const getProducts = async (productId) => {
    try {
      
      const response = await fetch ("/products/get");
      const data = await response.json();
      setProducts(data)
        } catch (error) {
          console.error({err: error.message})

        }
        getProducts();
        }


}, []);



  return (
    <>
     <HomePage />
     <ProductPage />
    </>
  )
}

export default App
