import React, { useContext, useEffect ,useState} from 'react'
import { cart } from '../Contextfolder/Context'
import './carting.css'
import Rating from"./Rating"
import {Form} from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
import {Link} from 'react-router-dom'



const Cart = () => {
  const {state:{cartt,count}, dispatch,total,settotal }=useContext(cart);

  // calculating total for every change
  // const [total, settotal] = useState(0);

  useEffect(()=>{
    settotal(cartt.reduce((tot,a) => tot+( (a.price)*Number(a.qty)),0));
    console.log(total)
  },[cartt])
  console.log(total)
  // console.log(state)
  return (
    <div className='maindiv'>
      <div className='leftside'>
        {cartt.map((itam,w)=>(
        <div key={w} className='leftdesp'>
          <img src={itam.image} className="img-desp"/>
          <span className='title-exit'><strong>{itam.name}</strong></span>
          <span className='price-exit'>₹ {itam.price}</span>
          <span className="rating-exit">{[...Array(5)].map((_, i) => (
            <span key={i}>
              {itam.ratings > i ? (
                <AiFillStar fontSize="15px" />
              ) : (
                <AiOutlineStar fontSize="15px" />
              )}
            </span>
          ))}</span>
          
          <span className='form-ctrl'>
          <Form.Control 
          onChange={(e)=> dispatch({type:'QTY_CHANGE',payload:{qty:e.target.value,id:itam.id}})}
                    as="select"
                    value={itam.qty}
                    
                  >
                    {[...Array(itam.instock)].map((_,x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                  </span>
                  <span className='delete-exit'>
                  <AiFillDelete
                        fontSize={"20px"}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: itam,
                          })
                        }
                      />
                      </span>



        </div>
        ))}


      
        
        </div>
      <div className='rightside'>
        <span >Subtotal ({cartt.length}) items</span>
        <h5>Total: ₹ {total}</h5>
        <button type="button"  className="btn btn-primary"><Link to="/payment">Proceed to Checkout</Link></button>
        </div>


    </div>
  )
}

export default Cart