import React, {useState, useContext } from "react";
import {
  Navbar,
  Container,
  FormControl,
  
  Badge,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { cart } from "../Contextfolder/Context";
import { AiFillDelete } from "react-icons/ai";
import "./header.css";
import Dropdown from 'react-bootstrap/Dropdown'




const Header = () => {
  // const [searching,setsearching]=useState("");

  




  const {
    state: { cartt, }, dispatch,dispatch2
  } = useContext(cart);
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container >
          <Navbar.Brand className="mediaquery">
            <Link to="/">
              <img
                alt=""
                src="shoplogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Shopee
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
            onChange={(e) => dispatch2({type:'SEARCH',payload: e.target.value})}
              style={{ width: 500 }}
              placeholder="search for products"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>


            {/* <Dropdown >
              <Dropdown.Toggle variant="success" >
                <HiShoppingCart style={{ fontSize: "25px", color: "white" }} />
                <Badge>{cartt.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu alignRight style={{ minWidth: 370,}}>
                {cartt.length > 0 ? (
                  cartt.map((x, i) => (
                    <div key={i} className="despmain">
                      <img
                        className="despimage"
                        src={x.image}
                        alt={`product-${i}-img`}
                      />
                      <p className="title">
                        <strong>{x.name}</strong>
                      </p>
                      <p>
                        <strong>₹ {x.price}</strong>
                      </p>
                      <AiFillDelete
                        fontSize={"20px"}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: x,
                          })
                        }
                      />
                    </div>
                  )
                  
                  )
                  
                ) : (
                  <span style={{ padding: "10px", width: "300px" }}>
                    Empty cart
                  </span>
                )}



                <Link to="/cart">
                <button type="button" style={{width:"100%"}} className="btn btn-primary">Go to Cart</button>
                </Link>
              </Dropdown.Menu>
            </Dropdown> */}


<div class="btn-group dropleft">
  <button type="button" class="btn  btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <HiShoppingCart style={{ fontSize: "25px", color: "white" }} />
                <Badge>{cartt.length}</Badge>
  </button>
  <div class="dropdown-menu dropmen" style={window.innerWidth < 500 ?  {minWidth: 250} :{ minWidth: 370,}} >
  {cartt.length > 0 ? (
                  cartt.map((x, i) => (
                    <div key={i} className="despmain">
                      <img
                        className="despimage"
                        src={x.image}
                        alt={`product-${i}-img`}
                      />
                      <p className="title">
                        <strong>{x.name}</strong>
                      </p>
                      <p className="priceicon">
                        <strong>₹ {x.price}</strong>
                      </p>
                      <span className="deleteicon">
                      <AiFillDelete
                        fontSize={"20px"}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: x,
                          })
                        }
                      />
                      </span>
                    </div>
                  )
                  
                  )
                  
                ) : (
                  <span style={{ padding: "10px", width: "300px" }}>
                    Cart is empty
                  </span>
                )}



                <Link to="/cart">
                <button type="button" style={{width:"100%"}} className="btn btn-primary">Go to Cart</button>
                </Link>
    
  </div>
</div>







          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
