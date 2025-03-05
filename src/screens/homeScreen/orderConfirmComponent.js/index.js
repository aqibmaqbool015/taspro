import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  FormControl,
  Modal,
} from "react-bootstrap";
import Images from "../../../constant/images";
import {
  couponsContent,
  countCartBoxRow,
  amountSummary,
  navigateAmount,
} from "../../../constant/dummyData";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import { Screens } from "../../../constant/routes";
import SelectFormModal from "../../../commonComponents/Models/SelectForm";
import AddressModal from "../../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../../commonComponents/Models/NewAddress";
import TermsModal from "../../../commonComponents/Models/TermsModal";
import EditModal from "../../../commonComponents/Models/EditModal";
import AddAlternativeModal from "../../../commonComponents/Models/AlternativeNumberModal";
import TrackOrderModal from "../../../commonComponents/Models/TrackOrderModal";
import AdminImages from "../../../constant/adminImages";

function OrderConfirmComponent() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91 7247799900");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleSave = (newNumber) => {
    setPhoneNumber(newNumber);
  };
  const [showTrack, setShowTrack] = useState(false);
  const [isInViewport, setIsInViewport] = useState(
    window.innerWidth >= 300 && window.innerWidth <= 575
  );

  const handleShowTrack = () => {
    if (window.innerWidth >= 300 && window.innerWidth <= 575) {
      setShowTrack(true);
    } else {
      navigate('/book-payment#work-status'); // Navigate to the page with the hash
    }
  };

  useEffect(() => {
    const handleScrollToWorkStatus = () => {
      const workStatusElement = document.getElementById('work-status');
      if (workStatusElement) {
        workStatusElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (window.location.hash === '#work-status') {
      handleScrollToWorkStatus(); // Scroll immediately if the hash matches
    } else {
      const handleRouteChange = () => {
        if (window.location.hash === '#work-status') {
          handleScrollToWorkStatus();
        }
      };
      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
    }
  }, [window.location.hash]);

  const handleCloseTrack = () => setShowTrack(false);

  const handleResize = () => {
    setIsInViewport(window.innerWidth >= 300 && window.innerWidth <= 575);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [phoneNumberAdd, setPhoneNumberAdd] = useState("+91 7247799900");

  const handleShowAdd = () => setShowModalAdd(true);
  const handleCloseAdd = () => setShowModalAdd(false);
  const handleSaveAdd = (newNumbers) => {
    setPhoneNumberAdd(newNumbers);
  };
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleThirdModalContinue = () => {
    setShowThirdModal(false);
    setShowFourthModal(true);
  };

  const handleFourthModalContinue = () => {
    // Handle any logic you need for the third modal continue action
  };

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }}>
              <div
                className="home-banner-left-content
              home-banner-left-content-gap"
              >
                <div className="home-services-banner-view-top">
                  <h5 className="choose-us-title-video">
                    Thanks for giving us opportunity to serve you better
                  </h5>
                  <h6 className="choose-banner-paragraph-order mt-3">
                    Service Delivery by Fri, 26-jan-2024
                  </h6>
                  <h6
                    className="choose-banner-paragraph-order mt-3 choose-banner-paragraph-blue"
                    onClick={handleShowTrack}
                  >
                    Track & Manage Order
                  </h6>
                </div>
                <div className="mt-4 order-confirm-detail-success">
                  <span className="img-label-order">
                    <img src={Images.IconTick} className="img-fluid" />
                  </span>
                  <div className="confirm-detail-success-right">
                    <h5
                      className="confirm-order-alert-title
                        text-capitalize"
                    >
                      Order Confirmed
                    </h5>
                    <p className="confirm-order-alert-description ">
                      Your Request has been sensed successfully. You will
                      receive a notification for update
                    </p>
                  </div>
                </div>

                <div className="mt-4 box-cart-container position-relative">
                  <h5
                    className="mb-4
                  user-provider-dummy-top-heading"
                  >
                    Customer Details
                  </h5>
                  <div
                    className="d-flex justify-between
                  "
                  >
                    <div className="">
                      <h6 className="user-provider-name-order-replace">
                        <span
                          className="
                        user-provider-name-confirm-locate-replace"
                        >
                          <img
                            src={Images.LocationBlue}
                            className="img-fluid"
                          />
                        </span>
                        Mr Tikesh Dewangan
                        <span
                          className="user-provider-label-home
                        user-provider-label-home-content"
                        >
                          home
                        </span>
                      </h6>
                      <p className="user-provider-label-description mt-4">
                        Office No 201, atlantis Corporate Park, Ring Road No.1,
                        <br />
                        Telibandha, Raipur 492001
                        <br />
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={handleShow}
                        >
                          +91 7247799900
                          <span className=" mx-3">
                            <img src={Images.Cart1} alt="" />
                          </span>
                        </span>
                      </p>
                      <h6
                        className="choose-banner-paragraph-order mt-3
                choose-banner-paragraph-blue"
                        onClick={handleShowAdd}
                      >
                        Add Alternate Number
                      </h6>
                    </div>

                    <Button
                      className=" btn-primary-fill-book-border
                      btn-primary-fill-book-border-informs"
                      onClick={() => setShowSecondModal(true)}
                    >
                      <span className="card-label-text-btn">
                        change address
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="mt-4 box-cart-container position-relative">
                  <div
                    className="d-flex justify-between
                  "
                  >
                    <span className="mr-3">
                      <img src={Images.SimCard} className="img-fluid" />
                    </span>
                    <div className="view-flex-title">
                      <h6 className="user-provider-name-order-replace">
                        Service providers require OTPs for avail Service
                      </h6>
                      <p className="user-provider-label-description mt-3">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed qu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div
                className="
                company-detail-content-alert
                company-detail-content-dropdown mt-2
                btn-primary-fill-book-border"
                style={{ height: "auto", width: "auto" }}
              >
                <Accordion defaultActiveKey="0">
                  <Accordion.Item className="">
                    <Accordion.Header>
                      <div className="company-user-training-sub">
                        <span className="company-user-listing-label">
                          <img src={Images.Coupans} className="img-fluid" />
                        </span>
                        <div className="company-user-listing-right">
                          <h6 className="choose-us-title-username">
                            Hey! you have a new coupons
                          </h6>
                          <p className="choose-us-description mb-0">
                            Tap to see what you have won
                          </p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>cfwfcwefcwe</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="mt-4 box-cart-container position-relative">
                <h5
                  className="
                user-provider-dummy-top-heading"
                >
                  amount summary
                </h5>
                {amountSummary.map((item, index) => {
                  return (
                    <>
                      <div className={item.listingClass}>
                        <p className={item.class}>{item.title}</p>
                        <h6 className={item.class2}>{item.value}</h6>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="mt-2  text-center">
                <div className="box-cart-success-amount">
                  <div className="text-center mt-3" onClick={handleClicks}>
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-backed"
                      onClick={() => navigate(Screens.amcService)}
                    >
                      back to home
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className="mt-2 user-multi-services-slides">
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-2 user-multi-services-slides
                user-multi-services-cleaning-first"
                >
                  <h4 className="user-heading-title mb-3">
                    You might be also interested in
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
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
        onContinue={handleThirdModalContinue}
      />
      <TermsModal
        show={showFourthModal}
        onHide={() => setShowFourthModal(false)}
        onContinue={handleFourthModalContinue}
        screen={Screens.amcpaymentOption}
      />
      <EditModal
        show={showModal}
        handleClose={handleClose}
        phoneNumber={phoneNumber}
        handleSave={handleSave}
      />
      <AddAlternativeModal
        show={showModalAdd}
        handleClose={handleCloseAdd}
        phoneNumber={phoneNumberAdd}
        handleSave={handleSaveAdd}
      />
      <div>
        <div className="modal-content-main-container">
          <Modal
            className="modal-content-order-service"
            show={showTrack}
            onHide={handleCloseTrack}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div
                className="modal-services-body services-modal-description-overflow-height px-4
              text-center"
              >
                <span className="">
                  <img
                    src={AdminImages.TasModal3}
                    alt=""
                    className="img-fluid"
                  />
                </span>
                <div className="">
                  <h1 className="rate-card-label-title">Download</h1>
                  <h4 className="rate-card-label-title">our new app</h4>
                </div>
                <div className="">
                  <span className="rate-order-store-label">
                    <img
                      src={AdminImages.TasModal}
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                  <span className="rate-order-store-label">
                    <img
                      src={AdminImages.TasModal2}
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default OrderConfirmComponent;
