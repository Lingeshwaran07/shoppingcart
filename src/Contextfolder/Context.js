import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import { cartreducer , filterreducer } from "./Reducer";

export const cart = React.createContext();


const ContextProvider = ({ children }) => {
    

  const [total, settotal] = useState(0);
  // const [arr, setarr] = useState([]);
  


  //api fetch

  // const api = async () => {
  //   const response = await fetch("https://demo7303877.mockable.io/");
  //   const data = await response.json();
    

  //   setarr([...data.products]);
  // };
  // useEffect(() => {
  //   api();
  // }, []);

  // var rating = [1, 2, 3, 4, 5]; //for rating
  // var boolean = [true, false]; // boolean
  // var instock = [0, 3, 5, 6, 8]; // no of items

  // //api mapping to object

  // const productslist = arr.map((val) => ({
  //   id: uuidv4(),
  //   name: val.productName,
  //   price: val.price,
  //   image: val.searchImage,
  //   instock: instock[Math.floor(Math.random() * instock.length)],
  //   fastDelivery: boolean[Math.floor(Math.random() * boolean.length)],
  //   ratings: rating[Math.floor(Math.random() * rating.length)],
  // }));
  

  

  
  
  // creating initial state for usereducer
  

  const initialState= {
    products:[],
    cartt:[],
    count:0,
  };


  const initialfilter={
    byfastdelivery:false,
    byoutofstock:false,
    byrating:0,
    search:"",sort:"",
    

    

  };

  console.log(initialState);

  
  const [state, dispatch] = useReducer(cartreducer,initialState);

  const[state2,dispatch2]=useReducer(filterreducer,initialfilter);

  

  return (
    <>
    {/* {state.count} */}
    
      <cart.Provider value={{ state,dispatch ,state2,dispatch2,total,settotal} }>{children}</cart.Provider>
      
      
    </>
  );
};

export default ContextProvider;
