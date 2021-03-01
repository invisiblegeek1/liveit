import React, { useState, useRef, useEffect } from "react";
import Alert from '@material-ui/lab/Alert';


const PaypalButton = (props) => {
  
  const [paidFor, setpaidFor] = useState(false);
  const [error, seterror] = useState(null);
  const paypalref = useRef();
  
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_unita: [
              {
                description: "LiveCart Store Checkout",
                amout: {
                  currency: "INR",
                  value: '10.0',
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setpaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          seterror(err)
          console.error(err);
        },
      })
      .render(paypalref.current);
    
  }, []);
  if (paidFor) {
    return <div>Thanks for purchasing</div>;
  }
  if (error) {
    return <Alert severity="error" 
    >Error in processing Try Again and refersh </Alert>
    
  }
  return <div ref={paypalref} />;
};

export default PaypalButton;
