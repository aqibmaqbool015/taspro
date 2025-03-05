import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import AdminImages from "../../constant/adminImages";
import {
  accountRatings,
  newBankForm,
  walletListing,
} from "../../constant/accountDummyData";
import { scheduleBookingStatus } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function AddNewBankComponent() {
  const navigate = useNavigate();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="user-home-profile-content">
                <p className="user-fome-content-link">
                  <span className="user-home-content-label">
                    <img src={Images.Sidebar1} className="img-fluid" />
                  </span>
                  Home |{" "}
                  <span
                    className="color-theme-orange"
                    onClick={() => navigate(Screens.accountEdit)}
                  >
                    Profile
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={{ span: 3 }}>
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
              <div className="user-arrow-back-dashboard">
                <img
                  src={AdminImages.BackArrow}
                  className="img-fluid"
                  alt=""
                  onClick={() => navigate(Screens.accountHome)}
                />
              </div>
              <section
                className="user-content-auth-section
              timeline-vertical-detail-container"
              >
                <Container>
                  <Row>
                    <Col lg={{ span: 12 }}>
                      <div className="user-account-language-controller">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-1"
                        >
                          Bank Account
                        </h6>
                      </div>
                    </Col>

                    <Col lg={{ span: 6 }} md={{ span: 12 }}>
                      <div className="repair-time-date-container mb-4">
                        <Form className="mt-4 mb-5">
                          {newBankForm.map((item, index) => {
                            return (
                              <>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label className="form-control-label">
                                    {item.label}
                                  </Form.Label>
                                  <Form.Control
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    className="form-control-text-input
                                    form-control-text-input-bank"
                                  />
                                </Form.Group>
                              </>
                            );
                          })}

                          <div
                            className="text-center mt-3"
                            onClick={handleClicks}
                          >
                            <Button
                              className="btn-primary-fill-book btn-primary-fill-book-rounded"
                              onClick={() => navigate(Screens.accountWallet)}
                            >
                              Add New Bank
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
          <AddressUpdateDropdown />
        </Container>
      </section>
    </>
  );
}

export default AddNewBankComponent;
