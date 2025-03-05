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
import PhoneInput from "react-phone-input-2";
import { otpCode } from "../../constant/dummyData";

function NavbarComponent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleCloseOtp = () => setShowOtp(false);
  const handleShowOtp = () => setShowOtp(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const otpInputs = useRef([]);
  const [seconds, setSeconds] = useState(60);
  const [selectedDate, setSelectedDate] = useState(null);

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
            7447-0000-45
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
            <Form.Select
              aria-label="Default select example"
              className="form-control-input-content form-control-input-user"
              onClick={handleShow}
            >
              <option value="1">Login</option>
            </Form.Select>
            <span className="user-location-label-account">
              <img
                src={Images.HeadUser}
                className="img-fluid-label-content"
                alt="User"
              />
            </span>
          </div>
        </div>
      </Container>
      <div className="modal-content-main-container">
        <Modal
          className="modal-content-order-service"
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="my-4">
                <h4 className="services-modal-title-main color-theme-dark-font">
                  Login / Signup
                </h4>
                <div className="mt-4">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
                <Form className="mt-4 mb-5">
                  <div className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        className="user-form-check-control"
                        type="checkbox"
                      >
                        <Form.Check.Input
                          style={{ marginTop: "4px" }}
                          type="checkbox"
                        />
                        <Form.Check.Label>
                          <div className="mx-3">
                            <p className="user-provider-label-description">
                              Get order updated on
                              <span className="terms-privacy-alert">
                                {" "}
                                WhatsApp
                              </span>{" "}
                            </p>
                          </div>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </div>

                  <div className="text-center mt-4">
                    <Button
                      className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                      onClick={handleShowOtp}
                    >
                      Proceed
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="modal-content-main-container">
          <Modal
            className="modal-content-order-service"
            show={showOtp}
            onHide={handleCloseOtp}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div className="modal-services-body px-4">
                <div className="text-center mt-2">
                  <h4 className="services-modal-title-main color-theme-dark-font">
                    OTP Verification!
                  </h4>
                  <p className="services-modal-description mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <Form className="mt-3 mb-3">
                  <ul className="px-0 text-center mb-0">
                    {otpCode.map((item, index) => {
                      return (
                        <li className="user-form-otp-code" key={index}>
                          <Form.Group
                            className="mb-2"
                            controlId={`formBasicEmail${index}`}
                          >
                            <Form.Control
                              ref={(ref) => (otpInputs.current[index] = ref)}
                              type="number"
                              placeholder={item.place}
                              className="form-control-text-input form-control-text-input-outline form-control-text-input-otp-content"
                              onChange={(e) =>
                                handleInputChange(index, e.target.value)
                              }
                            />
                          </Form.Group>
                        </li>
                      );
                    })}
                  </ul>
                  <div className=" text-center">
                    <h6 className="user-form-theme-timer">
                      {/* 00:54 */}
                      {formatTime(seconds)}
                    </h6>
                    <p className="user-form-paragraph-timer mt-3">Send again</p>
                  </div>
                  <div className="text-center mt-3">
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-modal"
                      onClick={() => navigate(Screens.mySchedule)}
                    >
                      verify
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
