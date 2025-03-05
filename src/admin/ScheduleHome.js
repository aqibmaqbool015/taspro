import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import ScheduleComponent from "../screens/scheduleAdmin/ScheduleHome";

function MySchedule() {
  return (
    <>
      <NavbarComponent />
      <ScheduleComponent />
      <FooterComponent />
    </>
  );
}

export default MySchedule;
