import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import ScheduleDetailComponent from "../screens/scheduleAdmin/ScheduleDetail";

function ScheduleDetail() {
  return (
    <>
      <NavbarComponent />
      <ScheduleDetailComponent />
      <FooterComponent />
    </>
  );
}

export default ScheduleDetail;
