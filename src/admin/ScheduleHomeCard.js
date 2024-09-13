import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import ScheduleCardComponent from "../screens/scheduleAdmin/ScheduleCardComponent";

function ScheduleHomeCard() {
  return (
    <>
      <NavbarComponent />
      <ScheduleCardComponent />
      <FooterComponent />
    </>
  );
}

export default ScheduleHomeCard;
