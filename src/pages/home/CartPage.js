import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import CartComponent from "../../screens/homeScreen/cartPage/CartPage";

function CartPage() {
  return (
    <>
      <NavbarComponent />
      <CartComponent />
      <FooterComponent />
    </>
  );
}

export default CartPage;
