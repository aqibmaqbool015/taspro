import React from "react";
import NavbarComponent from "../../component/navbar";
import HomeScreen from "../../screens/homeScreen/home";
import FooterComponent from "../../component/footer";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation()
  const { userData } = location?.state || {}
  console.log('data', userData);
  return (
    <>
      <NavbarComponent data={userData} />
      <HomeScreen />
      <FooterComponent />
    </>
  );
}

export default Home;
