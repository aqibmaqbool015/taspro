import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountBankComponent from "../screens/accountAdmin/AccountBankComponent";

function AccountBank() {
  return (
    <>
      <NavbarComponent />
      <AccountBankComponent />
      <FooterComponent />
    </>
  );
}

export default AccountBank;
