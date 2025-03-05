import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import AdminImages from "../../constant/adminImages";
import { accountRatings, walletListing } from "../../constant/accountDummyData";
import { scheduleBookingStatus } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function AccountBankComponent() {
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
              <section
                className="user-content-auth-section
              content-form-auth-container-account"
              >
                <Container>
                  <Row>
                    <Col lg={{ span: 12 }}>
                      <div className="user-arrow-back-dashboard">
                        <img
                          src={AdminImages.BackArrow}
                          className="img-fluid"
                          alt=""
                          onClick={() => navigate(Screens.accountHome)}
                        />
                      </div>
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
                        <Card
                          className="admin-sidebar-redirect mb-5"
                          style={{ border: "none" }}
                        >
                          <div
                            className="
                      repair-wallet-account-bank-container"
                          >
                            <div>
                              <h6
                                className="choose-us-title-coupans
                                choose-us-title-coupans-account-bank"
                              >
                                James William
                              </h6>

                              <p className="font-weight-normal mb-0">
                                Western Union
                              </p>
                            </div>
                            <div className="repair-time-date-label">
                              <p className="font-weight-normal mb-0">
                                ***********3311
                              </p>
                            </div>
                          </div>
                        </Card>
                        <div
                          className="btn-groups-content-move-up"
                          onClick={handleClicks}
                        >
                          <div className="btn-primary-rounded-account-container-lg mb-4">
                            <Button
                              className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent mb-4"
                              style={{
                                boxShadow: "none",
                                width: "100%",
                                padding: "0px",
                                borderRadius: "25px",
                              }}
                              onClick={() =>
                                navigate(Screens.accountBankRemove)
                              }
                            >
                              Remove Bank
                            </Button>
                          </div>

                          <Button
                            className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                            style={{
                              boxShadow: "none",
                              width: "100%",
                              padding: "0px",
                            }}
                            onClick={() => navigate(Screens.newBank)}
                          >
                            Add New Bank
                          </Button>
                        </div>
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

export default AccountBankComponent;
