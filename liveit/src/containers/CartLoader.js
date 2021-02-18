import React from 'react';
import Cart from '../components/Cart';
import {useSelector} from 'react-redux';
import Button from "@material-ui/core/Button";


function CartLoader() {
    const State = useSelector(state=>state.products);
    return (
        <div>
          {State.length<1?<div><h1>YOUR CART IS EMPTY</h1><br></br><Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/';
                        }}
                    
                  >To Shop</Button></div>:<Cart />}  
        </div>
    )
}

export default CartLoader
