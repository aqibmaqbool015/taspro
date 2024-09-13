import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  Modal,
  Table,
  Form,
} from "react-bootstrap";
import Images from "../../constant/images";
import { CleaningCarousel } from "../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import {
  amcBoxAccordion,
  amcDetailDrop,
  amcScheduleRow,
  couponsContent,
  scheduleHomeCard,
} from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";

function ChatAdminComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, setShows] = useState(false);

  const handleCloseOne = () => setShows(false);
  const handleShowOne = () => setShows(true);
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
                    onClick={() => navigate(Screens.bookingService)}
                  >
                    Booking
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
                  onClick={() => navigate(Screens.accountHome)}
                />
              </div>
              <section className="admin-sidebar-redirect view-display-vertical mb-3">
                <div className="user-chat-heading-profile">
                  <div
                    className="split-ac-flex-container 
                    user-view-content-chatting"
                    style={{ borderBottom: "none" }}
                  >
                    <div
                      className="user-chat-profile-view
                   "
                    >
                      <span
                        className="
                          repair-ac-label-service-chat"
                      >
                        <img src={Images.Chat1} className="img-fluid" />
                      </span>
                      <div
                        className="split-ac-username
                                repair-ac-username"
                      >
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-0"
                        >
                          Aadam Gabriel
                        </h6>
                      </div>
                    </div>
                    <div className="repair-time-date-label">
                      <span className="">
                        <img src={Images.Chat2} className="img-fluid" />
                      </span>
                    </div>
                  </div>
                </div>
                <Row>
                  <Col>
                    <div className="chat-messages">
                      <div className="chat-message chat-receiver">
                        <img src={Images.Chat5} className="img-fluid mb-2" />
                        <br />
                        On my way
                      </div>
                      <div className="chat-message chat-sender">Hello!</div>

                      <div className="chat-message chat-receiver">
                        Hi there!
                      </div>
                      <div className="chat-message chat-sender">
                        How can I help you?
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {/* Chat input form */}
                    <Form>
                      <div className="user-chat-heading-profile-bottom">
                        <div
                          className="split-ac-flex-container 
                    user-view-content-chatting"
                          style={{ borderBottom: "none" }}
                        >
                          <div
                            className="user-chat-profile-view
                             user-chat-profile-view-input-type
                          "
                          >
                            <span
                              className="
                          repair-ac-label-service-chat-bottom"
                            >
                              <img src={Images.Chat3} className="img-fluid" />
                            </span>
                            <div
                              className="split-ac-username
                                repair-ac-username
                                split-ac-username-type-chat"
                            >
                              <Form.Group controlId="messageInput">
                                <Form.Control
                                  type="text"
                                  className="form-control-input-detail-chat"
                                  placeholder="Thanks"
                                />
                              </Form.Group>
                            </div>
                          </div>
                          <Button
                            className="btn-primary-theme-send"
                            type="submit"
                            onClick={() => navigate(Screens.bookPayment)}
                          >
                            <img
                              src={Images.Chat4}
                              className="img-fluid"
                              onClick={handleClicks}
                            />
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </section>
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

export default ChatAdminComponent;
