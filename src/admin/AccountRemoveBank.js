import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountBankRemoveComponent from "../screens/accountAdmin/AccountBankRemoveComponent";

function AccountRemoveBank() {
  return (
    <>
      <NavbarComponent />
      <AccountBankRemoveComponent />
      <FooterComponent />
    </>
  );
}

export default AccountRemoveBank;
