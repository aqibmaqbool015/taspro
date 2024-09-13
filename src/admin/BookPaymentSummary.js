import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import BookSummaryComponent from "../screens/bookingAdmin/BookSummaryComponent";

function BookPaymentSummary() {
  return (
    <>
      <NavbarComponent />
      <BookSummaryComponent />
      <FooterComponent />
    </>
  );
}

export default BookPaymentSummary;
