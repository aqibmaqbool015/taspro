import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  Button,
  Modal,
  Nav,
  Form,
} from "react-bootstrap";
import Images from "../../constant/images";
import { CleaningCarousel } from "../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import {
  otpCode,
  repairService,
  scheduleBookingStatus,
  scheduleHomeCard,
} from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import SelectFormModal from "../../commonComponents/Models/SelectForm";
import AddressModal from "../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../commonComponents/Models/NewAddress";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";
import CancelBookingModal from "../../commonComponents/Models/CancelBookingModal";
import CancellationModal from "../../commonComponents/Models/CancellationModal";

function BookingServicesComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, setShows] = useState(false);

  const handleCloseOne = () => setShows(false);
  const handleShowOne = () => setShows(true);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelationModal, setCancelationModal] = useState(false);

  const handleCancel = () => setCancelModal(true);
  const handleCloseCancel = () => setCancelModal(false);
  const handleCancelation = () => setCancelationModal(true);
  const handleCloseCancelation = () => setCancelationModal(false);
  const handlecancelContinue = () => {
    setCancelModal(false);
    setCancelationModal(true);
  };

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleThirdModalContinue = () => {};

  const otpInputs = useRef([]);

  const [seconds, setSeconds] = useState(60);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const handleInputChange = (index, value) => {
    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [value, setValue] = useState("");

  const handleInputChanges = (e) => {
    let inputValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValue(inputValue);
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
              <div className="user-booking-services-container">
                <Tabs
                  defaultActiveKey={1}
                  animation={false}
                  id="noanim-tab-example"
                >
                  <Tab
                    className="user-main-tab-content
                    user-main-tab-content-top-bottom-border"
                    eventKey={1}
                    title={
                      <div className="btn-primary-fill-book-border-first">
                        Home Services
                      </div>
                    }
                    id="12345"
                  >
                    <div
                      className="mt-5
                    user-main-tab-content-top-rounded-second"
                    >
                      <Tabs
                        defaultActiveKey={3}
                        animation={false}
                        id="noanim-tab-example"
                      >
                        <Tab
                          eventKey={3}
                          title={
                            <div className="btn-primary-fill-book-border">
                              <span className="card-label-text-btn">
                                pending
                              </span>
                            </div>
                          }
                        >
                          <div className="repair-time-date-container">
                            <ul className="px-0 mt-4">
                              {scheduleBookingStatus.map((item, index) => {
                                return (
                                  <>
                                    <li className="repair-time-date-card">
                                      <Card
                                        className="admin-sidebar-redirect
                                      admin-sidebar-redirect-admin-tab"
                                        onClick={() =>
                                          navigate(Screens.bookPayment)
                                        }
                                      >
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
                                                src={item.image}
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
                                                {item.title}
                                              </h6>
                                              <p
                                                className="user-power-title
                            user-power-title-repair-text"
                                              >
                                                {item.text}
                                              </p>
                                              <p
                                                className="user-content-card-text
                            user-content-card-text-repair mb-3"
                                              >
                                                <span className="user-content-star-rate">
                                                  <img
                                                    src={item.star}
                                                    className="img-fluid"
                                                  />
                                                </span>
                                                {item.review}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="repair-time-date-label">
                                            <span className="pending-approve-label">
                                              <h6 className="pending-approve-label-text mb-0">
                                                {item.button}
                                              </h6>
                                            </span>
                                            <div className="text-center my-3">
                                              <span className="user-account-detial-contact">
                                                <img
                                                  src={Images.ChatBox}
                                                  className="img-fluid"
                                                  onClick={() =>
                                                    navigate(Screens.chatAdmin)
                                                  }
                                                />
                                                <img
                                                  src={Images.Calling}
                                                  className="img-fluid"
                                                  onClick={handleShowOne}
                                                />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-3 user-account-time-container">
                                          <p className="user-account-detail-timer">
                                            {item.label}
                                          </p>
                                          <h6 className="user-account-detail-timer">
                                            {item.date}
                                          </h6>
                                        </div>
                                      </Card>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </Tab>
                        <Tab
                          eventKey={4}
                          title={
                            <div className="btn-primary-fill-book-border">
                              <span className="card-label-text-btn">
                                rejected
                              </span>
                            </div>
                          }
                        >
                          <div className="repair-time-date-container">
                            <ul className="px-0 mt-4">
                              {scheduleBookingStatus.map((item, index) => {
                                return (
                                  <>
                                    <li className="repair-time-date-card">
                                      <Card
                                        className="admin-sidebar-redirect
                                      admin-sidebar-redirect-admin-tab"
                                        onClick={() =>
                                          navigate(Screens.bookPayment)
                                        }
                                      >
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
                                                src={item.image}
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
                                                {item.title}
                                              </h6>
                                              <p
                                                className="user-power-title
                            user-power-title-repair-text"
                                              >
                                                {item.text}
                                              </p>
                                              <p
                                                className="user-content-card-text
                            user-content-card-text-repair mb-3"
                                              >
                                                <span className="user-content-star-rate">
                                                  <img
                                                    src={item.star}
                                                    className="img-fluid"
                                                  />
                                                </span>
                                                {item.review}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="repair-time-date-label">
                                            <span className="bg-status-rejected pending-approve-label">
                                              rejected
                                            </span>
                                            <div className="text-center my-3">
                                              <span className="user-account-detial-contact">
                                                <img
                                                  src={Images.ChatBox}
                                                  className="img-fluid"
                                                  onClick={() =>
                                                    navigate(Screens.chatAdmin)
                                                  }
                                                />
                                                <img
                                                  src={Images.Calling}
                                                  className="img-fluid"
                                                  onClick={handleShowOne}
                                                />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-3 user-account-time-container">
                                          <p className="user-account-detail-timer">
                                            {item.label}
                                          </p>
                                          <h6 className="user-account-detail-timer">
                                            {item.date}
                                          </h6>
                                        </div>
                                      </Card>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </Tab>
                        <Tab
                          eventKey={5}
                          title={
                            <div className="btn-primary-fill-book-border">
                              <span className="card-label-text-btn">
                                completed
                              </span>
                            </div>
                          }
                        >
                          <div className="repair-time-date-container">
                            <ul className="px-0 mt-4">
                              {scheduleBookingStatus.map((item, index) => {
                                return (
                                  <>
                                    <li className="repair-time-date-card">
                                      <Card
                                        className="admin-sidebar-redirect
                                      admin-sidebar-redirect-admin-tab"
                                        // onClick={() =>
                                        //   navigate(Screens.bookPayment)
                                        // }
                                      >
                                        <div
                                          className="split-ac-flex-container
                      repair-ac-flex-container"
                                          onClick={() =>
                                            navigate(Screens.bookPayment)
                                          }
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
                                                src={item.image}
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
                                                {item.title}
                                              </h6>
                                              <p
                                                className="user-power-title
                            user-power-title-repair-text"
                                              >
                                                {item.text}
                                              </p>
                                              <p
                                                className="user-content-card-text
                            user-content-card-text-repair mb-3"
                                              >
                                                <span className="user-content-star-rate">
                                                  <img
                                                    src={item.star}
                                                    className="img-fluid"
                                                  />
                                                </span>
                                                {item.review}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="repair-time-date-label">
                                            <span className="bg-status-completed pending-approve-label">
                                              completed
                                            </span>
                                            <div className="text-center my-3">
                                              <span className="user-account-detial-contact">
                                                <img
                                                  src={Images.ChatBox}
                                                  className="img-fluid"
                                                  onClick={() =>
                                                    navigate(Screens.chatAdmin)
                                                  }
                                                />
                                                <img
                                                  src={Images.Calling}
                                                  className="img-fluid"
                                                  onClick={handleShowOne}
                                                />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-3 user-account-time-container">
                                          <p className="user-account-detail-timer">
                                            {item.label}
                                          </p>
                                          <h6 className="user-account-detail-timer">
                                            {item.date}
                                          </h6>
                                        </div>
                                        <div className="mt-3 user-account-time-container">
                                          <p className="user-account-detail-timer">
                                            Warranty
                                          </p>

                                          <span
                                            className="pending-approve-label"
                                            style={{ width: "190px" }}
                                          >
                                            <h6 className="pending-approve-label-text mb-0">
                                              30 Days Remaining
                                            </h6>
                                          </span>
                                        </div>
                                        <div className="text-center mt-4">
                                          <Button
                                            className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-response"
                                            onClick={setCancelModal}
                                          >
                                            Create Rework
                                          </Button>
                                        </div>
                                      </Card>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </Tab>
                  <Tab
                    className="user-main-tab-content
                    user-main-tab-content-top-bottom-border"
                    eventKey={2}
                    title={
                      <div className="btn-primary-fill-book-border-first">
                        AMC & Package
                      </div>
                    }
                    id="123456"
                  >
                    <div
                      className="user-main-tab-content
                    user-main-tab-content-top-bottom-border
                     user-main-tab-content-top-rounded-second mt-5"
                    >
                      <Tabs
                        defaultActiveKey={7}
                        animation={false}
                        id="noanim-tab-examples"
                      >
                        <Tab
                          eventKey={7}
                          title={
                            <div className="btn-primary-fill-book-border">
                              <span className="card-label-text-btn">
                                pending
                              </span>
                            </div>
                          }
                          id="12345"
                        >
                          <div className="repair-time-date-container mt-4">
                            <ul className="px-0">
                              {scheduleBookingStatus.map((item, index) => {
                                return (
                                  <>
                                    <li className="repair-time-date-card">
                                      <Card
                                        className="admin-sidebar-redirect
                                admin-sidebar-redirect-admin-tab"
                                      >
                                        <div
                                          className="split-ac-flex-container
                      repair-ac-flex-container"
                                          style={{ borderBottom: "none" }}
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
                                                src={Images.UserCustomer}
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
                                                {item.title}
                                              </h6>
                                              <p
                                                className="user-power-title
                            user-power-title-repair-text"
                                              >
                                                {item.text}
                                              </p>
                                              <p
                                                className="user-content-card-text
                                        user-content-card-text-title mb-2"
                                              >
                                                Type: Corporate
                                              </p>
                                              <p className="user-off-percent mb-2">
                                                1 Month Plan
                                              </p>
                                            </div>
                                          </div>
                                          <div className="repair-time-date-label">
                                            <span className="pending-approve-label bg-status-completed">
                                              Running
                                            </span>
                                            <div className="text-center my-3 mt-4">
                                              <p className="user-pay-check-amount">
                                                ₹200
                                                <span className="gray-font-normal">
                                                  <s>₹320</s>
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" user-account-time-container">
                                          <h6 className="user-account-detail-timer">
                                            Upcoming Schedule:
                                          </h6>
                                          <h6 className="user-account-detail-timer color-red-theme">
                                            <span className="label-view-calendar">
                                              <img
                                                src={Images.CalendarFill}
                                                className="img-fluid"
                                              />
                                            </span>
                                            Tue, 12-March-2024
                                          </h6>
                                        </div>
                                        <div
                                          className=" user-account-time-container
                                  user-account-time-container-view mt-4"
                                        >
                                          {/* <Button
                                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent-gradiant-linear"
                                      style={{
                                        boxShadow: "none",
                                        margin: "5px",
                                        borderRadius: "10px",
                                        padding: "0px",
                                      }}
                                      onClick={setShowFirstModal}
                                    >
                                      Re-Schedule
                                    </Button> */}
                                          <Button
                                            className=" btn-primary-fill-book-border"
                                            style={{
                                              boxShadow: "none",
                                              margin: "5px",
                                              borderRadius: "10px",
                                              padding: "0px",
                                              height: "41px",
                                            }}
                                            onClick={setShowFirstModal}
                                          >
                                            <span className="card-label-text-btn">
                                              Re-Schedule
                                            </span>
                                          </Button>
                                          <Button
                                            className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                                            style={{
                                              boxShadow: "none",
                                              margin: "5px",
                                              borderRadius: "10px",
                                              padding: "0px",
                                              fontWeight: "500",
                                            }}
                                            onClick={() =>
                                              navigate(Screens.bookingAmcDetail)
                                            }
                                          >
                                            Raise Complaint
                                          </Button>
                                        </div>
                                      </Card>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </Tab>
                        <Tab
                          eventKey={8}
                          title={
                            <div className="btn-primary-fill-book-border">
                              <span className="card-label-text-btn">
                                rejected
                              </span>
                            </div>
                          }
                          id="12345"
                        >
                          <div className="repair-time-date-container mt-4">
                            <ul className="px-0">
                              {scheduleBookingStatus.map((item, index) => {
                                return (
                                  <>
                                    <li className="repair-time-date-card">
                                      <Card
                                        className="admin-sidebar-redirect
                                admin-sidebar-redirect-admin-tab"
                                      >
                                        <div
                                          className="split-ac-flex-container
                      repair-ac-flex-container"
                                          style={{ borderBottom: "none" }}
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
                                                src={Images.UserCustomer}
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
                                                {item.title}
                                              </h6>
                                              <p
                                                className="user-power-title
                            user-power-title-repair-text"
                                              >
                                                {item.text}
                                              </p>
                                              <p
                                                className="user-content-card-text
                                        user-content-card-text-title mb-2"
                                              >
                                                Type: Corporate
                                              </p>
                                              <p className="user-off-percent mb-2">
                                                1 Month Plan
                                              </p>
                                            </div>
                                          </div>
                                          <div className="repair-time-date-label">
                                            <span className="pending-approve-label bg-status-completed">
                                              Running
                                            </span>
                                            <div className="text-center my-3 mt-4">
                                              <p className="user-pay-check-amount">
                                                ₹200
                                                <span className="gray-font-normal">
                                                  <s>₹320</s>
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" user-account-time-container">
                                          <h6 className="user-account-detail-timer">
                                            Upcoming Schedule:
                                          </h6>
                                          <h6 className="user-account-detail-timer color-red-theme">
                                            <span className="label-view-calendar">
                                              <img
                                                src={Images.CalendarFill}
                                                className="img-fluid"
                                              />
                                            </span>
                                            Tue, 12-March-2024
                                          </h6>
                                        </div>
                                        <div
                                          className=" user-account-time-container
                                  user-account-time-container-view mt-4"
                                        >
                                          {/* <Button
                                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent-gradiant-linear"
                                      style={{
                                        boxShadow: "none",
                                        margin: "5px",
                                        borderRadius: "10px",
                                        padding: "0px",
                                      }}
                                      onClick={setShowFirstModal}
                                    >
                                      Re-Schedule
                                    </Button> */}
                                          <Button
                                            className=" btn-primary-fill-book-border"
                                            style={{
                                              boxShadow: "none",
                                              margin: "5px",
                                              borderRadius: "10px",
                                              padding: "0px",
                                              height: "41px",
                                            }}
                                            onClick={setShowFirstModal}
                                          >
                                            <span className="card-label-text-btn">
                                              Re-Schedule
                                            </span>
                                          </Button>
                                          <Button
                                            className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                                            style={{
                                              boxShadow: "none",
                                              margin: "5px",
                                              borderRadius: "10px",
                                              padding: "0px",
                                              fontWeight: "500",
                                            }}
                                            onClick={() =>
                                              navigate(Screens.bookingAmcDetail)
                                            }
                                          >
                                            Raise Complaint
                                          </Button>
                                        </div>
                                      </Card>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </Tab>
                        <Tab
                          eventKey={9}
                          title={
                            <div className="btn-primary-fill-book-border">
                              <span className="card-label-text-btn">
                                completed
                              </span>
                            </div>
                          }
                          id="12345"
                        >
                          <div className="repair-time-date-container mt-4">
                            <ul className="px-0">
                              {scheduleBookingStatus.map((item, index) => {
                                return (
                                  <>
                                    <li className="repair-time-date-card">
                                      <Card
                                        className="admin-sidebar-redirect
                                admin-sidebar-redirect-admin-tab"
                                      >
                                        <div
                                          className="split-ac-flex-container
                      repair-ac-flex-container"
                                          style={{ borderBottom: "none" }}
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
                                                src={Images.UserCustomer}
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
                                                {item.title}
                                              </h6>
                                              <p
                                                className="user-power-title
                            user-power-title-repair-text"
                                              >
                                                {item.text}
                                              </p>
                                              <p
                                                className="user-content-card-text
                                        user-content-card-text-title mb-2"
                                              >
                                                Type: Corporate
                                              </p>
                                              <p className="user-off-percent mb-2">
                                                1 Month Plan
                                              </p>
                                            </div>
                                          </div>
                                          <div className="repair-time-date-label">
                                            <span className="pending-approve-label bg-status-completed">
                                              Running
                                            </span>
                                            <div className="text-center my-3 mt-4">
                                              <p className="user-pay-check-amount">
                                                ₹200
                                                <span className="gray-font-normal">
                                                  <s>₹320</s>
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" user-account-time-container">
                                          <h6 className="user-account-detail-timer">
                                            Upcoming Schedule:
                                          </h6>
                                          <h6 className="user-account-detail-timer color-red-theme">
                                            <span className="label-view-calendar">
                                              <img
                                                src={Images.CalendarFill}
                                                className="img-fluid"
                                              />
                                            </span>
                                            Tue, 12-March-2024
                                          </h6>
                                        </div>
                                        <div
                                          className=" user-account-time-container
                                  user-account-time-container-view mt-4"
                                        >
                                          {/* <Button
                                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent-gradiant-linear"
                                      style={{
                                        boxShadow: "none",
                                        margin: "5px",
                                        borderRadius: "10px",
                                        padding: "0px",
                                      }}
                                      onClick={setShowFirstModal}
                                    >
                                      Re-Schedule
                                    </Button> */}
                                          <Button
                                            className=" btn-primary-fill-book-border"
                                            style={{
                                              boxShadow: "none",
                                              margin: "5px",
                                              borderRadius: "10px",
                                              padding: "0px",
                                              height: "41px",
                                            }}
                                            onClick={setShowFirstModal}
                                          >
                                            <span className="card-label-text-btn">
                                              Re-Schedule
                                            </span>
                                          </Button>
                                          <Button
                                            className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                                            style={{
                                              boxShadow: "none",
                                              margin: "5px",
                                              borderRadius: "10px",
                                              padding: "0px",
                                              fontWeight: "500",
                                            }}
                                            onClick={() =>
                                              navigate(Screens.bookingAmcDetail)
                                            }
                                          >
                                            Raise Complaint
                                          </Button>
                                        </div>
                                      </Card>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </Tab>
                </Tabs>
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
      <Modal
        className="modal-content-order-service"
        show={shows}
        onHide={handleCloseOne}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body px-4">
            <div className="my-4 text-center">
              <h4
                className=" color-theme-dark-font
                  font-weight-600 my-4"
              >
                Please Call the Below Number
              </h4>
              <h6 className="user-check-contact-number">+1 555 6337275</h6>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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
        onContinue={handleThirdModalContinue}
      />
      <CancelBookingModal
        title="Create Rework"
        option="Rework Reason"
        submit="Send OTP"
        show={cancelModal}
        onHide={() => setCancelModal(false)}
        onContinue={handlecancelContinue}
      />

      <div className="modal-content-main-container">
        <Modal
          className="modal-content-order-service"
          show={cancelationModal}
          onHide={() => setCancelationModal(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="text-center mt-2">
                <h4 className="services-modal-title-main color-theme-dark-font">
                  OTP Verification!
                </h4>
                <p className="services-modal-description mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <Form className="mt-3 mb-3">
                <ul className="px-0 text-center mb-0">
                  {otpCode.map((item, index) => {
                    return (
                      <li className="user-form-otp-code" key={index}>
                        <Form.Group
                          className="mb-2"
                          controlId={`formBasicEmail${index}`}
                        >
                          <Form.Control
                            ref={(ref) => (otpInputs.current[index] = ref)}
                            type="number"
                            placeholder={item.place}
                            className="form-control-text-input form-control-text-input-outline form-control-text-input-otp-content"
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                          />
                        </Form.Group>
                      </li>
                    );
                  })}
                </ul>
                <div className=" text-center">
                  <h6 className="user-form-theme-timer">
                    {/* 00:54 */}
                    {formatTime(seconds)}
                  </h6>
                  <p className="user-form-paragraph-timer mt-3">Send again</p>
                </div>
                <div className="text-center mt-3" onClick={handleClicks}>
                  <Button
                    className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-modal"
                    onClick={() => navigate(Screens.orderConfirm)}
                  >
                    verify
                  </Button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default BookingServicesComponent;
