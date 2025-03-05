import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AmcDetailComponent from "../screens/bookingAdmin/AmcDetailComponent";

function BookingAmcDetail() {
  return (
    <>
      <NavbarComponent />
      <AmcDetailComponent />
      <FooterComponent />
    </>
  );
}

export default BookingAmcDetail;
