import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import { Screens } from "../../constant/routes";

function SignUp() {
  const navigate = useNavigate();
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
                    <Form className="mt-5 mb-5  form-user-auth-separate-content">
                      <h4
                        className="services-modal-title-main color-theme-dark-font"
                        style={{ fontWeight: "600" }}
                      >
                        Hello there!
                      </h4>
                      <p className="
                       services-modal-description-otp-section">
                        Please enter your phone number to sign up.
                      </p>
                      <Form.Group
                        className="mb-2 position-relative text-left"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="form-control-label text-left">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="+1-300-555-0399"
                          className="form-control-text-input"
                        />
                      </Form.Group>

                      <div className="text-center mt-3">
                        <Button
                          className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                          style={{ boxShadow: "none" }}
                          onClick={() => navigate(Screens.otpSignup)}
                        >
                          send OTP
                        </Button>
                      </div>
                      <p className="account-signup-helping-text">
                        Already have an account?
                        <span
                          className="theme-orange-account"
                          onClick={() => navigate(Screens.authLogin)}
                        >
                          {" "}
                          Sign In
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

export default SignUp;
