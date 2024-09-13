import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import { socialAccountsLinks } from "../../constant/accountDummyData";
import AdminImages from "../../constant/adminImages";
import { faqsContent } from "../../constant/dummyData";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function FooterFaqComponent() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="user-account-language-controller
              user-account-faqs-controller">
                <h6
                  className="user-power-title
                            user-power-title-repair
                            mb-3 mt-2"
                >
                  Frequently Asked Questions (FAQ)?
                </h6>

                <Row>
                  <Col lg={{ span: 12 }}>
                    <Accordion defaultActiveKey="0">
                      {faqsContent.map((item, index) => {
                        return (
                          <>
                            <Accordion.Item
                              className="mb-4"
                              eventKey={item.key}
                            >
                              <Accordion.Header>
                                <h6 className="heading-title-banner-faq mb-4">
                                  {item.title}
                                </h6>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p className="heading-text-repair-area">
                                  {item.text}
                                </p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </>
                        );
                      })}
                    </Accordion>
                  </Col>
                </Row>
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

export default FooterFaqComponent;
