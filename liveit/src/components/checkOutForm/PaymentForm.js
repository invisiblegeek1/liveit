import React, { useState, useRef, useEffect } from "react";

const PaypalButton = (props) => {
  const { items, total } = props;
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
                  currency_code: "INR",
                  value: 10,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setpaidFor(true);
        },
        onError: (err) => {
          seterror(err);
          console.error(err);
        },
      })
      .render(paypalref.current);
    console.log("payment button ready");
  }, [items]);
  if (paidFor) {
    return <div>Thanks for purchasing</div>;
  }
  if (error) {
    return <div>Error in processing .Try Again</div>;
  }
  return <div ref={paypalref} />;
};

export default PaypalButton;
