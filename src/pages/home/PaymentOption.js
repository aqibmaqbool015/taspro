import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import PaymentComponent from "../../screens/homeScreen/paymentOption";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51RLilMH62PQaH5UP9wK3O4DRAAONk5t0SwgFAaFUWfMaSHiw5a7FEDnmIqNOVVg2umNk1WHepYJvj1QCSaxsqboO00oMuAEz68');
function PaymentOption() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <NavbarComponent />
        <PaymentComponent />
        <FooterComponent />
      </Elements>
    </>
  );
}

export default PaymentOption;
