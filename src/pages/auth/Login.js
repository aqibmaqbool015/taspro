import React, { useState } from "react";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { Screens } from "../../constant/routes";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState(""); // Initialize phone state
  const [email, setEmail] = useState(""); // Initialize email state
  const [error, setError] = useState(""); // Initialize error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for phone number and email
    if (!phone || !email) {
      setError("Please enter both email and phone number");
      return;
    }

    try {
      // Submit data to the login API
      const response = await axios.post(`${process.env.REACT_APP_BASE_URI}/api/v1/auth/login`, {
        phoneNumber: phone,
        email: email,
      });

        console.log("Login response", response.data);

        navigate(Screens.otpLogin, { state: { userData: response.data.data, email: email, phone: phone } });
      
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };// Initialize phone state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    <Form className="mt-5 mb-5 form-user-auth-separate-content" onSubmit={handleSubmit}>
                      <h4
                        className="services-modal-title-main color-theme-dark-font"
                        style={{ fontWeight: "600" }}
                      >
                        Hello & Welcome!
                      </h4>
                      <p
                        className="
                       services-modal-description-otp-section"
                      >
                        Please enter your email or phone number to sign in.
                      </p>
                      {error && <div className="alert alert-danger">{error}</div>}

                      <Form.Group
                        className="mb-2 position-relative text-left"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="form-control-label text-left">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="+1-300-555-0399"
                          className="form-control-text-input"
                          value={phone} // Use the phone state here
                          onChange={(e) => setPhone(e.target.value)} // Update phone state on change
                          
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 position-relative text-left" controlId="formBasicEmail">
                        <Form.Label className="form-control-label text-left">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="you@example.com"
                          className="form-control-text-input"
                          value={email} // Use the email state here
                          onChange={(e) => setEmail(e.target.value)} // Update email state on change
                        />
                      </Form.Group>

                      <div className="text-center mt-3">
                        <Button
                          className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                          style={{ boxShadow: "none" }}
                           type="submit"
                        >
                          send OTP
                        </Button>
                      </div>
                      <p className="account-signup-helping-text">
                        Don’t have an account?
                        <span
                          className="theme-orange-account"
                          onClick={() => navigate(Screens.signUp)}
                        >
                          {" "}
                          Sign Up
                        </span>
                      </p>
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

export default Login;
