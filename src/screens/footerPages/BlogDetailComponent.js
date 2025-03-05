import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import {
  aboutGraph,
  careersForm,
  newBankForm,
  openPositionsCard,
  privacyTextArray,
  setUsApart,
  userAccountList,
} from "../../constant/accountDummyData";
import { Screens } from "../../constant/routes";
import AdminImages from "../../constant/adminImages";
import { scheduleBookingStatus } from "../../constant/dummyData";
import Images from "../../constant/images";
import { CareerSlide } from "../../commonComponents/CareerSlide";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function BlogDetailComponent() {
  const navigate = useNavigate();
  return (
    <>
      <section className="blog-home-banner-section"></section>
      <section className="mt-2"
      >
        <Container>
          <Row>
            <Col lg={{ span: 8 }} md={{ Span: 8 }} sm={{ span: 12 }}>
              <div className="blog-home-detail-section">
                <h5 className="user-account-refer-coin
                user-account-refer-coin-blog-detail text-uppercase">Learn</h5>
                <h3 className="blog-home-detail-heading mb-0">
                  Remote Collaboration: best Practices, Challenges, and tools
                </h3>
                <ul className="px-0 mb-1 mt-1">
                  <li className="blog-home-detail-listing">
                    <span className="blog-home-detail-span">
                      <img src={AdminImages.Pencil} className="img-fluid" />
                    </span>{" "}
                    By admin
                  </li>
                  <li className="blog-home-detail-listing">
                    <span className="blog-home-detail-span">
                      <img src={Images.CalendarFill} className="img-fluid" />
                    </span>{" "}
                    27 OCT, 2024
                  </li>
                </ul>
                <h6 className="user-form-paragraph-timer-font ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form variations of passages of Lorem Ipsum available There are
                  many variations of passages of Lorem Ipsum available...
                </h6>
                <div className="mt-2">
                  <img
                    src={AdminImages.BlogDetail}
                    className="img-fluid
                  img-fluid-content-blog-detail"
                  />
                </div>
                <ul className="px-0 mt-2 mb-0 user-content-align-debit">
                  {privacyTextArray.map((item, index) => {
                    return (
                      <>
                        <h6 className="user-form-paragraph-timer-font">
                          {item}
                        </h6>
                      </>
                    );
                  })}
                </ul>
                <ul className="my-1 px-0">
                  {userAccountList.map((item, index) => {
                    return (
                      <>
                        <li className="listing-card-label-content-user">
                          <span className="listing-card-label-user">
                            <img src={item.image} className="img-fluid" />
                          </span>
                          {item.text}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 4 }} md={{ Span: 4 }} sm={{ span: 12 }}>
              <div className="mt-3">
                <h4 className="heading-title-banner mb-2">Categories</h4>
                <p
                  className="heading-text-repair-area
              heading-text-repair-career
              text-left"
                >
                  Education
                  <br />
                  Information
                  <br />
                  interview
                  <br />
                  Learn
                  <br />
                  Skill
                  <br />
                  Speaking
                </p>
              </div>
              <div className="mt-4">
                <img src={AdminImages.BlogsCard1} className="img-fluid" />
              </div>
              <div className="mt-4">
                <img src={AdminImages.BlogsCard2} className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="mt-3">
                <h4 className="heading-title-banner mb-0 mt-0">Related Blogs</h4>
                <p
                  className="heading-text-repair-area
              heading-text-repair-career"
                >
                  There are many variations of passages of Lorem Ipsum
                </p>
                <div
                  className="user-multi-services-slides 
              user-multi-services-split user-multi-services-customer
              text-left
              user-multi-services-slides-career"
                >
                  <CareerSlide />
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

export default BlogDetailComponent;
