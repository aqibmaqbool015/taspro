import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import { Screens } from "../../constant/routes";
import {
  imagePickerProfile,
  profileBuilding,
  profileComplete,
} from "../../constant/dummyData";
import ImagePicker from "../../commonComponents/imagePicker";

function CompleteProfile() {
  const navigate = useNavigate();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                    <div
                      className="contact-form-content-container
                    form-user-auth-separate-content "
                    >
                      <Form className="form-control-contact-content mt-3">
                        <h4
                          className="services-modal-title-main color-theme-dark-font"
                          style={{ fontWeight: "600" }}
                        >
                          Complete your Profile!
                        </h4>
                        <p
                          className="
                    services-modal-description-otp-section"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                        {profileComplete.map((item, index) => {
                          return (
                            <>
                              <Form.Group
                                className="mb-2 position-relative text-left"
                                controlId="formBasicEmail"
                              >
                                <Form.Label className="form-control-label text-left">
                                  {item.label}
                                </Form.Label>
                                <Form.Control
                                  type={item.type}
                                  placeholder={item.place}
                                  className="form-control-text-input"
                                />
                                {item.icon}
                              </Form.Group>
                            </>
                          );
                        })}

                        <div className="text-center mt-3"
                        onClick={handleClicks}>
                          <Button
                            className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                            style={{ boxShadow: "none" }}
                            onClick={() => navigate(Screens.mySchedule)}
                          >
                            continue
                          </Button>
                        </div>
                      </Form>
                    </div>
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

export default CompleteProfile;
