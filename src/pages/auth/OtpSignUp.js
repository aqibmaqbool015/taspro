import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Screens } from "../../constant/routes";

function OtpSignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, email, phone } = location.state || {};
  const [seconds, setSeconds] = useState(60);
  const [otp, setOtp] = useState(new Array(4).fill("")); // 4 digits OTP
  const [error, setError] = useState("");
  const [isResendEnabled, setIsResendEnabled] = useState(false); // State to control resend button
  const otpInputs = useRef([]);

  useEffect(() => {
    // Start the timer countdown
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setIsResendEnabled(true); // Enable resend button when timer finishes
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isResendEnabled]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleInputChange = (index, value) => {
    // Prevent entering more than one character
    if (value.length > 1) return;

    // Update the OTP array
    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      updatedOtp[index] = value;
      return updatedOtp;
    });

    // If current input is filled, move to the next input field
    if (value && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");

    if (otpString.length !== 4) { // Check for 4 digits OTP
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URI}/api/v1/auth/verifyOTP`, {
        otp: otpString,
        email: email,
         deviceId: process.env.REACT_APP_deviceId,
        fcmToken:process.env.REACT_APP_fcmToken
      });
      if (response.data?.data?.token) {
            localStorage.setItem("token", response.data?.data?.token); // Store token in local storage
        }
        navigate(Screens.profileBuilding);

    } catch (err) {
      setError("An error occurred while verifying OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URI}/api/v1/auth/resendOTP`, {
        email: email,  
        phoneNumber :phone
      });

      if (response.status === 200) {
        setSeconds(60); 
        setIsResendEnabled(false); 
        setError(""); 
        setOtp(new Array(4).fill(""));
      } else {
        setError(response.data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while resending OTP. Please try again.");
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
                        OTP Verification
                      </h4>
                      <p className="services-modal-description services-modal-description-otp-section">
                        Please enter the OTP sent to your email {email}.
                      </p>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <ul className="px-0 text-center">
                        {otp.map((item, index) => {
                          return (
                            <li className="user-form-otp-code" key={index}>
                              <Form.Group
                                className="mb-2"
                                controlId={`formOtpInput${index}`}
                              >
                                <Form.Control
                                  ref={(ref) => (otpInputs.current[index] = ref)}
                                  type="number"
                                  maxLength="1"
                                  placeholder="-"
                                  className="form-control-text-input form-control-text-input-outline form-control-text-input-otp-content"
                                  value={item} // Bind each input field to the corresponding value in the OTP state
                                  onChange={(e) => handleInputChange(index, e.target.value)} // Update state on change
                                />
                              </Form.Group>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="text-center">
                        <h6 className="user-form-theme-timer">
                          {formatTime(seconds)}
                        </h6>
                        <p className="user-form-paragraph-timer mt-3">
                          {isResendEnabled ? (
                            <span
                              style={{ cursor: "pointer", color: "#007bff" }}
                              onClick={handleResendOtp}
                            >
                              Resend OTP
                            </span>
                          ) : (
                            "Send again"
                          )}
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
                          onClick={handleVerify}
                        >
                          Verify
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
