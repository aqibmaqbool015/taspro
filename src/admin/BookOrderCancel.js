import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import BookOrderCancelComponent from "../screens/bookingAdmin/BookOrderCancelComponent";

function BookOrderCancel() {
  return (
    <>
      <NavbarComponent />
      <BookOrderCancelComponent />
      <FooterComponent />
    </>
  );
}

export default BookOrderCancel;
