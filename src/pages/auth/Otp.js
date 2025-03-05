// import React, { useEffect, useState, useRef } from "react";
// import { Container, Row, Form, Button } from "react-bootstrap";
// import "../../auth.css";
// import Images from "../../constant/images";
// import { useNavigate } from "react-router-dom";
// import { otpCode } from "../../constant/dummyData";
// import { Screens } from "../../constant/routes";

// function OtpAuth() {
//   const navigate = useNavigate();
//   const [seconds, setSeconds] = useState(60);
//   const otpInputs = useRef([]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prevSeconds) => {
//         if (prevSeconds === 0) {
//           clearInterval(timer);
//           return 0;
//         } else {
//           return prevSeconds - 1;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const remainingSeconds = time % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   const handleInputChange = (index, value) => {
//     if (value.length === 1 && index < otpInputs.current.length - 1) {
//       otpInputs.current[index + 1].focus();
//     }
//   };

//   return (
//     <>
//       <section className="user-content-auth-section text-center">
//         <Container fluid>
//           <Row style={{ justifyContent: "center" }}>
//             <div className="user-content-card-box">
//               <div className="user-content-form-box">
//                 <div className="content-form-left-side">
//                   <span className="content-form-auth-logo">
//                     <img src={Images.AuthLogo} className="img-fluid" />
//                   </span>
//                   <div className="content-form-auth-container text-center">
//                     <Form className="mt-4 mb-3 form-user-auth-separate-content">
//                       <h4
//                         className="services-modal-title-main color-theme-dark-font"
//                         style={{ fontWeight: "600" }}
//                       >
//                         OTP Verification!
//                       </h4>
//                       <p className="services-modal-description services-modal-description-otp-section">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         sed do eiusmod tempor incididunt ut labore
//                       </p>
//                       <ul className="px-0 text-center mb-0">
//                         {otpCode.map((item, index) => {
//                           return (
//                             <li className="user-form-otp-code" key={index}>
//                               <Form.Group
//                                 className="mb-2"
//                                 controlId={`formBasicEmail${index}`}
//                               >
//                                 <Form.Control
//                                   ref={(ref) => (otpInputs.current[index] = ref)}
//                                   type="number"
//                                   placeholder={item.place}
//                                   className="form-control-text-input form-control-text-input-outline form-control-text-input-otp-content"
//                                   onChange={(e) =>
//                                     handleInputChange(index, e.target.value)
//                                   }
//                                 />
//                               </Form.Group>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                       <div className=" text-center">
//                         <h6 className="user-form-theme-timer">
//                           {formatTime(seconds)}
//                         </h6>
//                         <p className="user-form-paragraph-timer mt-3">
//                           Send again
//                         </p>
//                       </div>
//                       <div className="text-center mt-3">
//                         <Button
//                           className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
//                           style={{
//                             boxShadow: "none",
//                             width: "225px",
//                             height: "50px",
//                           }}
//                           onClick={() => navigate(Screens.mySchedule)}
//                         >
//                           verify
//                         </Button>
//                       </div>
//                     </Form>
//                   </div>
//                 </div>
//                 <div className="content-form-right-side">
//                   <span className="content-form-logo-banner">
//                     <img src={Images.AuthBanner} className="img-fluid" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default OtpAuth;




import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Screens } from "../../constant/routes";

function OtpAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email , phone} = location.state || {}; // Get email from previous screen
  const [otp, setOtp] = useState(Array(4).fill("")); // 4 OTP fields
  const [seconds, setSeconds] = useState(60);
  const [error, setError] = useState("");
  const otpInputs = useRef([]);

  // Timer for countdown
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
    if (/[^0-9]/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleSubmitOtp = async () => {
    const otpString = otp.join("");

    if (otpString.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      // Verify OTP with the backend API
      const response = await axios.post(`${process.env.REACT_APP_BASE_URI}/api/v1/auth/verifyOTP`, {
        otp: otpString,
        email: email,
      });

      if (response.status === 200 && response.data.status === "success") {
        navigate(Screens.mySchedule); // OTP verified, navigate to next screen
      } else {
        setError(response.data.message || "OTP verification failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleResendOtp = async () => {
    try {
      // Resend OTP API call
      const response = await axios.post(`${process.env.REACT_APP_BASE_URI}/api/v1/auth/resendOTP`, {
        email: email,
        phoneNumber: phone, // Add phone number if required
      });

      if (response.status === 200 && response.data.status === "success") {
        setSeconds(60); // Reset the timer
        setError(""); // Clear previous error if any
      } else {
        setError(response.data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while resending the OTP. Please try again.");
    }
  };

  return (
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
                      Please enter the OTP sent to {email}
                    </p>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <ul className="px-0 text-center mb-0">
                      {Array(4)
                        .fill("")
                        .map((_, index) => (
                          <li className="user-form-otp-code" key={index}>
                            <Form.Group className="mb-2" controlId={`otp-input-${index}`}>
                              <Form.Control
                                ref={(ref) => (otpInputs.current[index] = ref)}
                                type="text"
                                maxLength="1"
                                value={otp[index]}
                                className="form-control-text-input form-control-text-input-outline form-control-text-input-otp-content"
                                onChange={(e) => handleInputChange(index, e.target.value)}
                              />
                            </Form.Group>
                          </li>
                        ))}
                    </ul>
                    <div className="text-center">
                      <h6 className="user-form-theme-timer">{formatTime(seconds)}</h6>
                      {seconds === 0 && (
                        <p className="user-form-paragraph-timer mt-3" onClick={handleResendOtp} style={{ cursor: "pointer" }}>
                          Send again
                        </p>
                      )}
                    </div>
                    <div className="text-center mt-3">
                      <Button
                        className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                        style={{
                          boxShadow: "none",
                          width: "225px",
                          height: "50px",
                        }}
                        onClick={handleSubmitOtp}
                      >
                        Verify OTP
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
  );
}

export default OtpAuth;
