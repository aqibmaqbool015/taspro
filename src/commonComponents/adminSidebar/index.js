import React, { useState, useEffect } from "react";
import Images from "../../constant/images";
import { adminLinkNav } from "../../constant/dummyData";
import { useNavigate, useLocation } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(""); // State to keep track of active link

  useEffect(() => {
    // Retrieve active link from sessionStorage
    const storedActiveLink = sessionStorage.getItem("activeLink");
    setActiveLink(storedActiveLink || location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (redirect) => {
    navigate(redirect);
    setActiveLink(redirect); // Set active link on click
    sessionStorage.setItem("activeLink", redirect); // Store active link in sessionStorage
  };
  

  return (
    <>
      <section className="admin-sidebar-redirect admin-sidebar-redirect-menubar">
        <ul className="my-5">
          {adminLinkNav.map((item, index) => (
            <li
              key={index}
              className="admin-sidebar-link-title"
              onClick={() => handleLinkClick(item.redirect)}
            >
              <span className="user-home-content-label-side">
                <img
                  src={item.image}
                  className="img-fluid"
                  alt={item.link}
                  style={{
                    filter:
                      activeLink === item.redirect
                        ? "invert(50%) sepia(100%) saturate(10000%) hue-rotate(15deg) brightness(100%) contrast(100%)"
                        : "none",
                  }}
                />
              </span>
              <h6
                className={`user-fome-content-link ${
                  activeLink === item.redirect ? "active-link" : ""
                }`}
              >
                {item.link}
              </h6>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default AdminSidebar;
