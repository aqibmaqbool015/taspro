import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import ServiceCartCoupons from "../../screens/homeScreen/serviceCart/ServiceCart";

function ServiceCart() {
  return (
    <>
      <NavbarComponent />
      <ServiceCartCoupons />
      <FooterComponent />
    </>
  );
}

export default ServiceCart;
