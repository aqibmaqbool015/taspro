import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import { Screens } from "../../constant/routes";
import { checkInterest } from "../../constant/dummyData";
import AdminImages from "../../constant/adminImages";
import { bankCouponsList } from "../../constant/accountDummyData";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function AccountCouponsComponent() {
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
            <Col lg={{ span: 9 }}>
              <section
                className="user-content-auth-section
              timeline-vertical-detail-container
              timeline-vertical-detail-container-coupons-content"
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
                          My Coupon
                        </h6>
                      </div>
                    </Col>
                    {bankCouponsList.map((item, index) => {
                      return (
                        <>
                          <Col
                            lg={{ span: 6 }}
                            md={{ span: 6 }}
                            sm={{ span: 12 }}
                          >
                            <div className="user-account-coupons-bank mb-4">
                              <img
                                src={item.image}
                                className="img-fluid-coupons-bank"
                              />
                              <div className="user-account-bank-percent">
                                <div className="mx-2">
                                  <h6 className="heading-title-banner-faq">
                                    {item.title}
                                  </h6>
                                  <p className="font-weight-normal mb-0">
                                    {item.date}
                                  </p>
                                  <p className="font-weight-normal mb-0">
                                    {item.text}
                                  </p>
                                  <span className="user-badge-verified-confirmed">
                                    <img
                                      src={AdminImages.BadgeVerified}
                                      className="img-fluid"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </>
                      );
                    })}
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
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="my-4 text-center">
                <h6 className="user-form-label-heading">
                  Are you sure you want to remove you bank account ending in
                  *3311?
                </h6>
                <div className="text-center mt-3">
                  <div className="mt-5 flex-rounded-account">
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-rounded-account
                    button-primary-transparent mb-4"
                      style={{ margin: "10px", flex: "1" }}
                    >
                      no
                    </Button>
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-rounded-account mb-4"
                      style={{ margin: "10px", flex: "1" }}
                      closeButton
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

export default AccountCouponsComponent;
