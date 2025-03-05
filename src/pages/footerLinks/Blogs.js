import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import BlogsComponent from "../../screens/footerPages/BlogsComponent";


function Blogs() {
  return (
    <>
      <NavbarComponent />
      <BlogsComponent />
      <FooterComponent />
    </>
  );
}

export default Blogs;
