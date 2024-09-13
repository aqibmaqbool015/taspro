import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import BookDetailPaymentComponent from "../screens/bookingAdmin/BookDetailPaymentComponent";

function BookPaymentDetail() {
  return (
    <>
      <NavbarComponent />
      <BookDetailPaymentComponent />
      <FooterComponent />
    </>
  );
}

export default BookPaymentDetail;
