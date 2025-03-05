import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import {
  privacyTextArray,
} from "../../constant/accountDummyData";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";

function PrivacyComponent() {
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
                  Privacy Policy
                </h6>
                <p className="account-about-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas pulvinar bibendum magna Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas pulvinar bibendum magna
                </p>
                <ul className="px-0">
                  {privacyTextArray.map((item, index) => {
                    return (
                      <>
                        <p className="account-about-description">
                          {item}
                        </p>
                      </>
                    );
                  })}
                </ul>
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

export default PrivacyComponent;
