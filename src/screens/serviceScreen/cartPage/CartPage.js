import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  FormControl,
} from "react-bootstrap";
import Images from "../../../constant/images";
import {
  couponsContent,
  countCartBoxRow,
  amountSummary,
  navigateAmount,
} from "../../../constant/dummyData";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import SelectFormModal from "../../../commonComponents/Models/SelectForm";
import AddressModal from "../../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../../commonComponents/Models/NewAddress";
import TermsModal from "../../../commonComponents/Models/TermsModal";
import { Screens } from "../../../constant/routes";
import EditModal from "../../../commonComponents/Models/EditModal";

function CartComponent() {
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

  const [countCartBoxRows, setCountCartBoxRows] = useState(countCartBoxRow);

  const incNum = (index) => {
    setCountCartBoxRows((prevRows) => {
      const updatedRows = [...prevRows];
      if (updatedRows[index].quantity < 10) {
        updatedRows[index].quantity += 1;
      }
      return updatedRows;
    });
  };

  const decNum = (index) => {
    setCountCartBoxRows((prevRows) => {
      const updatedRows = [...prevRows];
      if (updatedRows[index].quantity > 0) {
        updatedRows[index].quantity -= 1;
      }
      return updatedRows;
    });
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    setCountCartBoxRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].quantity = parseInt(value, 10) || 0;
      return updatedRows;
    });
  };

  const removeRow = (indexToRemove) => {
    setCountCartBoxRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(indexToRemove, 1);
      return updatedRows;
    });
  };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }}>
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner">Cart Summary</h4>

                <div className="mt-4 box-cart-container position-relative">
                  <h5
                    className="
                  user-provider-dummy-top-heading"
                  >
                    Customer Details
                  </h5>
                  <div
                    className="d-flex justify-between user-provider-name-headings
                 "
                  >
                    <div className="">
                      <h6 className="user-provider-name">
                        Mr Tikesh Dewangan
                        <span className="user-provider-label-home">home</span>
                      </h6>
                      <p className="user-provider-label-description">
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
                    </div>

                    <Button
                      className=" btn-primary-fill-book-border
                      btn-primary-fill-book-border-informs"
                      style={{ height: "40px" }}
                      onClick={() => setShowSecondModal(true)}
                    >
                      <span className="card-label-text-btn">
                        change address
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="mt-4 box-cart-container position-relative">
                  <h5
                    className="
                  user-provider-dummy-top-heading"
                  >
                    Order Summary
                  </h5>
                  {countCartBoxRows.map((item, index) => (
                    <div
                      className="cart-amount-split-box"
                      key={index}
                      style={{ marginBottom: "1rem" }}
                    >
                      <h6 className="cart-amount-split-left cart-amount-split-left-first-item">
                        {item.title}
                      </h6>
                      <div className="input-group input-group-form-box mx-2 mb-2 ">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-primary btn-outline-primary-increment"
                            type="button"
                            onClick={() => decNum(index)}
                          >
                            {item.minus}
                          </button>
                        </div>
                        <input
                          type="number"
                          className="form-control-content-text text-center"
                          value={item.quantity}
                          onChange={(e) => handleChange(e, index)}
                        />
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-primary btn-outline-primary-increment"
                            type="button"
                            onClick={() => incNum(index)}
                          >
                            {item.plus}
                          </button>
                        </div>
                      </div>
                      <div
                        className="split-ac-flex-right mx-2 my-2
                      "
                      >
                        <h6 className="split-ac-title-small">{item.text}</h6>
                        <span className="font-weight-normal">
                          <s>{item.text2}</s>
                        </span>
                      </div>
                      <span
                        className="img-content-remove-row mx-2 my-2
                        "
                        onClick={() => removeRow(index)}
                      >
                        <img src={item.image} alt="" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div className="timeline-vertical-detail-container">
                <div
                  className="
                company-detail-content-alert
                company-detail-content-dropdown mt-2
                btn-primary-fill-book-border"
                  style={{ height: "auto", width: "auto" }}
                >
                  <Accordion defaultActiveKey="0">
                    {couponsContent.map((item, index) => {
                      return (
                        <>
                          <Accordion.Item className="" eventKey={item.key}>
                            <Accordion.Header>
                              <div className="company-user-training-sub">
                                <span className="company-user-listing-label">
                                  <img src={item.image} className="img-fluid" />
                                </span>
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-username">
                                    {item.title}
                                  </h6>
                                  <p className="choose-us-description mb-0">
                                    {item.helpingText}
                                  </p>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="company-user-training-sub mb-4">
                                <span className="company-user-listing-label">
                                  <img
                                    src={item.percent}
                                    className="img-fluid"
                                  />
                                </span>
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-coupans">
                                    {item.subTitle}
                                  </h6>
                                  <p className="choose-us-description mb-0">
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                              <div className="company-user-training-sub mb-4">
                                <span className="company-user-listing-label">
                                  <img
                                    src={item.percent}
                                    className="img-fluid"
                                  />
                                </span>
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-coupans">
                                    {item.subTitle}
                                  </h6>
                                  <p className="choose-us-description mb-0">
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                  </Accordion>
                </div>
                <div
                  className="mt-4 box-cart-container position-relative
                display-view-payment-mode-container"
                >
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
                  <div className="text-center mt-2">
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-amount-submit"
                      onClick={() => setShowFirstModal(true)}
                    >
                      continue
                    </Button>
                  </div>
                  <ul className="px-0 mt-2 mb-0 user-content-align-debit">
                    {navigateAmount.map((item, index) => {
                      return (
                        <>
                          <li className={item.classContainer}>
                            <span className="user-add-cart-amount-label">
                              <img
                                src={item.image}
                                alt=""
                                className={item.class}
                              />
                              {item.text}
                            </span>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-2  text-center">
                  <div className="box-cart-success-amount">
                    <div className="box-cart-success-amount-flex">
                      <span className="box-cart-succcess-logo">
                        <img src={Images.Cart3} alt="" className="img-fluid" />
                      </span>
                      <h6 className="box-cart-succcess-label">
                        Easy Cancellation/Returns, Background Verified Service
                        Provide.
                      </h6>
                    </div>
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
                  <h4 className="user-heading-title mb-2">
                    Frequently Added together
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
    </>
  );
}

export default CartComponent;
