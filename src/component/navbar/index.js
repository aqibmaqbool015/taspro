import Button from "react-bootstrap/Button";
import { Container, Form, Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Screens } from "../../constant/routes";
import Images from "../../constant/images";
import InputGroupComponent from "../../commonComponents/InputGroup";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { otpCode } from "../../constant/dummyData";
import axios from "axios";

function NavbarComponent({data}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const loc = useLocation()
  const { dataa } = loc.state || {}
  const [allData, setAllData] = useState(dataa || data)
  const handleCloseOtp = () => setShowOtp(false);
  const handleShowOtp = () => setShowOtp(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const otpInputs = useRef([]);
  const [seconds, setSeconds] = useState(60);
  const [selectedDate, setSelectedDate] = useState(null);
console.log('data', allData);

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


  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const handleInputChange = (index, value) => {
    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [value, setValue] = useState("");

  const handleInputChanges = (e) => {
    let inputValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValue(inputValue);
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
            onClick={() => navigate(Screens.Home, { state: { dataa: data } })}
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
            {allData?.user?.phoneNumber || allData?.updatedUser?.phoneNumber}
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
                src={allData?.user?.avatar || allData?.updatedUser?.avatar}
                className="img-fluid-label-content"
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
