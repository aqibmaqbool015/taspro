import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountWalletComponent from "../screens/accountAdmin/AccountWalletComponent";

function AccountWallet() {
  return (
    <>
      <NavbarComponent />
      <AccountWalletComponent />
      <FooterComponent />
    </>
  );
}

export default AccountWallet;
