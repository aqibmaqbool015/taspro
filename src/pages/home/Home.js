import React from "react";
import NavbarComponent from "../../component/navbar";
import HomeScreen from "../../screens/homeScreen/home";
import FooterComponent from "../../component/footer";
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation()
  const { data } = location?.state || {}
  console.log('data', data);
  return (
    <>
      <NavbarComponent data={data} />
      <HomeScreen />
      <FooterComponent />
    </>
  );
}

export default Home;
