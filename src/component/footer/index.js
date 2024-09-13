import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  footerAccount,
  footerContact,
  footerLink,
  socialAccounts,
} from "../../constant/dummyData";
import Images from "../../constant/images";
import { Screens } from "../../constant/routes";
import { useNavigate } from "react-router-dom";

function FooterComponent() {
  const navigate = useNavigate();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="footer-main-section">
        <Container>
          <Row>
            {footerLink.map((item, index) => {
              return (
                <>
                  <Col
                    lg={{ span: 3 }}
                    md={{ span: 3 }}
                    sm={{ span: 6 }}
                    xs={{ span: 6 }}
                  >
                    <div className="footer-menu-heading-content">
                      <h6 className="footer-main-top-title">{item.title}</h6>
                      <ul className="px-0 mb-2">
                        {item.link.map((linkItem, linkIndex) => (
                          <>
                            <li
                              className="user-listing-footer-points"
                              key={linkIndex}
                              onClick={() => navigate(linkItem.link)}
                            >
                              <p
                                className="user-listing-footer-link"
                                onClick={handleClicks}
                              >
                                {linkItem.text}
                              </p>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </>
              );
            })}
            <Col lg={{ span: 3 }}>
              <div className="footer-menu-heading-content">
                <h6 className="footer-main-top-title">Social Media Links</h6>
                <ul className="px-0">
                  {socialAccounts.map((item, index) => {
                    return (
                      <>
                        <li
                          className="user-listing-footer-points
                        user-listing-footer-social"
                          key={index}
                        >
                          <span className="user-social-links-connect">
                            <img src={item.image} className="img-fluid" />
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 3 }}>
              <div className="footer-menu-heading-content">
                <h6 className="footer-main-top-title">
                  Company Registered Address
                </h6>
                <ul className="px-0">
                  {footerContact.map((item, index) => {
                    return (
                      <>
                        <li
                          className="user-listing-footer-points
                       "
                          key={index}
                        >
                          <p className="user-listing-footer-link">
                            {item.text}
                          </p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              <div className="footer-copyright-bottom">
                <span
                  className="logo-label-content mb-2"
                  onClick={() => navigate(Screens.Home)}
                >
                  <img
                    src={Images.FooterLogo}
                    className="img-fluid"
                    onClick={handleClicks}
                  />
                </span>
                <p className="paragraph-bottom-footer mb-2">
                  Copyright. 2024 TASPro Company All Right Reserved
                </p>
                <ul className="px-0 mb-2">
                  {footerAccount.map((item, index) => {
                    return (
                      <>
                        <li
                          key={index}
                          className="user-listing-account-payment"
                        >
                          <span className="user-account-label">
                            <img src={item.image} className="img-fluid" />
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FooterComponent;
