import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountCouponsComponent from "../screens/accountAdmin/AccountCouponsComponent";

function AccountCoupans() {
  return (
    <>
      <NavbarComponent />
      <AccountCouponsComponent />
      <FooterComponent />
    </>
  );
}

export default AccountCoupans;
