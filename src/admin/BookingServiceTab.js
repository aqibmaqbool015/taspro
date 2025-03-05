import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import BookingServicesComponent from "../screens/bookingAdmin/BookingServicesComponent";

function BookingServiceTab() {
  return (
    <>
      <NavbarComponent />
      <BookingServicesComponent />
      <FooterComponent />
    </>
  );
}

export default BookingServiceTab;
