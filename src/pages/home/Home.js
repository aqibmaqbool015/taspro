import React from "react";
import NavbarComponent from "../../component/navbar";
import HomeScreen from "../../screens/homeScreen/home";
import FooterComponent from "../../component/footer";

function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeScreen />
      <FooterComponent />
    </>
  );
}

export default Home;
