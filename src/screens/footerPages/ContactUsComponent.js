import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import { socialAccountsLinks } from "../../constant/accountDummyData";
import AdminImages from "../../constant/adminImages";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function ContactUsComponent() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="user-account-language-controller">
                <h6
                  className="user-power-title
                            user-power-title-repair
                            mb-3 mt-2"
                >
                  Contact Us
                </h6>
                <p className="account-about-description">
                  We're here to assist you! If you have any questions, concerns,
                  or need further assistance, please don't hesitate to reach out
                  to us. Our dedicated support team is ready to help and provide
                  the guidance you need. Whether you have inquiries about our
                  services, suggestions for improvement, or require technical
                  support, we're just a message away. Your satisfaction is our
                  priority, and we are committed to ensuring a seamless
                  experience for you on TASPRO Company. We appreciate your
                  feedback and value the opportunity to assist you. Contact us
                  today, and let us help make your TASPRO Company journey a
                  success!"
                </p>
                <Row>
                  <Col lg={{ span: 4 }}>
                    <div className="user-contact-us-help">
                      <span className="user-contact-us-help-label">
                        <img
                          src={AdminImages.ContactUs1}
                          className="img-fluid"
                        />
                      </span>
                      <div className="user-contact-us-profile">
                        <h6 className="user-contact-us-title">Chat to us</h6>
                        <p className="user-contact-us-description">
                          Our friendly team is here to help.
                        </p>
                        <h6 className="user-contact-us-subtitle">
                          help@TASPRO Company.app
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={{ span: 4 }}>
                    <div className="user-contact-us-help">
                      <span className="user-contact-us-help-label">
                        <img
                          src={AdminImages.ContactUs2}
                          className="img-fluid"
                        />
                      </span>
                      <div className="user-contact-us-profile">
                        <h6 className="user-contact-us-title">Phone</h6>
                        <p className="user-contact-us-description">
                          Our friendly team is here to help.
                        </p>
                        <h6 className="user-contact-us-subtitle">
                          +1(555) 000-0000
                        </h6>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="footer-menu-heading-content">
                  <h6 className="user-contact-us-title">Social Links</h6>
                  <p className="user-contact-us-description">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <ul className="px-0">
                    {socialAccountsLinks.map((item, index) => {
                      return (
                        <>
                          <li
                            className="user-listing-footer-points
                        user-listing-footer-social
                        user-listing-footer-social-link"
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
              </div>
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

export default ContactUsComponent;
