import React from "react";
import "./card.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div className="Card__Outer__Container">
      <div className="Card__Container">
        <img className="Product__Image" src={props.content.image} alt=""></img>
        <p className="Product__Title">{props.content.title}</p>
        <p className="Price__Symbol">
          <span>&#8377; </span>
          {Math.round(props.content.price)}
        </p>
        <div className="Action__Container">
          <Link to='/cart'>
          <Button variant="contained" color="primary" onClick={() => {
              props.inval(
                props.content.id,
                props.content.image,
                props.content.title,
                Math.round(props.content.price)
              );
              
            }}>
            Buy
          </Button>
          </Link>
          <p
            className="Add__To__Cart__Btn"
            onClick={() => {
              props.inval(
                props.content.id,
                props.content.image,
                props.content.title,
                Math.round(props.content.price)
              );
            }}
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

const addCart = (dispatch) => {
  return {
    inval: (prtid, img, title, price) => {
      dispatch({
        type: "INCREMENT",
        payload: {
          id: prtid,
          imgurl: img,
          heading: title,
          rate: price,
          Quantity: 1,
        },
      });
    },
  };
};
export default connect(null, addCart)(Card);
