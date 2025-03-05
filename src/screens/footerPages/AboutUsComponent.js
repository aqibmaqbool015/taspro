import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import { checkInterest } from "../../constant/dummyData";
import { aboutCheckList, aboutGraph } from "../../constant/accountDummyData";
import Images from "../../constant/images";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function AboutUsComponent() {
  const navigate = useNavigate();
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
                            connect-app-input-name-review
                            mb-2 mt-2"
                >
                  About us
                </h6>
                <p
                  className="account-about-description
              account-about-description-font"
                >
                  Welcome to{" "}
                  <span className="account-about-highlight">
                    TASPRO Company
                  </span>{" "}
                  by
                  <span className="account-about-highlight">
                    {" "}
                    DEJA Tech LLC{" "}
                  </span>
                  – where innovation meets convenience and transforms the way
                  you connect with service professionals. We believe in the
                  power of technology to simplify your life, making it easier
                  than ever to find and hire independent service professionals
                  who can meet your unique needs.
                </p>
                <h6 className="connect-app-input-name mt-4 mb-3">
                  who are we?
                </h6>
                <p
                  className="account-about-description
                account-about-description-font"
                >
                  At DEJA Tech LLC, we take a customer-centric approach to
                  developing intuitive service apps that prioritize your
                  satisfaction and deliver exceptional experiences. Our team of
                  dedicated experts combines cutting-edge technology with a deep
                  understanding of your daily challenges, crafting solutions
                  that seamlessly bridge the gap between you and the services
                  you require.
                </p>
                <h6 className="connect-app-input-name my-4">
                  What makes TASPro Company the best ?
                </h6>
                <p
                  className="account-about-description
                account-about-description-font mb-5"
                >
                  We understand that finding the right professional can be
                  time-consuming and daunting.
                </p>
                {aboutCheckList.map((item, index) => {
                  return (
                    <>
                      <div className=" mb-2">
                        {/* <label class="container-checks-box-btn container-checks-about-btn">
                          <input type="checkbox" />
                          <span
                            class="checkmark-content-btn-outline
                            checkmark-content-btn-about"
                          ></span>
                          <p
                            className="account-about-description
                          account-about-description-checked
                          account-about-description-font mb-0 "
                          >
                            {item.name}
                          </p>
                        </label> */}
                        <ul className="">
                          <li>
                            <p
                              className="account-about-description
                          account-about-description-checked
                          account-about-description-font mb-0 "
                            >
                              {item.name}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="timeline-vertical-detail-container">
                <div className=" user-about-mission-container">
                  <div className="user-about-mission-box
                  user-about-mission-box-first">
                    <h6
                      className="user-power-title
                            user-power-title-repair
                            mb-3 mt-2"
                    >
                      Our Mission
                    </h6>
                    <p
                      className="account-about-description
                    account-about-description-font"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomized words which
                      don't look even slightly believable.but the majority have
                      suffered alteration in some form, by injected humour, or
                      randomized words which don't look even slightly
                      believable.
                    </p>
                  </div>
                  <div className="text-center user-about-mission-box">
                    <img
                      src={Images.AboutMission}
                      className="img-fluid-mission-box"
                    />
                  </div>
                </div>
              </div>
              <div className="user-account-language-controller mt-4">
                <div className="user-mission-values-graph-controller">
                  <h6 className="connect-app-input-name my-3">
                    Our Core Values
                  </h6>
                  <p
                    className="account-about-description
                  account-about-description-font"
                  >
                    There are many variations of passages of Lorem Ipsum
                  </p>
                </div>

                <ul className="px-0 mt-2 text-center">
                  {aboutGraph.map((item, index) => {
                    return (
                      <li key={index} className={item.listClass}>
                        {index === 1 || index === 3 ? (
                          <div className="mt-3 mb-5">
                            <h6 className="connect-app-input-name connect-app-input-name-graph my-3">
                              {item.title}
                            </h6>
                            <p
                              className="account-about-description
                            account-about-description-font connect-app-input-name-graph-text"
                            >
                              {item.text}
                            </p>
                          </div>
                        ) : null}
                        <span className="user-mission-values-label mb-4">
                          <img
                            src={item.graph}
                            className="img-fluid"
                            alt={item.title}
                          />
                        </span>

                        <span className={item.lineLastImage}>
                          <img src={Images.Graph6} className={item.lineClass} />
                        </span>
                        {index !== 1 && index !== 3 ? (
                          <div className="mt-3">
                            <h6 className="connect-app-input-name connect-app-input-name-graph my-3">
                              {item.title}
                            </h6>
                            <p
                              className="account-about-description

                            account-about-description
                            -font connect-app-input-name-graph-text"
                            >
                              {item.text}
                            </p>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                className="mt-3 user-account-join-apply
              user-account-join-apply-margin-pin mb-3"
              >
                <div className="">
                  <h6
                    className="user-power-title
                            user-power-title-repair
                            mb-1 mt-2"
                  >
                    Join us on your journey
                  </h6>
                  <p
                    className="account-about-description
                  account-about-description-font
                  "
                  >
                    Are you interested in being a part of it?
                  </p>
                </div>
                <div className="text-center">
                  <Button
                    className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-journey"
                  >
                    Apply Now
                  </Button>
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

export default AboutUsComponent;
