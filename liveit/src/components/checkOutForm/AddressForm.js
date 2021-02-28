import React,{useState} from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import {Button} from '@material-ui/core';
import {useSelector} from 'react-redux';

import PayButton from './PaymentForm'

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
    maxWidth: "700px",
    minWidth: "300px",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

 const AddressForm=(props)=> {
  const classes = useStyles();
  const products=useSelector(state=>state.products)
  const [ischeckout,checkoutStatechange]=useState(true)
  const CheckOutHandler=(e)=>{
    if(ischeckout){
      
      
ReactDOM.render(
  
    
    <PayButton items={products}/>
    
  ,
  document.getElementById("paybutton")
);
   
  }
  

  }

  return (
    <form className={classes.root} noValidate>
      <h3>Shipping Details</h3>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="First name"
          id="mui-theme-provider-standard-input"
          required
        />
        <TextField
          className={classes.margin}
          label="Last name"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="Mobile no"
          id="mui-theme-provider-standard-input"
          inputProps={{ type: "number" }}
        />

        <TextField
          className={classes.margin}
          label="Country"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="State"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="City"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="Address Line1"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="Pincode"
          id="mui-theme-provider-standard-input"
          inputProps={{ type: "number" }}
        />
        <div id='paybutton' ></div>
        <Button  variant='contained' color='primary' onClick={(e)=>{
          if(products.length){
            checkoutStatechange(true);
            CheckOutHandler(e);


          }
        }} >PAY</Button>
      </ThemeProvider>
    </form>
  );
}

  

export default AddressForm;
