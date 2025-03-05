import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import PaymentComponent from "../../screens/homeScreen/paymentOption";

function PaymentOption() {
  return (
    <>
      <NavbarComponent />
      <PaymentComponent />
      <FooterComponent />
    </>
  );
}

export default PaymentOption;
