import React, { useContext } from "react";
import "./thanks.css";
import { cart } from "../Contextfolder/Context";


const Thanks = () => {
  const {
    state: { cartt },total,
  } = useContext(cart);

  return (
    <div className="thankmain">
      <div className="thank1">
        Thank you for choosing shopee products. We believe you will be satisfied
        by our services.
      </div>
      <div className="thankmiddle">
        <table style={{ width: "100%" }}>
          <tr>
            <th>Product</th>
            <th style={{ textAlign: "center" }}>ProductName</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
          {cartt.map((prod,i) => {
            return (
              <tr key={i}>
                <td>
                  <img
                    src={prod.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>x{prod.qty}</td>
                <td>{Number(prod.price * prod.qty)}</td>
              </tr>
            );
          })}
        </table>
        <div className="grandtotal">
          <div className="leftend">
            <img
              src={"shoplogo.png"}
              style={{ width: "40px", height: "40px", padding: "4px" }}
            ></img>
            <h5 className="brandnam">Shopee</h5>
          </div>
          <div className="rightend">
            <h5 className="tot">Grand Total</h5>
            <h5 className="totamt">Rs  &nbsp; {total}</h5>
          </div>
        </div>

      </div>
      <div className="end"  >
      eCommerce Websites will not be responsible for any damages your business may suffer to the extent permissable by law. We make no warranties of any kind, express, implied, statutory or otherwise for any Service we provide.


Under no circumstances, shall eCommerce Websites, its officers, agents or anyone else involved in creating, producing
or distributing the service be liable for any direct, indirect, incidental, special or consequential damages that
result from the use or the inability to use the Service; or that results from mistakes, omissions, interruptions,
deletion of files, errors, defects, delays in operation, or transmission or any failure of performance, whether or
not limited to acts of God, communication failure, theft, destruction or unauthorized access to our records,
programs or services. eCommerce Websites disclaims any intention to censor, edit or engage in ongoing review or surveillance of
communications stored on or transmitted through its facilities by customers or others. eCommerce Websites may
however review, delete or block access to communications that could harm eCommerce Websites, its customers or third
parties.<br/><br/>


We reserve the right to revise our policies or terms of service at any time.<br/>


Notification of all amendments will be displayed publicly on our website - it is your responsibility to check our
website and your eCommerce Websites account login periodically to ensure you stay informed of any change - current
as of 1st October 2010
      </div>
    </div>
  );
};

export default Thanks;
