import React from "react";
import { connect } from "react-redux";
import './Cart.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



function Cart(props) {
  return (
    <div className="Cart__Container">{props.product?props.product.map((it,index)=>{return (
        <div key={index} className="Cart__Card">
        <img src={it.imgurl} alt='' className="Cart__Product__Image"></img>
        <div>
        <p className="Cart__Product__Title">{it.heading}</p>
        <p className="Cart__Product__Price"><span>&#8377; </span>{it.rate}</p>
        <p className="Cart__Product__Quantity">{"Quantity- "+it.Quantity}</p>
        <Button variant="contained" color="primary" onClick={()=>{props.inQty(it.id)}}><AddIcon /></Button>
        <Button variant="contained" color="primary" onClick={()=>{props.decQty(it.id)}}><RemoveIcon /></Button>
        <p className="Cart__Product__Total">{`Total price =${it.Quantity*it.rate}`}</p>
        </div>
      </div>

    )}):<h1>nothing in cart</h1>}
      
 </div>
  );
}
const mapProductsToprops = (state) => {
  return {
    product: state.products,
  };
};

const mapCartToDispatch = (dispatch)=>{
  return {
    inQty:(itmId)=>{dispatch({type:"INCREMENT_QTY",id:itmId})},
    decQty:(itmId)=>{dispatch({type:"DECREMENT_QTY",id:itmId})}

  }
}
export default connect(mapProductsToprops,mapCartToDispatch)(Cart);
