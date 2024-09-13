import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import BlogDetailComponent from "../../screens/footerPages/BlogDetailComponent";


function BlogDetail() {
  return (
    <>
      <NavbarComponent />
      <BlogDetailComponent />
      <FooterComponent />
    </>
  );
}

export default BlogDetail;
