import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import CartDetailComponent from "../../screens/homeScreen/cartDetail";

function CartDetail() {
  return (
    <>
      <NavbarComponent />
      <CartDetailComponent />
      <FooterComponent />
    </>
  );
}

export default CartDetail;
