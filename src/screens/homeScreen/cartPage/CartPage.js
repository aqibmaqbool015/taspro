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
  countCartBox,
} from "../../../constant/dummyData";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import SelectFormModal from "../../../commonComponents/Models/SelectForm";
import AddressModal from "../../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../../commonComponents/Models/NewAddress";
import TermsModal from "../../../commonComponents/Models/TermsModal";
import { Screens } from "../../../constant/routes";
import AdminImages from "../../../constant/adminImages";
import EditModal from "../../../commonComponents/Models/EditModal";
import { useUser } from "../../../contextApi/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeFromCart } from "../../../src/store/cartSlice";
import { fetchUserAddress, placeOrder } from "../../../services/api";
import { useMutation, useQuery } from "@tanstack/react-query";

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
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [formData, setFormData] = useState({
    date: null,
    time: "",
    note: "",
  });
  console.log('selectedAddressId', selectedAddressId);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const { mutate: submitOrder, isLoading: isPlacingOrder } = useMutation({
    mutationFn: placeOrder,
    onSuccess: (data) => {
      console.log("Order placed successfully:", data);
      navigate(`/order-payment/${data?.data?._id}`);
    },
    onError: (error) => {
      console.error("Order placement failed:", error.message);
    },
  });

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleFourthModalContinue = () => {
  };

  const { items: cartItems, totalAmount, totalDiscount, visitCharges } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const incNum = (item) => {
    if (item.quantity < 10) {
      dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }));
    }
  };

  const decNum = (item) => {
    if (item.quantity > 1) {
      dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleChange = (e, item) => {
    const value = parseInt(e.target.value, 10) || 1;
    dispatch(changeQuantity({ id: item.id, quantity: value }));
  };

  const removeRow = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const userId = localStorage.getItem("userId");

  const { user, loading } = useUser();

  const { data: addresses = [], isLoading, error } = useQuery({
    queryKey: ['userAddress'],
    queryFn: fetchUserAddress,
  });

  if (isLoading) return <p>Loading address...</p>;
  if (error) return <p>Error loading address.</p>;

  const handleOrderSubmit = (form, address) => {
    const orderPayload = {
      date: form.date,
      time: form.time,
      specialNote: form.note,
      addressId: address._id,
      cartItems: cartItems,
      totalAmount,
      totalDiscount,
      visitCharges,
      userId,
    };

    submitOrder(orderPayload);
  };
  console.log('cartItems', cartItems);

  const handleAddressClick = (addressId) => {
    console.log("Selected Address ID:", addressId);
    setSelectedAddressId(addressId);
    setShowThirdModal(true);
  };

  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <h4 className="heading-title-banner">Cart Summary</h4>
            </Col>
            <Col lg={{ span: 7 }}>
              <div className="home-banner-left-content"
                style={{ padding: "0px" }}>
                <div className="mt-3 box-cart-container position-relative">
                  <div className="d-flex justify-between items-center">
                    <h5
                      className="
                  user-provider-dummy-top-heading"
                    >
                      Customer Details
                    </h5>
                    <Button
                      className=" btn-primary-fill-book-border
                      btn-primary-fill-book-border-informs"
                      style={{ height: "40px" }}
                      onClick={() => setShowThirdModal(true)}
                    >
                      <span className="card-label-text-btn d-flex">
                        add new address
                      </span>
                    </Button>
                  </div>
                  <div
                    className="d-flex justify-between user-provider-name-headings
                 "
                  >
                    <div className="">
                      <p className="user-provider-label-description">
                        {addresses.length > 0 ? (
                          <>
                            {addresses?.map((address) => {
                              return (
                                <>
                                  <h6 className="user-provider-name">
                                    {user?.gender === 'Male' ? "Mr" : "Mrs"} {address?.fullName}
                                    <span className="user-provider-label-home">{address.type}</span>
                                  </h6>
                                  <p> {address.houseNumber}, {address.streetAddress} {address?.address} , {address?.city}, {address?.state} {address?.landmark}, {address?.postalCode} </p>
                                  {/* <br /> */}
                                  <span >
                                    {address?.contactNumber}
                                    <span className="mx-3">
                                      <img onClick={() => handleAddressClick(address._id)} style={{ cursor: "pointer" }} src={Images.Cart1} alt="cart" />
                                    </span>
                                  </span>
                                  <hr />
                                </>
                              )
                            })}
                          </>
                        ) : (
                          <em>No address saved</em>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 box-cart-container position-relative">
                  <h5
                    className="
                  user-provider-dummy-top-heading"
                  >
                    Order Summary
                  </h5>
                  {cartItems.map((item, index) => {
                    const subTotal =
                      (item.price +
                        (item.subservices?.reduce((sum, sub) => sum + sub.price, 0) || 0)) *
                      item.quantity;
                    return <div key={index}>
                      {/* Main Service */}
                      <div
                        className="cart-amount-split-box"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        <h6 className="cart-amount-split-left cart-amount-split-left-first-item">
                          {item.name}
                        </h6>
                        <div className="input-group input-group-form-box mx-2 mb-2">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary btn-outline-primary-increment"
                              type="button"
                              onClick={() => decNum(item)}
                            >
                              -
                            </button>
                          </div>
                          <input
                            type="number"
                            className="form-control-content-text text-center"
                            value={item.quantity}
                            onChange={(e) => handleChange(e, item)}
                          />
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary btn-outline-primary-increment"
                              type="button"
                              onClick={() => incNum(item)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="split-ac-flex-right mx-2 my-2">
                          <h6 className="split-ac-title-small">
                            ₹{item.price * item.quantity}
                          </h6>
                          {item.amount2 && (
                            <span className="font-weight-normal">
                              <s>₹{item.amount2 * item.quantity}</s>
                            </span>
                          )}
                        </div>
                        <span
                          className="img-content-remove-row mx-2 my-2"
                          onClick={() => removeRow(item.id)}
                        >
                          <img className="cursor-pointer" src={Images.Delete} alt="Remove" />
                        </span>
                      </div>

                      {item.subservices?.length > 0 && (
                        <div
                          className="cart-amount-split-box"
                          style={{
                            backgroundColor: "#f8f9fa",
                            padding: "1rem",
                            marginBottom: "1rem",
                            marginLeft: "1.5rem",
                            borderLeft: "3px solid #007bff",
                          }}
                        >
                          <p className="mb-2">
                            <strong>Included Subservices:</strong>
                          </p>
                          {item.subservices.map((sub, subIndex) => (
                            <div
                              key={subIndex}
                              className="d-flex justify-content-between align-items-center mb-1"
                            >
                              <span className="text-muted">• {sub.name}</span>
                              <span className="text-muted">₹{sub.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  })}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div className="timeline-vertical-detail-container">
                <div
                  className="
                company-detail-content-alert
                company-detail-content-dropdown mt-3
                btn-primary-fill-book-border"
                  style={{ height: "auto", marginLeft: "0rem", width: "auto" }}
                >
                  <Accordion defaultActiveKey="0">
                    {couponsContent.map((item, index) => {
                      return (
                        <>
                          <Accordion.Item className="mb-0" eventKey={item.key}>
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
                  <div className="d-flex justify-content-between mt-3">
                    <p className="mb-0 text-muted">Offer Discount</p>
                    <h6 className="mb-0 text-danger">-₹{totalDiscount}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 text-muted">Coupon Discount</p>
                    <h6 className="mb-0">₹ 0</h6> {/* Replace with dynamic coupon if available */}
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 text-muted">Visit Charge</p>
                    <h6 className="mb-0">₹{visitCharges || 0}</h6> {/* Replace with actual if dynamic */}
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <p className="mb-0"><strong>Total Amount</strong></p>
                    <h6 className="mb-0"><strong>₹{totalAmount}</strong></h6>
                  </div>
                  <div className="text-success mt-2">
                    <p className="mb-0">You will save ₹{totalDiscount} on this order</p>
                  </div>
                  {/* {amountSummary.map((item, index) => {
                    return (
                      <>
                        <div className={item.listingClass}>
                          <p className={item.class}>{item.title}</p>
                          <h6 className={item.class2}>{item.value}</h6>
                        </div>
                      </>
                    );
                  })} */}
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
        onContinue={(data) => {
          setFormData(data);
          handleFirstModalContinue();
        }}
      />
      <AddressModal
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        onContinue={(address) => {
          setSelectedAddress(address);
          handleOrderSubmit(formData, address);
        }}
      />

      <NewAddressModal
        show={showThirdModal}
        onHide={() => setShowThirdModal(false)}
        onContinue={() => setShowThirdModal(false)}
        addressId={selectedAddressId}
      />
      <TermsModal
        show={showFourthModal}
        onHide={() => setShowFourthModal(false)}
        onContinue={handleFourthModalContinue}
        screen={Screens.paymentOption}
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
