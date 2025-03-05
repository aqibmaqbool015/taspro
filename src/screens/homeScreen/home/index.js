import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Images from "../../../constant/images";
import {
  appliancesContent,
  applicationDownload,
  chooseListing,
  handymanContent,
  homeCards,
  homeService,
  repairService,
  servicesTexts,
  servicesTextsTwo,
} from "../../../constant/dummyData";
import CarouselBanner from "../../../commonComponents/CarouselBanner";
import { Gallery } from "../../../commonComponents/MultiCarousel";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import { ServicesCarouselComponent } from "../../../commonComponents/MajorServicesCarousel";
import "../../screens.css";
import ApplicancesModal from "../../../commonComponents/AppliancesModal";
import { Screens } from "../../../constant/routes";
import AdminImages from "../../../constant/adminImages";
import { useNavigate } from "react-router-dom";
import AddressUpdateDropdown from "../../../commonComponents/AddressUpdateDropdown";

function HomeScreen() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (text) => {
    if (text === "See All") {
      setShowModal(true);
    } else {
      // Navigate to the next screen, modify the path according to your route
      navigate(Screens.service);
    }
  };

  const handleClose = () => setShowModal(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 5 }}>
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner
                heading-title-banner-serve">
                  How can we serve you today?
                </h4>
                <ul className="mt-2 px-0 order-listing-banner-home mb-0">
                  {homeCards.map((item, index) => {
                    return (
                      <li
                        className={item.className}
                        onClick={() => setModalShow(true)}
                      >
                        <span className={item.spanClass}>
                          <img src={item.icon} className="img-fluid" />
                        </span>
                        <p className="mt-2 listing-card-label-paragraph">
                          {item.title}
                          <br />
                          {item.title2}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 7 }}>
              <div className="user-banner-content-slide mt-2">
                <CarouselBanner />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className="text-center">
            <div className="service-home-section-same-day">
              <Row>
                {homeService.map((item, index) => {
                  return (
                    <Col lg={{ span: 4 }} xs={{ span: 4 }}>
                      <div className="services-card-listing">
                        <img
                          src={item.image}
                          className="img-fluid img-fluid-same-day-content"
                        />
                        <h6 className="services-card-parargraph">
                          {item.text}
                        </h6>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <Row>
            <Col lg={{ span: 12 }}>
              <div
                className="mt-2 user-multi-services-slides
              user-multi-services-slides-alerts"
              >
                <h4 className="user-heading-title mb-2">AMC Service Plan</h4>
                <Gallery />
              </div>
            </Col>
          </Row>
          <div className="mt-1 user-multi-services-slides">
            <Row>
              <h4 className="user-heading-title mb-2">
                Appliances Repair & Service
              </h4>
              {repairService.map((item, index) => {
                return (
                  <Col
                    lg={{ span: 2 }}
                    md={{ span: 3 }}
                    sm={{ span: 4 }}
                    xs={{ span: 4 }}
                  >
                    <div
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(item.text)}
                    >
                      <div className="user-repair-services">
                        <img src={item.image} className={item.classImage} />
                      </div>
                      <h6 className="services-card-parargraph mb-3">
                        {item.text}
                      </h6>
                    </div>
                  </Col>
                );
              })}
              <ApplicancesModal show={showModal} onHide={handleClose} />
              {/* <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>All Services</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <button onClick={handleClose}>Close</button>
                </Modal.Footer>
              </Modal> */}
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-2 user-multi-services-slides
                user-multi-services-cleaning-first"
                >
                  <h4 className="user-heading-title mb-2">
                    Deep Cleaning Services
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-1 user-multi-services-slides
                user-multi-services-slides-alerts"
                >
                  <h4 className="user-heading-title mb-2">Cleaning Package</h4>
                  <Gallery />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-0 user-multi-services-slides">
                  <h4 className="user-heading-title mb-1">Handyman Services</h4>

                  <div className="mt-1 handyman-services-container">
                    {handymanContent.map((item, index) => {
                      return (
                        <>
                          <div className="handyman-services-column">
                            <div className="user-services-bg-admin">
                            <img
                              src={item.image}
                              className="img-fluid-handyman"
                            />
                              </div>
                            <div className="text-center">
                              <p className="handyman-title text-center">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </Col>
              {/* {handymanContent.map((item, index) => {
                return (
                  <>
                    <Col
                      lg={{ span: 2 }}
                      md={{ span: 3 }}
                      sm={{ span: 6 }}
                      xs={{ span: 6 }}
                    >
                      <div className="handyman-services-column">
                        <img src={item.image} className="img-fluid-handyman" />
                        <div className="text-center">
                          <p className="handyman-title text-center">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })} */}
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-2 user-multi-services-slides
                user-multi-services-cleaning-dotted"
                >
                  <h4 className="user-heading-title mb-2">Major Services</h4>
                  <ServicesCarouselComponent />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Container>
        <section className="application-packages-section">
          <Container className="application-packages-container">
            <Row>
              <Col lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
                <div className="appliances-packages-column">
                  {appliancesContent.map((item, index) => {
                    return (
                      <>
                        <div>
                          <h3 className="heading-sub-title">{item.title}</h3>
                          <p className="packages-description">{item.text}</p>
                          <Button
                            className="btn-primary-content-light"
                            onClick={() => setModalShow(true)}
                          >
                            {/* {item.button} */}
                            <img
                              src={AdminImages.BookNow}
                              className="img-fluid"
                            />
                          </Button>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Col>
              <Col lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }} className="text-center">
                <div
                  className="user-packages-instrument text-center"
                  style={{ display: "inline-block" }}
                >
                  <img src={Images.Machines} className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="application-choose-section mt-4">
          <Container className=" application-choose-container">
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="text-center">
                  <h5 className="choose-us-title mt-1">Why Choose Us</h5>
                  <p className="choose-us-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent egestas id erat a ornare. Donec bibendum venenatis
                    mollis. Aliquam id libero at mi bibendum venenatis at ac
                    purus.
                  </p>
                </div>
              </Col>
              {chooseListing.map((item, index) => {
                return (
                  <>
                    <Col lg={{ span: 4 }}>
                      <div key={index} className="user-choose-us-listing">
                        <span className="user-choose-label">
                          <img src={item.image} className="img-fluid" />
                        </span>
                        <div className="choose-us-username">
                          <h6 className="choose-us-title-username">
                            {item.title}
                          </h6>
                          <p className="choose-us-description">{item.text}</p>
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </section>
        <section className="application-download-section mt-4">
          <Container
            className=" application-choose-container
        application-download-container"
          >
            <Row>
              <Col lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
                <div className="appliances-packages-column">
                  {applicationDownload.map((item, index) => {
                    return (
                      <>
                        <div className="">
                          <h3 className="heading-sub-title">{item.title}</h3>
                          <p className="packages-description">{item.text}</p>
                          <span className="user-application-download">
                            <img
                              src={item.store}
                              className="img-fluid-content-download"
                            />
                          </span>
                          <span className="user-application-download">
                            <img
                              src={item.scan}
                              className="img-fluid-content-download"
                            />
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Col>
              <Col lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }} className="text-center">
                <div
                  className="user-packages-instrument
                  user-packages-instrument-phonic text-center"
                >
                  <img src={Images.Phone} className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
      <section className="on-demand-service-section mt-2 ">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="on-demands-services-detail">
                <h5 className="choose-us-title">
                  On-demand Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTexts.map((item, index) => {
                  return (
                    <div key={index}>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-2">
                        {item.text.split(/(\s*\|\s*)/).map((textSegment, i) => (
                          <span key={i} className="hoverable-text">
                            {textSegment}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                })}
                <h5 className="choose-us-title">
                  AMC Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTextsTwo.map((item, index) => {
                  return (
                    <>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-2">
                        {item.text.split(/(\s*\|\s*)/).map((textSegment, i) => (
                          <span key={i} className="hoverable-text">
                            {textSegment}
                          </span>
                        ))}
                      </p>
                    </>
                  );
                })}
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
      <ApplicancesModal
        link={Screens.serviceCart}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default HomeScreen;
