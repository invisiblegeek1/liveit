import React from 'react';
import "./card.css";
import Button from '@material-ui/core/Button';



function Card(props) {
    return (
        <div className="Card__Outer__Container">
            <div className="Card__Container" >
                <img className="Product__Image" src={props.content.image} alt=""></img>
                <p className="Product__Title">{props.content.title}</p>
                <p className="Price__Symbol"><span>&#8377; </span>{props.content.price}</p>
                <div className="Action__Container">
                <Button variant="contained" color="primary">
                 Buy
                </Button>
                    <p className="Learn__More__Btn">Add to cart</p>
                </div> 
            </div>
        </div>
    )
}

export default Card
