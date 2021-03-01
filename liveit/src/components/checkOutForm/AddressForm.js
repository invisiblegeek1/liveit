import React from "react";
import './AddressForm.css'
import PayButton from "./PaymentForm";

const AddressForm = (props) => {
  return (
    <div className="Payment__Button__Container">
      <h3>Payment portal</h3>
      <p>complete your payment process by methods below</p>
      <div id="paybutton">
        <PayButton  />
      </div>
    </div>
  );
};

export default AddressForm;
