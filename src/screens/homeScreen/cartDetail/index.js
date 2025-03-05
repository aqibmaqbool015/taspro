import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import Images from "../../../constant/images";
import {
  amountSummary,
  navigateAmount,
  otpCode,
} from "../../../constant/dummyData";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import { Screens } from "../../../constant/routes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CartDetailComponent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const otpInputs = useRef([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const [value, setValue] = useState('');

  const handleInputChanges = (e) => {
    let inputValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setValue(inputValue);
  };

  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }} md={{ span: 7 }} sm={{ span: 12 }}>
              <div
                className="home-banner-left-content
              home-banner-left-content-adjust
              home-banner-left-content-gap"
              >
                <h4 className="heading-title-banner">Add Card Details</h4>
                <p className="services-modal-description mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <div className="mt-4 box-cart-container position-relative">
                  <Form className="mt-1 mb-1">
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label className="form-control-label">
                        Card Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Andrew Ainsley"
                        className="form-control-text-input"
                        value={value}
                        onChange={handleInputChanges}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label className="form-control-label">
                        Card Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="2672 4738 7837 7285"
                        className="form-control-text-input"
                      />
                    </Form.Group>
                    <Row className="">
                      <Col lg={{ span: 6 }} md={{ span: 12 }}>
                        <Form.Group
                          className="mb-2 position-relative"
                          controlId="formGridEmail"
                        >
                          {/* <Form.Label className="form-control-label">
                            Expiry Date
                          </Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="09/07/26"
                            className="form-control-text-input"
                          /> */}
                          <Form.Label className="form-control-label">
                            Expiry Date
                          </Form.Label>
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control-text-input"
                            placeholderText="Select Date"
                          />
                          <img
                            src={Images.CalendarBlue}
                            className="img-fluid-view-effect"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 12 }}>
                        <Form.Group
                          className="mb-2 position-relative"
                          controlId="formGridPassword"
                        >
                          <Form.Label className="form-control-label">
                            CVV
                          </Form.Label>
                          <input
                            type="number"
                            placeholder="699"
                            min="100"
                            max="999"
                            onInput={(e) => {
                              if (e.target.value.length > 3) {
                                e.target.value = e.target.value.slice(0, 3);
                              }
                            }}
                            className="form-control-text-input"
                          />
                          {/*  */}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 12 }}>
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
                <div className="text-center mt-3">
                  <Button
                    className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-border-response"
                    onClick={handleShow}
                  >
                    Pay ₹1200
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
            </Col>
          </Row>
        </Container>
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
      </section>
    </>
  );
}

export default CartDetailComponent;
