import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import ServiceCartCoupons from "../../screens/serviceScreen/serviceCart/ServiceCart";

function ServiceCartServices() {
  return (
    <>
      <NavbarComponent />
      <ServiceCartCoupons />
      <FooterComponent />
    </>
  );
}

export default ServiceCartServices;
