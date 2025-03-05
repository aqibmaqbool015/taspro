import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import BookViewComponent from "../screens/bookingAdmin/BookViewComponent";

function BookPaymentView() {
  return (
    <>
      <NavbarComponent />
      <BookViewComponent />
      <FooterComponent />
    </>
  );
}

export default BookPaymentView;
