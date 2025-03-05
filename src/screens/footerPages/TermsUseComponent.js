import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import { checkInterest } from "../../constant/dummyData";
import {
  aboutCheckList,
  aboutGraph,
  termsUseLinks,
  termsUseText,
  termsUseTextList,
} from "../../constant/accountDummyData";
import Images from "../../constant/images";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function TermsUseComponent() {
  const navigate = useNavigate();
  const arrayOne = [
    { id: 1, name: "abc" },
    { id: 2, name: "abc" },
    { id: 3, name: "xyz" }
  ];
  
  const uniqueArray = [];
  const names = new Set();
  console.log(names, 'nameee');
  arrayOne.forEach(item => {
    if (!names.has(item.name)) {
      names.add(item.name);
      uniqueArray.push(item);
    }
  });
  
  console.log(uniqueArray);
  
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="user-account-language-controller">
                <h6
                  className="
                            user-power-title-repair
                            mb-3 mt-2"
                >
                  Term of use
                </h6>
                <p className="account-about-description mb-1">
                  Welcome to TASPRO Company! These Terms of Use govern your
                  access to and use of our mobile application and related
                  services (collectively, the "App"). By accessing or using the
                  App, you agree to be bound by these Terms of Use.
                </p>
                <ul className="px-0 mt-2">
                  {termsUseText.map((item, index) => {
                    return (
                      <>
                        <h6
                          className="connect-app-input-name
                      connect-app-input-name-disc my-2
                      mx-4"
                        >
                          {item.title}
                        </h6>
                        <p className="account-about-description mb-1">{item.text}</p>
                      </>
                    );
                  })}
                  {termsUseTextList.map((item, index) => {
                    return (
                      <>
                        <h6
                          className="connect-app-input-name
                      connect-app-input-name-disc my-2
                      mx-4"
                        >
                          {item.title}
                        </h6>
                        <p
                          className="account-about-description
                        account-about-description-height"
                        >
                          {item.text}
                          <br />
                          {item.a}
                          <br />
                          {item.b}
                          <br />
                          {item.c}
                          <br />
                          {item.d}
                          <br />
                          {item.e}
                          <br />
                          {item.f}
                        </p>
                      </>
                    );
                  })}
                  <div className="my-2">
                    {termsUseLinks.map((item, index) => {
                      return (
                        <>
                          <h6
                            className="connect-app-input-name
                      connect-app-input-name-disc my-2
                      mx-4"
                          >
                            {item.title}
                          </h6>
                          <p className="account-about-description mb-1">
                            {item.text}
                          </p>
                        </>
                      );
                    })}
                  </div>
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

export default TermsUseComponent;
