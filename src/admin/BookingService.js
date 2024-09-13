import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import BookingComponent from "../screens/bookingAdmin/MyBookingComponent";

function BookingService() {
  return (
    <>
      <NavbarComponent />
      <BookingComponent />
      <FooterComponent />
    </>
  );
}

export default BookingService;
