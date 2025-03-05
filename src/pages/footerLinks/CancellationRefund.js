import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import CancellationRefundComponent from "../../screens/footerPages/CancellationRefundComponent";


function CancellationRefund() {
  return (
    <>
      <NavbarComponent />
      <CancellationRefundComponent />
      <FooterComponent />
    </>
  );
}

export default CancellationRefund;
