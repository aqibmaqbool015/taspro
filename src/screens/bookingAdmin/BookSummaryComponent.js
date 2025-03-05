import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
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
import { Screens } from "../../constant/routes";
import MapComponent from "../../commonComponents/MapComponent";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import EditModal from "../../commonComponents/Models/EditModal";
import AdminImages from "../../constant/adminImages";
import CancelBookingModal from "../../commonComponents/Models/CancelBookingModal";
import CancellationModal from "../../commonComponents/Models/CancellationModal";

function BookSummaryComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
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
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [showModal, setShowModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelationModal, setCancelationModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91 7247799900");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleCancel = () => setCancelModal(true);
  const handleCloseCancel = () => setCancelModal(false);
  const handleCancelation = () => setCancelationModal(true);
  const handleCloseCancelation = () => setCancelationModal(false);
  const handlecancelContinue = () => {
    setCancelModal(false);
    setCancelationModal(true);
  };
  const [shows, setShows] = useState(false);

  const handleCloseOne = () => setShows(false);
  const handleShowOne = () => setShows(true);

  const handleSave = (newNumber) => {
    setPhoneNumber(newNumber);
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
              <Row>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="user-arrow-back-dashboard">
                    <img
                      src={AdminImages.BackArrow}
                      className="img-fluid"
                      alt=""
                      onClick={() => navigate(Screens.bookingServiceDetail)}
                    />
                  </div>
                  <div className="repair-time-date-container">
                    <ul className="px-0">
                      <li
                        className="repair-time-date-card
                      repair-time-date-card-detail"
                      >
                        <Card className="admin-sidebar-redirect">
                          <div
                            className="user-coupan-apply-section
                      repair-ac-flex-container"
                            style={{
                              border: "none",
                              paddingBottom: "0px",
                              alignItems: "flex-start",
                            }}
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
                                  src={Images.Summary1}
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
                                  className="user-content-card-text
                            user-content-card-text-repair mb-1"
                                >
                                  Less / No Cooling
                                </p>
                                <h6 className="user-account-detail-summary">
                                  ₹299.00
                                </h6>
                              </div>
                            </div>
                            <div className="repair-time-date-label">
                              <div className="text-center">
                                <span className="user-account-detial-contact">
                                  <img
                                    src={Images.ChatBox}
                                    className="img-fluid"
                                    onClick={() => navigate(Screens.chatAdmin)}
                                  />
                                  <img
                                    src={Images.Calling}
                                    className="img-fluid"
                                    onClick={setShows}
                                  />
                                </span>
                              </div>
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
                                      <h6 className="user-check-contact-number">
                                        +1 555 6337275
                                      </h6>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          </div>
                        </Card>
                      </li>
                    </ul>
                    <div className="mx-3">
                      <Card
                        className="admin-sidebar-redirect
                      mt-5 "
                      >
                        <div
                          className="user-coupan-apply-section
                      repair-ac-flex-container
                      repair-ac-flex-container-percent
                      "
                          style={{ cursor: "pointer", alignItems: "center" }}
                          onClick={()=> navigate(Screens.accountCoupans)}
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
                      <div
                        className="customer-detail-content
                    repair-time-date-card mx-0"
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
                            mb-4 mt-2"
                          >
                            Tikesh Dewangan
                          </h6>
                          <span
                            className="user-detail-customer-edit"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={Images.EditDot}
                              className="img-fluid"
                              onClick={setShowSecondModal}
                            />
                          </span>
                        </div>
                        <h6 className="user-content-title-light">
                          Office No. 201m Atlantis Corporate Park, Ring Road No.
                          1 Telibandha, Raipur
                        </h6>
                        <h6 className="user-content-title-light">
                          C.N. : +91 72747799900
                        </h6>
                      </div>
                      <Form>
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-4"
                        >
                          Apply Coupon
                        </h6>
                        <div className="user-coupan-apply-section">
                          <Form.Group
                            controlId="messageInput"
                            className="form-group-content-menu-control"
                          >
                            <Form.Control
                              type="text"
                              className="form-control-input-apply"
                              placeholder="ABCD765EF"
                            />
                          </Form.Group>
                          <Button
                            className="btn-primary-theme-apply"
                            onClick={()=>navigate(Screens.accountCoupans)}
                          >
                            apply
                          </Button>
                        </div>
                      </Form>
                      <div className=" my-4">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-5"
                        >
                          Service Provider
                        </h6>
                        <div className="user-coupan-apply-section">
                          <div className="user-chat-profile-view">
                            <span
                              className="
                          repair-ac-label-service-summary"
                            >
                              <img
                                src={Images.Summary2}
                                className="img-fluid"
                              />
                            </span>
                            <div
                              className="split-ac-username
                                repair-ac-username"
                            >
                              <h6
                                className="choose-us-title-coupans
                            mb-0"
                              >
                                Tom Latham
                              </h6>
                            </div>
                          </div>
                          <div className="text-center">
                            <span className="user-account-detial-contact">
                              <img
                                src={Images.ChatBox}
                                className="img-fluid"
                                onClick={() => navigate(Screens.chatAdmin)}
                              />
                              <img
                                src={Images.Calling}
                                className="img-fluid"
                                onClick={setShows}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <p
                        className="user-content-card-text-repair
                      mb-2"
                      >
                        <span className="user-account-detial-contact">
                          <img src={Images.Location} className="img-fluid" />
                        </span>
                        Time squre NYC, Manhattan
                      </p>
                      <div className="">
                        <MapComponent />
                      </div>
                      <div className="user-coupan-apply-section my-4">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                           "
                        >
                          Advance Payment Summary
                        </h6>
                        <span className="user-account-detial-contact">
                          <img
                            src={Images.Summary3}
                            className="img-fluid user-account-detial-download"
                          />
                        </span>
                      </div>
                      <div
                        className="admin-sidebar-redirect
                      admin-sidebar-redirect-table-desk"
                      >
                        <div className="mt-2">
                          <h4
                            className=" color-theme-dark-font
                  font-weight-600 mb-3"
                          >
                            Split AC (1.5 Ton *2)
                          </h4>
                          <div
                            // style={{
                            //   border: "1px solid #E1E1E1",
                            //   borderRadius: "10px",
                            // }}
                          >
                            <Table responsive bordered style={{borderRadius: "12px"}}>
                              <thead>
                                <tr>
                                  <th>Data</th>
                                  <th>Mode</th>
                                  <th>Amount</th>
                                  <th>Summary</th>
                                  <th>Download</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>14 Aug</td>
                                  <td>Voltas</td>
                                  <td>200</td>
                                  <td>Detail</td>
                                  <td className="text-center">
                                    <span className="">
                                      <img
                                        src={Images.PdfIcon}
                                        className="img-fluid"
                                      />
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        {/* {itemCollection.map((item, index) => {
                          return (
                            <>
                              <div
                                className="mt-2 user-account-time-container
                    border-bottom-container"
                              >
                                <p className="user-account-detail-timer">
                                  {item.label}
                                </p>
                                <h6 className="user-account-detail-timer">
                                  {item.amount}
                                </h6>
                              </div>
                            </>
                          );
                        })} */}
                      </div>

                      <Card
                        className="admin-sidebar-redirect
                      mt-5 "
                      >
                        <div
                          className="user-coupan-apply-section
                      repair-ac-flex-container
                      repair-ac-flex-container-percent
                      "
                          onClick={() => navigate(Screens.contactUs)}
                        >
                          <div
                            className="split-ac-flex-left
                              repair-ac-flex-left"
                          >
                            <img
                              src={Images.Summary4}
                              className="img-fluid
                                user-account-detial-download
                                mr-3"
                            />
                            <h6
                              className=" user-power-title
                            user-power-title-repair
                            mb-0"
                            >
                              Help Center
                            </h6>
                          </div>
                          <div className="repair-time-date-label">
                            <img
                              src={Images.ArrowAlert}
                              className="img-fluid mx-3 mr-0
                              "
                            />
                          </div>
                        </div>
                      </Card>

                      <div id="work-status" className="timeline-vertical-detail-container mt-4 mb-2">
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
                                    <img
                                      src={item.tick}
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div class={item.class}>
                                    <p className={item.paragraph}>
                                      {item.text}
                                    </p>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        </ul>
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
                  <div className=" mt-4 text-center" onClick={handleClicks}>
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent mb-4
                    btn-primary-fill-book-rounded-response"
                      onClick={() => navigate(Screens.bookPaymentDetail)}
                    >
                      Reschedule
                    </Button>
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-response"
                      onClick={setCancelModal}
                    >
                      Cancel Booking
                    </Button>
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
      <CancelBookingModal
        title="Cancel Booking"
        option="Cancellation Reason"
        submit="Cancel Booking"
        show={cancelModal}
        onHide={() => setCancelModal(false)}
        onContinue={handlecancelContinue}
      />
      <CancellationModal
        show={cancelationModal}
        onHide={() => setCancelationModal(false)}
        title="Booking Canceled"
        description="Your Booking has been cancelled "
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

export default BookSummaryComponent;
