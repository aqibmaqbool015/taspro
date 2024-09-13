import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountEditComponent from "../screens/accountAdmin/AccountEditComponent";

function AccountEdit() {
  return (
    <>
      <NavbarComponent />
      <AccountEditComponent />
      <FooterComponent />
    </>
  );
}

export default AccountEdit;
