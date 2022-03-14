import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import{useEffect,useState,useContext} from 'react'
import { cart } from './Contextfolder/Context'
import { v4 as uuidv4 } from "uuid";
import Thanks from "./components/Thanks";

function App() {
  const {state, dispatch }=useContext(cart);
  

  const api = async () => {
    const response = await fetch("https://demo7303877.mockable.io/");
    const data = await response.json();

    // setarr([...data.products]);

    var rating = [1, 2, 3, 4, 5]; //for rating
    var boolean = [true, false]; // boolean
    var instock = [0,1, 3, 5, 6, 8]; // no of items
  
    //api mapping to object
  
    const productslist = data.products.map((val) => ({
      id: uuidv4(),
      name: val.productName,
      price: val.price,
      image: val.searchImage,
      instock: instock[Math.floor(Math.random() * instock.length)],
      fastDelivery: boolean[Math.floor(Math.random() * boolean.length)],
      ratings: rating[Math.floor(Math.random() * rating.length)],
    }));
    dispatch({type:'data',payload:productslist});

    
  };
  useEffect(() => {
    api();
  }, []);

 
  

  
  return (
    <>
    
    <Header />
        

        <div>

          <Routes>
          
          <Route path="/" exact element={<Home />} />
            

            <Route path="/cart" exact element={<Cart />} />
            <Route path="/payment" exact element={<Thanks />} />
            
          </Routes>
        </div>
      
    </>
  );
}

export default App;
