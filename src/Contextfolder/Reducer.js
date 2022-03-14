import { useContext } from "react";
import React from "react";

export const cartreducer = (state, action) => {
  console.log(state.products);

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartt: [...state.cartt, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartt: state.cartt.filter((f) => f.id !== action.payload.id),
      };

     case "QTY_CHANGE":
      return {
        ...state,
        cartt: state.cartt.filter((e) =>
          e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
         ),
       };

      case 'RATING_FILTER':
        return{
          ...state,products:state.products.filter((fil)=>fil.ratings===action.payload.rate)


        }

    // case "increment":
    //   return { ...state, count: state.count + 1 };
    case "data":
      return { ...state, products: action.payload };

    default:
      return { ...state };
  } 
};

export const filterreducer=(state,action)=>{
  console.log(state)
  switch(action.type){
    case 'ASCENDING-DESCENDING':
      return{ ...state,sort:action.payload}


    case 'INSTOCK':
      return{ ...state,byoutofstock:!state.byoutofstock};

      case 'BYDELIVERY':
        return{ ...state,byfastdelivery:!state.byfastdelivery};  

      case 'CLEARFILTER':
        return{ 
          byfastdelivery:false,
          byoutofstock:false,
          byrating:0,
          search:"",
          sort:"",
          
        }  ;

     




    case 'BY_RATING':
      return{ ...state,byrating:action.payload};

      case 'SEARCH' :
        return{ ...state,search:action.payload};


        default:
          return state;
  
    }
  
    

  }
  





  

