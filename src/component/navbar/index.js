import Button from "react-bootstrap/Button";
import { Container, Form, Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { Screens } from "../../constant/routes";
import Images from "../../constant/images";
import InputGroupComponent from "../../commonComponents/InputGroup";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useUser } from "../../contextApi/UserContext";

function NavbarComponent({ userData }) {
  const navigate = useNavigate();
  const { user, loading } = useUser();

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found, redirecting to home...");
      navigate(Screens.authLogin);
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/v1/auth/logout`,
        {
          deviceId: process.env.REACT_APP_deviceId, // Ensure correct deviceId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in headers
          },
        }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.clear();
      setToken("");

      navigate(Screens.authLogin);
    } catch (error) {
      console.error("Logout failed:", error);

      // If already logged out or token invalid, clear session & redirect
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.clear();
        setToken("");
        navigate(Screens.Home);
      } else {
        alert("Logout failed. Please try again.");
      }
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  return (
    <Navbar expand="lg" className="bg-navbar-container">
      <Container className="navbar-container">
        <Navbar.Brand>
          <span
            className="user-navbar-logo"
            onClick={() => navigate(Screens.Home)}
          >
            <img src={Images.Logo} alt="Logo" />
          </span>
        </Navbar.Brand>
        <div className="navbar-search-content">
          <InputGroupComponent />
        </div>
        <div
          className="user-form-contact-list
        user-form-contact-list-hide-phone"
        >
          <span className="contact-phone-list">
            <img src={Images.Contact} className="img-fluid" alt="Contact" />
          </span>
          <p
            className="contact-phone-text
          contact-phone-text-view-hide"
          >
            {user?.phoneNumber || userData?.user?.phoneNumber}
          </p>
        </div>
        <div
          className="position-relative
        contact-phone-list-hide-context"
        >
          <span
            className="contact-phone-list
          contact-phone-list-hide-desktop"
          >
            <img src={Images.Contact} className="img-fluid" alt="Contact" />
          </span>

          <div>
            <Button
              className="form-control-input-content form-control-input-user text-black btn btn-link"
              onClick={token ? handleLogout : () => navigate(Screens.authLogin)}
              style={{
                background: "none",
                border: "none",
                color: "black",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              {token ? "Logout" : "Login"}
            </Button>

            <span className="user-location-label-account">
              <img
                src={user?.avatar || userData?.user?.avatar}
                className="img-fluid-label-content rounded-circle"
                alt="User"
              />
            </span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
