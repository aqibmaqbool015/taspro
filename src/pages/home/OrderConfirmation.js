import React from "react";
import NavbarComponent from "../../component/navbar/index.js";
import FooterComponent from "../../component/footer/index.js";
import OrderConfirmComponent from "../../screens/homeScreen/orderConfirmComponent.js/index.js";

function OrderConfirmation() {
  return (
    <>
      <NavbarComponent />
      <OrderConfirmComponent />
      <FooterComponent />
    </>
  );
}

export default OrderConfirmation;
