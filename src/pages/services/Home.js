import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import HomeScreen from "../../screens/serviceScreen/home";

function ServiceHome() {
  return (
    <>
      <NavbarComponent />
      <HomeScreen />
      <FooterComponent />
    </>
  );
}

export default ServiceHome;
