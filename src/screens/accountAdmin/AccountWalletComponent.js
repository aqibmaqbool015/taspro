import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import AdminImages from "../../constant/adminImages";
import { walletListing } from "../../constant/accountDummyData";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function AccountWalletComponent() {
  const navigate = useNavigate();
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
              <section className="user-content-auth-section">
                <Container>
                  <Row>
                    <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="user-account-language-controller">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-1"
                        >
                          Transactions
                        </h6>
                        <ul className="px-0">
                          {walletListing.map((item, index) => {
                            return (
                              <>
                                <li className="user-power-wallet-listing">
                                  <div
                                    className="user-coupan-apply-section
                      repair-ac-flex-container
                      repair-ac-flex-container-percent
                      "
                                  >
                                    <div
                                      className="split-ac-flex-left
                              repair-ac-flex-left"
                                    >
                                      <span className="wallet-logo-label-view">
                                        <img
                                          src={item.icon}
                                          className="img-fluid"
                                        />
                                      </span>
                                      <div
                                        className="split-ac-username
                                repair-ac-username"
                                      >
                                        <h6
                                          className="user-content-title-light
                                        user-content-title-darks mb-1"
                                        >
                                          {item.title}
                                        </h6>
                                        <p className="user-ammount-bottom font-wight-400">
                                          {item.text}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="repair-time-date-label">
                                      <h6 className="contact-phone-text mb-1">
                                        {item.amount}
                                      </h6>
                                      <p className="user-ammount-bottom font-wight-400">
                                        {item.time}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </Col>
                    <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 12 }}>
                      <div
                        className="user-account-refer-wallet position-relative
                      timeline-vertical-detail-container"
                      >
                        <div className="user-account-wallet-layout mb-2">
                          <div className="user-account-wallet-left">
                            <h5 className="wallet-home-banner-title mt-3">
                              My Wallet
                            </h5>
                            <h5 className="wallet-home-banner-title mt-3">
                              Balance
                            </h5>
                            <h4 className="wallet-home-banner-title">
                              ₹ 12,500.35
                            </h4>
                            <div className="mt-4">
                              <Button className="btn-primary-instant-banner">
                                Instant Withdrawal
                              </Button>
                            </div>
                          </div>
                          <div className="user-account-wallet-right text-center">
                            <img
                              src={AdminImages.WalletBanner}
                              className="img-fluid-account-wallet"
                            />
                          </div>
                        </div>
                        <img
                          src={AdminImages.WalletHome}
                          onClick={() => navigate(Screens.accountBank)}
                          className="img-fluid-content-wallet-home"
                        />
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

export default AccountWalletComponent;
