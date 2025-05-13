import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import Images from "../../../constant/images";
import {
  navigateAmount,
  otpCode,
} from "../../../constant/dummyData";
import "../../screens.css";
import { useNavigate, useParams } from "react-router-dom";
import { Screens } from "../../../constant/routes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../../../services/api";
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";



function CartDetailComponent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const otpInputs = useRef([]);

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleStripePayment = async () => {
    if (!stripe || !elements || !order?.totalAmount) return;

    if (!value.trim()) {
      setErrorMessage("Please enter cardholder name.");
      return;
    }
    setProcessing(true);
    setErrorMessage('');
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/v1/payment/create-payment-intent`,
        {
          totalAmount: order.totalAmount,
          orderId: order._id,  // Send orderId to backend
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const clientSecret = data.clientSecret;
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: value,
          },
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        navigate(Screens.orderConfirm);
      }
    } catch (error) {
      setErrorMessage("Payment failed. Please try again.");
      console.error(error);
    } finally {
      setProcessing(false);
    }
  };
  const handleClose = () => setShow(false);
  const [seconds, setSeconds] = useState(60);

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

  const [value, setValue] = useState('');


  const { id } = useParams();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { data: order, isLoading, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchOrderById(id),
    enabled: !!id,
  });

  const total = order?.totalAmount - order?.visitCharges + order?.totalDiscount;
  const amountSummary = [
    {
      title: "Price (Services Price)",
      value: `₹ ${total} `,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass: "display-view-web-cart mt-2",
      classMain: "mt-2 user-account-time-container ",
    },
    {
      title: "Offer Discount",
      value: `₹ ${order?.totalDiscount} `,
      class: "amount-detail-content-figure amount-light",
      class2: "amount-exact-point-value amount-light",
      listingClass: "display-view-web-cart mt-2",
      classMain: "mt-2 user-account-time-container ",
    },
    // {
    //   title: "Coupon Discount",
    //   value: "₹700",
    //   class: "amount-detail-content-figure amount-success",
    //   class2: "amount-exact-point-value amount-success",
    //   listingClass: "display-view-web-cart mt-2",
    //   classMain: "mt-2 user-account-time-container ",
    // },
    {
      title: "Visit Charge",
      value: `₹ ${order?.visitCharges} `,
      class: "amount-detail-content-figure amount-light",
      class2: "amount-exact-point-value amount-light",
      listingClass: "display-view-web-cart mt-2",
      classMain: "mt-2 user-account-time-container border-bottom-container",
    },
    {
      title: "Total Amount",
      value: `₹ ${order?.totalAmount} `,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass:
        "display-view-web-cart mt-2 amount-listing-seperate-grid-total",
      classMain: "mt-2 user-account-time-container ",
    },
    {
      title: "Payment Status",
      value: `${order?.status}`,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass:
        "display-view-web-cart display-view-web-cart-payment-mode mt-2",
      classMain: "mt-2 user-account-time-container ",
    },
    {
      title: "Mod of Payment",
      value: `${order?.modeOfPayment}`,
      class: "amount-detail-content-figure",
      class2: "amount-exact-point-value",
      listingClass:
        "display-view-web-cart display-view-web-cart-payment-mode mt-2",
      classMain: "mt-2 user-account-time-container  ",
    },
    {
      title: `You will save ₹ ${order?.totalDiscount}  on this order`,
      class: "amount-detail-content-figure amount-success",
      class2: "amount-exact-point-value amount-success",
      listingClass: "display-view-web-cart mt-2",
      classMain:
        "mt-2 user-account-time-container  border-bottom-none",
    },
  ];
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
    hidePostalCode: true,
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
                <Form.Group className="mb-3" controlId="cardHolderName">
                  <Form.Label className="form-control-label">Cardholder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter cardholder name"
                    value={value}
                    onChange={(e) =>
                      setValue(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                    }
                    className="form-control-text-input"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCard">
                  <div className="stripe-card-element">
                    <Form.Group className="mb-2" controlId="formCardNumber">
                      <Form.Label className="form-control-label">Card Number</Form.Label>
                      <div className="stripe-card-element">
                        <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
                      </div>
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formCardExpiry">
                          <Form.Label className="form-control-label">Expiry</Form.Label>
                          <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formCardCvc">
                          <Form.Label className="form-control-label">CVC</Form.Label>
                          <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </Form.Group>
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
                {amountSummary?.map((item, index) => {
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
                    className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-border-response"
                    onClick={handleStripePayment}
                    disabled={!stripe || processing}
                  >
                    {processing ? "Processing..." : `Pay ₹ ${order?.totalAmount}`}
                  </Button>

                  {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}

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
