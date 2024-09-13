import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import {
  aboutGraph,
  careersForm,
  newBankForm,
  openPositionsCard,
  setUsApart,
  userAccountList,
  walletListing,
} from "../../constant/accountDummyData";
import { Screens } from "../../constant/routes";
import AdminImages from "../../constant/adminImages";
import { scheduleBookingStatus } from "../../constant/dummyData";
import Images from "../../constant/images";
import { CareerSlide } from "../../commonComponents/CareerSlide";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function CareerComponent() {
  const navigate = useNavigate();
  return (
    <>
      <section className="career-home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 6 }}>
              <div
                className="
              content-form-auth-container-account"
              >
                <Card className="career-home-banner-card">
                  <div className="repair-time-date-container mb-4">
                    <Form className="mt-3">
                      <div className="text-center">
                        <h4
                          className="heading-title-banner text-center"
                          style={{ maxWidth: "100%" }}
                        >
                          Apply for a job
                        </h4>
                      </div>
                      {careersForm.map((item, index) => {
                        return (
                          <>
                            <Form.Group
                              className="mb-2"
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
                      <Form.Group
                        className="mb-2 form-control-text-input-career"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          placeholder="Experience & Details"
                          as="textarea"
                          className="form-control-text-input
                        form-control-text-input-bank"
                          rows={5}
                          style={{ height: "auto" }}
                        />
                      </Form.Group>
                      <div className="text-center mt-3">
                        <Button
                          className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                          style={{ boxShadow: "none" }}
                        >
                          Continue
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Card>
              </div>
            </Col>
            <Col lg={{ span: 6 }}>
              <div className="career-banner-home-content-right">
                <span className="career-banner-home-content-label">
                  <img src={AdminImages.CareerBanner} className="img-fluid" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="open-positions-card-section">
        <Container>
          <div className="text-center">
            <h4
              className="heading-title-banner mb-2"
              style={{ maxWidth: "100%" }}
            >
              Open Positions
            </h4>
            <p
              className="heading-text-repair-area
              heading-text-repair-career"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don't look even
              slightly believable.
            </p>
            <div className="text-left mt-4">
              <Row>
                {openPositionsCard.map((item, index) => {
                  return (
                    <>
                      <Col
                        lg={{ span: 4 }}
                        md={{ span: 6 }}
                        sm={{ span: 6 }}
                        xs={{ span: 12 }}
                      >
                        <Card
                          className="admin-sidebar-redirect
                        open-position-light-card mb-4"
                        >
                          <div
                            className="split-ac-flex-left
                              repair-ac-flex-left"
                          >
                            <span
                              className="
                          repair-ac-label-service"
                            >
                              <img src={item.image} className="img-fluid" />
                            </span>
                            <div
                              className="split-ac-username
                                repair-ac-username"
                            >
                              <h6
                                className="user-power-title
                            user-power-title-repair"
                              >
                                {item.title}
                              </h6>
                              <p
                                className="user-power-title
                            user-power-title-repair-text"
                              >
                                {item.text}
                              </p>
                              {/* <p className="user-content-card-text mb-2">
                                Type: Corporate
                              </p> */}
                              <p
                                className="user-off-percent
                              color-theme-orange mb-2"
                              >
                                {item.post}
                              </p>
                              <div className="mt-3">
                                <Button
                                  className="button-primary-transparent-career
                    button-primary-transparent"
                                >
                                  Apply Now
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
            <div className="mt-5">
              <img src={AdminImages.Helping} className="img-fluid" />
            </div>
          </div>
          <div className="timeline-vertical-detail-container">
            <div className="user-about-mission-container">
              <div
                className="user-about-mission-box
              user-about-mission-box-first"
              >
                <h6
                  className="user-power-title
                            user-power-title-repair
                            mb-2 mt-2"
                >
                  Our Mission
                </h6>
                <p className="account-about-description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomized words which don't look
                  even slightly believable.but the majority have suffered
                  alteration in some form, by injected humour, or randomized
                  words which don't look even slightly believable.
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

          <Row>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <div className="user-history-detail-profile">
                <h4 className="heading-title-banner mb-0">
                  What sets us apart?
                </h4>
                <p
                  className="heading-text-repair-area
              heading-text-repair-career
              text-left"
                >
                  There are many variations of passages of Lorem Ipsum
                </p>
                <ul className="px-0 mt-2">
                  {setUsApart.map((item, index) => {
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
                              <span className="set-apart-label-view">
                                {item.icon}
                              </span>
                              <div
                                className="split-ac-username
                                repair-ac-username"
                              >
                                <h6 className="user-form-label-heading mb-1">
                                  {item.title}
                                </h6>
                                <p className="user-ammount-bottom">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 6 }} sm={{ span: 12 }}>
              <div className="text-center mb-2">
                <img
                  src={AdminImages.Career1}
                  className="img-fluid
                img-fluid-content-apart-set"
                />
              </div>
            </Col>
          </Row>
          <div className="user-account-language-controller mt-4">
            <div className="user-mission-values-graph-controller">
              <h4 className="heading-title-banner mt-3 mb-0">
                Our Core Values
              </h4>
              <p className="account-about-description">
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
                        <p className="account-about-description connect-app-input-name-graph-text">
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
                        <p className="account-about-description connect-app-input-name-graph-text">
                          {item.text}
                        </p>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="blog-desktop-admin-gap">
            <Row>
              <Col lg={{ span: 12 }}>
                <h4 className="heading-title-banner mb-2">Our Blogs</h4>
                <p
                  className="heading-text-repair-area
              heading-text-repair-career"
                >
                  There are many variations of passages of Lorem Ipsum
                </p>
              </Col>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-4 user-multi-services-slides 
              user-multi-services-split user-multi-services-customer
              text-left
              user-multi-services-slides-career"
                >
                  <CareerSlide />
                </div>
              </Col>
              <Col lg={{ span: 12 }}>
                <div className="my-5 user-account-join-apply">
                  <div className="">
                    <h6
                      className="user-power-title
                            user-power-title-repair
                            mb-1 mt-2"
                    >
                      Join us on your journey
                    </h6>
                    <p className="account-about-description">
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
          </div>
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

export default CareerComponent;
