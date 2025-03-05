import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import PaymentComponent from "../../screens/serviceScreen/paymentOption";

function ServicePaymentOption() {
  return (
    <>
      <NavbarComponent />
      <PaymentComponent />
      <FooterComponent />
    </>
  );
}

export default ServicePaymentOption;
