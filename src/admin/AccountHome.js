import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountHomeComponent from "../screens/accountAdmin/AccountHomeComponent";

function AccountHome() {
  return (
    <>
      <NavbarComponent />
      <AccountHomeComponent />
      <FooterComponent />
    </>
  );
}

export default AccountHome;
