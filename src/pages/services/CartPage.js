import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import CartComponent from "../../screens/serviceScreen/cartPage/CartPage";

function ServiceCartPage() {
  return (
    <>
      <NavbarComponent />
      <CartComponent />
      <FooterComponent />
    </>
  );
}

export default ServiceCartPage;
