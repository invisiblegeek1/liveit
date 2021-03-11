import React from "react";
import { connect } from "react-redux";
import "./Cart.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";

function Cart(props) {
  return (
    <div className="Cart__Container">
      <h1>YOUR CART</h1>
      {props.product ? (
        props.product.map((it, index) => {

          
            
            return (
              <div key={index} className="Cart__Card__Container">
                <hr></hr>
                <div className="Cart__Card">
                  <img
                    src={it.imgurl}
                    alt=""
                    className="Cart__Product__Image"
                  ></img>
                  <div className="Cart__Product__Details">
                    <p className="Cart__Product__Title">{it.heading}</p>
                    <p className="Cart__Product__Quantity">
                      {"Quantity- " + it.Quantity}
                    </p>
                    <div className="Cart__Btn__Container">
                      <Button
                        variant="contained"
                        color="primary"
                        id="Cart__Qty__Iec__Btn"
                        onClick={() => {
                          props.inQty(it.id, it.rate);
                        }}
                      >
                        <AddIcon />
                      </Button>
                      {it.Quantity > 1 ? (
                        <Button
                          variant="contained"
                          color="primary"
                          id="Cart__Qty__Dec__Btn"
                          onClick={() => {
                            props.decQty(it.id, it.rate);
                          }}
                        >
                          <RemoveIcon />
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          id="Cart__Qty__Dec__Btn"
                          disabled={true}
                          onClick={() => {
                            props.decQty(it.id, it.rate);
                          }}
                        >
                          <RemoveIcon />
                        </Button>
                      )}
                    </div>

                    <p
                      className="Cart__Product__Total"
                      onChangeCapture={() => {
                        props.updateTotal(it.Quantity * it.rate);
                      }}
                    >{`Total price =${it.Quantity * it.rate}`}</p>
                    <Button
                      variant="outlined"
                      id="Remove__btn"
                      color="secondary"
                      onClick={() => {
                        props.delItem(it.id, it.Quantity, it.rate);
                      }}
                    >
                      Remove Item
                    </Button>
                  </div>
                </div>
              </div>
            );
          
        })
      ) : (
        <h1>nothing in cart</h1>
      )}
      <hr className="Cart__green__line"></hr>
      <div
        style={{
          display: "flex",
          flexBasis: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            CHECK OUT
          </Button>
        </Link>
        <div className="Cart__Total__Amount">
          Total Amount= <span>&#8377; </span> {props.state.total}
        </div>
      </div>

      <hr className="Cart__green__line"></hr>
    </div>
  );
}
const mapProductsToprops = (state) => {
  return {
    product: state.products,
    state: state,
  };
};

const mapCartToDispatch = (dispatch) => {
  return {
    inQty: (itmId, total) => {
      dispatch({ type: "INCREMENT_QTY", id: itmId, subtotal: total });
    },
    decQty: (itmId, total) => {
      dispatch({ type: "DECREMENT_QTY", id: itmId, subtotal: total });
    },
    delItem: (itmId, Qty, price) => {
      dispatch({ type: "DECREMENT", id: itmId, Quantity: Qty, rate: price });
    },
  };
};
export default connect(mapProductsToprops, mapCartToDispatch)(Cart);
