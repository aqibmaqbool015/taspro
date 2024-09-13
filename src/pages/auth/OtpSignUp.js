import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import { otpCode } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";

function OtpSignUp() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(60);
  const otpInputs = useRef([]);

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

  return (
    <>
      <section className="user-content-auth-section text-center">
        <Container fluid>
          <Row style={{ justifyContent: "center" }}>
            <div className="user-content-card-box">
              <div className="user-content-form-box">
                <div className="content-form-left-side">
                  <span className="content-form-auth-logo">
                    <img src={Images.AuthLogo} className="img-fluid" />
                  </span>
                  <div className="content-form-auth-container text-center">
                    <Form className="mt-4 mb-3 form-user-auth-separate-content">
                      <h4
                        className="services-modal-title-main color-theme-dark-font"
                        style={{ fontWeight: "600" }}
                      >
                        OTP Verification!
                      </h4>
                      <p className="services-modal-description services-modal-description-otp-section">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                      <ul className="px-0 text-center">
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
                          {formatTime(seconds)}
                        </h6>
                        <p className="user-form-paragraph-timer mt-3">
                          Send again
                        </p>
                      </div>
                      <div className="text-center mt-3">
                        <Button
                          className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                          style={{
                            boxShadow: "none",
                            width: "225px",
                            height: "50px",
                          }}
                          onClick={() => navigate(Screens.profileBuilding)}
                        >
                          verify
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="content-form-right-side">
                  <span className="content-form-logo-banner">
                    <img src={Images.AuthBanner} className="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OtpSignUp;
