import React from "react";
import NavbarComponent from "../component/navbar";
import FooterComponent from "../component/footer";
import ChatAdminComponent from "../screens/bookingAdmin/ChatComponent";

function ChatAdmin() {
  return (
    <>
      <NavbarComponent />
      <ChatAdminComponent />
      <FooterComponent />
    </>
  );
}

export default ChatAdmin;
