import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import { cart } from "../Contextfolder/Context";
import {AiFillStar,AiOutlineStar} from "react-icons/ai";

import "./singlecard.css";

const Singlecard = ({ single }) => {
  const {
    state: { cartt },
    dispatch,
  } = useContext(cart);
  const [found, setfound] = useState(false);
  // console.log(found);
  // console.log(cartt);
  // console.log(single);
  // console.log(found)

  // for (let i = 0; i < cartu.length; i++) {
  //   if (single.id === cartu[i].id) {
  //     setfound(true);
  //   }
  // }

  return (
    <>
      <div className="card" style={{ border: "0px" }}>
        <img src={single.image} className="card-img-top" alt="..." />
        <div className="card-body c">
          <h5 className="card-title">{single.name}</h5>
          <p>
            <strong>₹ {single.price}</strong>
          </p>
          {single.fastDelivery ? (
            <p className="card-text">Fast Delivery</p>
          ) : (
            <p className="card-text">4 day Delivery</p>
          )}
        </div>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {single.ratings > i ? (
                <AiFillStar fontSize="15px" />
              ) : (
                <AiOutlineStar fontSize="15px" />
              )}
            </span>
          ))}
        </div>

        <div className="add-button">
          {found ? (
            <button
              type="button"
              class="btn btn-danger"
              onClick={() =>
                dispatch(
                  { type: "REMOVE_FROM_CART", payload: single },
                  setfound(!found)
                )
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                dispatch(
                  { type: "ADD_TO_CART", payload: single },
                  setfound(!found)
                )
              }
              disabled={!single.instock}
              class="btn btn-primary "
            >
              {" "}
              {!single.instock ? "Out of Stock" : "Add to Cart"}{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Singlecard;
