import React, { useState } from "react";
import "./home.css";
import { Form } from "react-bootstrap";
import Rating from "./Rating";
import {cart} from "../Contextfolder/Context";
import { useContext } from "react";

import Singlecard from "./Singlecard";

const Home = () => {
  const {state:{products},dispatch,state2:{byfastdelivery,
    byoutofstock,
    byrating,
    sort,search},dispatch2}=useContext(cart);

  console.log(byfastdelivery,
    byoutofstock,
    byrating,
    sort);

    const finalfiltering=()=>{
      let transformedproduct=products;

      if(sort=='lowtohigh'||sort=='hightolow'){
        transformedproduct=transformedproduct.sort((a,b)=> (
          sort==='lowtohigh' ? a.price-b.price : b.price-a.price) 




        );
      if(sort==''||undefined) {
        transformedproduct=products;

      } 

      }
      if(!byoutofstock){
        transformedproduct=transformedproduct.filter((q)=>q.instock);
      }
      if(byfastdelivery){
        transformedproduct=transformedproduct.filter((q)=>q.fastDelivery);
      }
      if(byrating){
        transformedproduct=transformedproduct.filter((q)=>q.ratings==byrating);
      }
      if(search){
        transformedproduct=transformedproduct.filter((q)=>q.name.toLowerCase().includes(search));
      }






return transformedproduct;
    }

  // const [rate, setrate] = useState(3);
  

  
  return (
    <>
      <div className="home">
        <div className="left" >
          <div className="heading">Filter Products</div>
          <div className="form">
            <Form>
              <div className="mb-3">
                <Form.Check
                  className="pb-3"
                  type={"radio"}
                  id={`rad`}
                  label={"Ascending"}
                  name="radio"
                  onClick={() => dispatch2({type:'ASCENDING-DESCENDING',payload:"lowtohigh"})}
                  checked={sort==="lowtohigh"? true:false}
                />
                <Form.Check
                  className="pb-3"
                  type={"radio"}
                  id={`rad`}
                  label={"Descending"}
                  name="radio"
                  onClick={() => dispatch2({type:'ASCENDING-DESCENDING',payload:"hightolow"})}
                  checked={sort==="hightolow"? true:false}
                />
                <Form.Check
                  className="pb-3"
                  type={"Checkbox"}
                  id={`check1`}
                  label={"Include out of stock"}
                  onClick={() => dispatch2({type:'INSTOCK'})}
                  checked={byoutofstock}

                />

                <Form.Check
                  className="pb-3"
                  type={"Checkbox"}
                  id={`check2`}
                  label={"Fast delivery only"}
                  onClick={() => dispatch2({type:'BYDELIVERY'})}
                  checked={byfastdelivery}
                />
              </div>
            </Form>
            <span className="ratingmedia">
              <label>Rating:</label>
              <span className="star">
              <Rating
                rating={byrating}
                onClick={(i) => dispatch2({type:'BY_RATING',payload:i})}
                
                style={{ cursor: "pointer" }}
              /></span>
              <button type="button" className="btn btn-light clear-button" onClick={()=>dispatch2({type:'CLEARFILTER'})}>
                Clear filters
              </button>
            </span>
          </div>
        </div>

        <div className="right">
          {finalfiltering().map((single)=>{
            return(
              <Singlecard key={single.id} single={single} />

            )
            
          })}
          
          {/* <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
