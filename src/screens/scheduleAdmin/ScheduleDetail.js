import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Images from "../../constant/images";
import { CleaningCarousel } from "../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import {
  amountSummary,
  itemCollection,
  scheduleHomeCard,
  timelineDetail,
} from "../../constant/dummyData";
import SelectFormModal from "../../commonComponents/Models/SelectForm";
import AddressModal from "../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../commonComponents/Models/NewAddress";
import EditModal from "../../commonComponents/Models/EditModal";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";

function ScheduleDetailComponent({ scheduleHomeCards }) {
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91 7247799900");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleSave = (newNumber) => {
    setPhoneNumber(newNumber);
  };
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleThirdModalContinue = () => {};
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
                  onClick={() => navigate(Screens.myScheduleCard)}
                />
              </div>
              <Row>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="repair-time-date-container">
                    <ul className="px-0">
                      <li
                        className="repair-time-date-card
                      repair-time-date-card-detail"
                      >
                        <Card className="admin-sidebar-redirect">
                          <div
                            className="split-ac-flex-container
                      repair-ac-flex-container"
                          >
                            <div
                              className="split-ac-flex-left
                              repair-ac-flex-left"
                            >
                              <span
                                className="
                          repair-ac-label-service"
                              >
                                <img
                                  src={Images.UserSchedule}
                                  className="img-fluid"
                                />
                              </span>
                              <div
                                className="split-ac-username
                                repair-ac-username"
                              >
                                <h6
                                  className="user-power-title
                            user-power-title-repair"
                                >
                                  AC Repair
                                </h6>
                                <p
                                  className="user-power-title
                            user-power-title-repair-text"
                                >
                                  Repair & Gas Refil
                                </p>
                                <p
                                  className="user-content-card-text
                            user-content-card-text-repair mb-3"
                                >
                                  <span className="user-content-star-rate">
                                    <img
                                      src={Images.Star}
                                      className="img-fluid"
                                    />
                                  </span>
                                  4.8 | 3,287 reviews
                                </p>
                              </div>
                            </div>
                            <div className="repair-time-date-label">
                              <span className="pending-approve-label">
                                <h6 className="pending-approve-label-text mb-0">
                                  pending
                                </h6>
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 user-account-time-container">
                            <p className="user-account-detail-timer">
                              Date & Time
                            </p>
                            <h6 className="user-account-detail-timer">
                              14/06/2023 | 10:00 am
                            </h6>
                          </div>
                        </Card>
                      </li>
                    </ul>
                    <div
                      className="customer-detail-content
                    repair-time-date-card"
                    >
                      <h6
                        className="user-power-title
                            user-power-title-repair
                            mb-2 mt-5"
                      >
                        Customer Details
                      </h6>
                      <div
                        className="mt-3 user-account-time-container
                   "
                      >
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-2"
                        >
                          Tikesh Dewangan
                        </h6>
                        <span
                          className="user-detail-customer-edit"
                          onClick={setShowSecondModal}
                          style={{ cursor: "pointer" }}
                        >
                          <img src={Images.EditDot} className="img-fluid" />
                        </span>
                      </div>
                      <h6 className="user-content-title-light">
                        Office No. 201m Atlantis Corporate Park, Ring Road No. 1
                        Telibandha, Raipur
                      </h6>
                      <h6 className="user-content-title-light">
                        C.N. : +91 72747799900
                      </h6>
                      <Card
                        className="admin-sidebar-redirect
                      mt-5"
                        onClick={handleClicks}
                      >
                        <div
                          className="split-ac-flex-container
                      repair-ac-flex-container
                      repair-ac-flex-container-percent
                      "
                          style={{ cursor: "pointer", alignItems: "center" }}
                          onClick={() => navigate(Screens.cartPage)}
                        >
                          <div
                            className="split-ac-flex-left
                              repair-ac-flex-left"
                          >
                            <span
                              className="
                          repair-ac-label-service
                          repair-ac-label-service-percent"
                            >
                              <img
                                src={Images.PercentCircle}
                                className="img-fluid"
                              />
                            </span>
                            <div
                              className="split-ac-username
                                repair-ac-username"
                            >
                              <h6
                                className="user-power-title
                            user-power-title-repair"
                              >
                                Coupons & Offers
                                {/* addsfewfwe */}
                              </h6>
                            </div>
                          </div>
                          <div className="repair-time-date-label">
                            <span
                              className="pending-approve-label
                              pending-approve-label-offers"
                              style={{
                                backgroundColor: "transparent",
                                display: "inline-block",
                                width: "100%",
                              }}
                            >
                              3 Offers
                              <img
                                src={Images.ArrowAlert}
                                className="img-fluid mx-3 mr-0"
                              />
                            </span>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="timeline-vertical-detail-container mt-4 mb-2">
                      <h6
                        className="user-power-title
                            user-power-title-repair
                            mb-2 mt-5"
                      >
                        Work Status
                      </h6>
                      <ul class="timeline">
                        {timelineDetail.map((item, index) => {
                          return (
                            <>
                              <li class="timeline-inverted mb-4" key={index}>
                                <div class={item.badge}>
                                  <img src={item.tick} className="img-fluid" />
                                </div>
                                <div class={item.class}>
                                  <p className={item.paragraph}>{item.text}</p>
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                      <div className="text-center mt-3 mb-3">
                        <Button
                          className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                          onClick={() => setShowFirstModal(true)}
                        >
                          reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div
                    className="user-experience-card-main-content
                  admin-sidebar-redirect"
                  >
                    <h6
                      className="user-power-title
                            user-power-title-repair
                            mb-3"
                    >
                      Payment Summary
                    </h6>
                    <div className="">
                      {amountSummary.map((item, index) => {
                        return (
                          <>
                            <div className={item.classMain}>
                              <p className={item.class}>{item.title}</p>
                              <h6 className={item.class2}>{item.value}</h6>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
          <AddressUpdateDropdown />
        </Container>
      </section>
      <SelectFormModal
        show={showFirstModal}
        onHide={() => setShowFirstModal(false)}
        onContinue={handleFirstModalContinue}
      />
      <AddressModal
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        onContinue={handleSecondModalContinue}
      />
      <NewAddressModal
        show={showThirdModal}
        onHide={() => setShowThirdModal(false)}
        onContinue={() => navigate(Screens.bookingService)}
      />
      <EditModal
        show={showModal}
        handleClose={handleClose}
        phoneNumber={phoneNumber}
        handleSave={handleSave}
      />
    </>
  );
}

export default ScheduleDetailComponent;
