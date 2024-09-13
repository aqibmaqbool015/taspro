import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import { Screens } from "../../constant/routes";
import { checkInterest } from "../../constant/dummyData";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";
function AccountBankRemoveComponent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Col lg={{ span: 8 }}>
              <section
                className="user-content-auth-section
              content-form-auth-container-account"
              >
                <Container>
                  <Row>
                    <Col lg={{ span: 12 }}>
                      <div className="user-arrow-back-dashboard">
                        <img
                          src={AdminImages.BackArrow}
                          className="img-fluid"
                          alt=""
                          onClick={() => navigate(Screens.accountHome)}
                        />
                      </div>
                      <div className="user-account-language-controller">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-1"
                        >
                          Remove Bank Account
                        </h6>
                      </div>
                    </Col>

                    <Col lg={{ span: 6 }} md={{ span: 12 }}>
                      <div className="repair-time-date-container mb-4">
                        {checkInterest.map((item, index) => {
                          return (
                            <>
                              <div className="btn-outline-success-label-box mb-4">
                                <label
                                  class="container-checks-box-btn
                                container-checks-box-btn-wallet"
                                >
                                  <input type="radio" />
                                  <span
                                    class="checkmark-content-btn-outline
                                    bank-checkmark-content-btn-outline
                                    "
                                  ></span>
                                  <div
                                    className="
                      repair-wallet-account-bank-container"
                                  >
                                    <div className="repair-wallet-account-left-bank">
                                      <h6
                                        className="choose-us-title-coupans
                                        choose-us-title-coupans-remove"
                                        style={{
                                          color: "#FF552C",
                                        }}
                                      >
                                        James William
                                      </h6>

                                      <p className="font-weight-normal mb-0">
                                        Western Union
                                      </p>
                                    </div>
                                    <div className="repair-time-date-label">
                                      <p className="font-weight-normal mb-0">
                                        ***********3311
                                      </p>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </>
                          );
                        })}

                        <div className=" mt-5 text-center">
                          <Button
                            className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                            style={{ boxShadow: "none", width: "100%" }}
                            onClick={handleShow}
                          >
                            Remove Bank
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
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
      <div className="modal-content-main-container">
        <Modal
          className="modal-content-order-service"
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="my-4 text-center">
                <h6 className="user-form-label-heading">
                  Are you sure you want to remove you bank account ending in
                  *3311?
                </h6>
                <div className="text-center mt-4">
                  <div
                    className="mt-4 flex-rounded-account"
                    style={{ justifyContent: "center" }}
                  >
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-rounded-account
                    button-primary-transparent-gradiant-linear mb-4"
                      style={{
                        margin: "10px",
                        flex: "1",
                        borderRadius: "30px",
                        maxWidth: "150px",
                        height: "43px",
                        background: "transparent !important",
                      }}
                    >
                      no
                    </Button>
                    {/* <Button
                      className=" btn-primary-fill-book-border mb-4"
                      style={{
                        margin: "10px",
                        flex: "1",
                        borderRadius: "30px",
                        maxWidth: "150px",
                        height: "43px",
                        background: "transparent !important",
                      }}
                    >
                      <span className="card-label-text-btn">no</span>
                    </Button> */}
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-rounded-account mb-4"
                      style={{
                        margin: "10px",
                        flex: "1",
                        borderRadius: "30px",
                        maxWidth: "150px",
                        height: "43px",
                      }}
                      closeButton
                      onClick={handleClose}
                    >
                      yes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default AccountBankRemoveComponent;
