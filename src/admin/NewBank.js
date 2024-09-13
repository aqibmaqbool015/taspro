import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import AddNewBankComponent from "../screens/accountAdmin/AddNewBankComponent";

function NewBank() {
  return (
    <>
      <NavbarComponent />
      <AddNewBankComponent />
      <FooterComponent />
    </>
  );
}

export default NewBank;
