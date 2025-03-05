import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import CartDetailComponent from "../../screens/serviceScreen/cartDetail";

function ServiceCartDetail() {
  return (
    <>
      <NavbarComponent />
      <CartDetailComponent />
      <FooterComponent />
    </>
  );
}

export default ServiceCartDetail;
