import React from "react";
import NavbarComponent from "../../component/navbar/index.js";
import FooterComponent from "../../component/footer/index.js";
import OrderConfirmComponent from "../../screens/serviceScreen/orderConfirmComponent.js/index.js";

function ServiceOrderConfirmation() {
  return (
    <>
      <NavbarComponent />
      <OrderConfirmComponent />
      <FooterComponent />
    </>
  );
}

export default ServiceOrderConfirmation;
