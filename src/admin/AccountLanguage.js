import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AccountLanguageComponent from "../screens/accountAdmin/AccountLanguageComponent";

function AccountLanguage() {
  return (
    <>
      <NavbarComponent />
      <AccountLanguageComponent />
      <FooterComponent />
    </>
  );
}

export default AccountLanguage;
