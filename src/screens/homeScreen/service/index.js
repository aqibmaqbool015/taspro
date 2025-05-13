import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Accordion, Modal } from "react-bootstrap";
import Images from "../../../constant/images";
import {
  acRepairArea,
  cartWarranty,
  comapnyTraining,
  couponsContent,
  servicesTexts,
  servicesTextsTwo,
  splitAcProfile,
} from "../../../constant/dummyData";
import CarouselBanner from "../../../commonComponents/CarouselBanner";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import ApplicancesModal from "../../../commonComponents/AppliancesModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SplitAc } from "../../../commonComponents/SplitAc";
import { CustomerProfile } from "../../../commonComponents/CustomerProfile";
import { AcBrands } from "../../../commonComponents/AcBrands";
import FaqsComponent from "../../../component/faqs/Faqs";
import { Screens } from "../../../constant/routes";
import AdminImages from "../../../constant/adminImages";
import AddressUpdateDropdown from "../../../commonComponents/AddressUpdateDropdown";
import DeepServiceModal from "../../../commonComponents/DeepServiceModal";
import AllReviewsModal from "../../../commonComponents/Models/AllReviewsModal";
import TermsModal from "../../../commonComponents/Models/TermsModal";
import { useQuery } from "@tanstack/react-query";
import { fetchServicesBySubcategory } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQuantity, clearMessage, removeFromCart, removeSubservice } from "../../../src/store/cartSlice";
import { toast, ToastContainer } from "react-toastify";

function ServiceScreen() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAll, setShowAll] = useState(false);
  const handleCloseAll = () => setShowAll(false);
  const handleShowAll = () => setShowAll(true);
  const [showAllMore, setShowAllMore] = useState(false);
  const [showAllMoreData, setShowAllMoreData] = useState(null);
  const handleCloseAllMore = () => setShowAllMore(false);
  const handleShowAllMore = (item) => {
    setShowAllMore(true)
    setShowAllMoreData(item);
    console.log('showAllMore:', item);
  };
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { id } = useParams();
  const location = useLocation();

  const subcategory = location.state?.subcategory;
  const dispatch = useDispatch();
  const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services', subcategory],
    queryFn: () => fetchServicesBySubcategory(subcategory?._id),
    enabled: !!subcategory,
  });
  const { items, totalAmount, totalDiscount, lastActionMessage } = useSelector((state) => state.cart);
  console.log('items', services);
  useEffect(() => {
    if (lastActionMessage) {
      showToast(lastActionMessage);
      dispatch(clearMessage());
    }
  }, [lastActionMessage]);
  if (isLoading) return <p>Loading services...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const showToast = (message) => {
    toast(message);
  };



  return (
    <>
      <section
        className="
      services-provider-section-view-link"
        style={{ paddingTop: "5.4rem" }}
      >
        <Container>
          <h5 className="user-provider-dummy ">
            <span onClick={() => navigate("/home")}>Home/ </span>
            <span onClick={() => window.location.reload()}>{subcategory?.name} </span>
            {/* <span onClick={() => navigate(`/service/${id}`)}>{subcategory?.name} </span> */}
            {/* <span onClick={() => navigate("")}>/ AC Repair</span> */}
          </h5>
        </Container>
      </section>
      <section
        className="home-banner-section
        services-home-banner-section
      "
        style={{ paddingTop: "0.5rem" }}
      >
        <Container>
          <Row>
            <Col lg={{ span: 5 }}>
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner-fixed">
                  Best {subcategory?.name} Service in Raiour
                </h4>
                <p className="choose-us-description">
                  <span className="choose-us-star-data">
                    <img src={Images.Star} className="img-fluid " />
                  </span>
                  <span className="text-bold-dark-black">4.5</span>{" "}
                  {" {480 reviews}"}
                  <span
                    className="color-theme-orange"
                    style={{ fontWeight: 600 }}
                  >
                    {" "}
                    |{" "}
                  </span>
                  <span className="text-bold-dark-black"> 5785 </span>
                  {" {Bookings in Raipur}"}
                </p>
                <div
                  className="mt-5 box-cart-container position-relative
                box-cart-container-tabs-view"
                >
                  <span className="box-cart-main-label-mark">
                    <img src={Images.Mark} className="img-fluid" />
                    TAS<span className="color-theme-orange">Pro </span>{" "}
                    <span className="mx-1">Cover</span>
                  </span>
                  <div
                    className="box-cart-content-container"
                    onClick={handleShow}
                  >
                    <div className="cart-box-left">
                      <span className="choose-us-star-data">
                        <img src={Images.Badge} className="img-fluid " />
                      </span>
                      <span className="choose-us-star-warranty">
                        30 days unconditional warranty
                      </span>
                    </div>
                    <div className="cart-box-right">
                      <img src={Images.ArrowRight} className="img-fluid" />
                    </div>
                  </div>
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
                          <div className="my-4">
                            <span className="user-modal-taspro-warranty">
                              <img src={Images.Mark} className="img-fluid" />
                              TAS
                              <span className="color-theme-orange">
                                Pro{" "}
                              </span>{" "}
                              <span className="mx-1">Cover</span>
                            </span>
                            <p className="choose-us-description">
                              End-to-end service protection
                            </p>
                            <div className="user-form-content-warranty-card">
                              <h5 className="empty-logo-title">
                                30 days warranty on repairs
                              </h5>
                              <p className="choose-us-description">
                                Free repair if the same issue arises
                              </p>
                              <p className="choose-us-description">
                                One click hassle free claims
                              </p>
                              <p className="choose-us-description">
                                Up-to 10,000 cover if anything is damaged during
                                repair
                              </p>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div
                    className="box-cart-content-container"
                    onClick={() => navigate(Screens.rateCard)}
                  >
                    <div className="cart-box-left">
                      <span className="choose-us-star-data">
                        <img src={Images.Cart} className="img-fluid " />
                      </span>
                      <span className="choose-us-star-warranty">
                        Standrad rate card no hidden charges
                      </span>
                    </div>
                    <div className="cart-box-right">
                      <img src={Images.ArrowRight} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 7 }}>
              <div
                className="user-banner-content-slide
              user-banner-content-slide-updated mt-2"
              >
                <CarouselBanner />
              </div>
            </Col>
          </Row>
          <Row>
            <ToastContainer />
            <Col lg={{ span: 7 }}>
              <div className="user-services-content-fixed-height">
                <div
                  className="mt-4 user-multi-services-slides 
              user-multi-services-split
              user-multi-services-split-gap-updated"
                  onClick={handleClick}
                >
                  <SplitAc data={subcategory?.services} />
                </div>
                {services?.map((item, index) => {
                  return (
                    <>
                      <div className=" split-ac-service-box-container mb-3">
                        <h4 className="heading-title-banner">{item.title}</h4>
                        <div
                          className="split-ac-flex-container mt-4"
                          style={{ alignItems: "flex-start" }}
                        >
                          <div
                            className="split-ac-flex-left
                        split-ac-flex-left-services"
                          >
                            <div
                              className="position-relative
                          split-ac-flex-left-services-overlay"
                              onClick={handleClicks}
                            >
                              <span
                                className="split-ac-label-service"
                                style={{ position: "relative", zIndex: "-1" }}
                              >
                                <img src={item.icon} className="img-fluid" />
                              </span>
                              <Button
                                className=" btn-primary-fill-book-border
                                btn-primary-fill-book
                                btn-primary-fill-book-fixed
                                btn-primary-fill-book-fixed-overlay"
                                onClick={() =>
                                  dispatch(addToCart({
                                    id: item._id,
                                    name: item.name,
                                    price: item.price,
                                    amount2: item.previousPrice || 0,
                                    icon: item.icon,
                                    visitCharges: item.visitCharges || 0,
                                  }))
                                }
                              >
                                <span className="card-label-text-btn">
                                  Add
                                </span>
                              </Button>
                            </div>
                            <div className="split-ac-username">
                              <span className="user-date-warranty">
                                {item?.warranty} {item.warrantyUnit} Warranty
                              </span>
                              <h6
                                className="user-power-title
                            user-power-title-fixings"
                                style={{ marginTop: "0px" }}
                              >
                                {item.name}
                              </h6>
                              <p
                                className="user-content-card-text
                            user-content-card-text-view mb-2"
                              >
                                <span className="user-content-star-rate">
                                  <img src={Images.Star} className="img-fluid" />
                                </span>
                                {item.rate}
                              </p>
                              <p className="user-content-time-estimate mb-3">
                                <span className="user-content-star-rate">
                                  <img src={Images.Time} className="img-fluid" />
                                </span>
                                {item.time} {item?.timeUnit}
                              </p>
                            </div>
                          </div>
                          <div
                            className="split-ac-flex-right
                        split-ac-flex-right-fixings"
                          >
                            <h6 className="split-ac-title-small">
                              ₹ {item.price}{" "}
                              <span className="font-weight-normal">
                                <s>{item.amount2}</s>
                              </span>
                            </h6>
                            <p className="user-off-percent">{item.off}</p>
                          </div>
                        </div>
                        <ul className="px-3 mt-4 user-title-content-main-responsive">
                          <li className="user-split-paragraph">{item.description}</li>
                          {/* <li className="user-split-paragraph">{item.text2}</li> */}
                        </ul>
                        <h6
                          className="user-details-more-split "
                          onClick={() => handleShowAllMore(item)}
                        >
                          More Details
                        </h6>
                      </div>
                    </>
                  );
                })}
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              {items?.length === 0 ? (
                <div
                  className="mt-4 box-cart-container
                company-detail-content-empty text-center
                special-grid-in-view-responsive-empty"
                >
                  <span className="box-cart-empty-label">
                    <img src={Images.EmptyIcon} className="img-fluid" />
                  </span>
                  <h5 className="empty-logo-title">Your Cart is empty</h5>
                  <p className="choose-us-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    iaculis mauris pharetra, tincidunt odio non, sodales libero.
                    Aliquam a risus vel lectus lobortis ultricies at a enim.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-weight-bold">Cart</h3>
                  <hr />
                  {items?.map((item, index) => (
                    <div key={item.id}>
                      {/* Main Service Row */}
                      <div className="cart-item-box row align-items-center py-3">
                        <div className="col-3 col-md-2">
                          <img src={item.icon} alt={item.name} className="img-fluid rounded" style={{ maxWidth: 60 }} />
                        </div>
                        <div className="col-9 col-md-4">
                          <strong>{item.name}</strong>
                          <p className="mb-1 text-muted">₹{item.price} each</p>
                        </div>
                        <div className="col-8 col-md-4 mt-3 mt-md-0">
                          <div className="position-relative d-inline-block" style={{ width: "110px" }}>
                            <input
                              type="number"
                              min={1}
                              className="form-control text-center px-4 quantity-input-custom"
                              value={item.quantity}
                              onChange={(e) =>
                                dispatch(
                                  changeQuantity({
                                    id: item.id,
                                    quantity: Math.max(1, +e.target.value),
                                  })
                                )
                              }
                            />
                            <button
                              type="button"
                              className="position-absolute top-0 start-0 h-100 px-2 quantity-btn-custom"
                              onClick={() =>
                                dispatch(
                                  changeQuantity({
                                    id: item.id,
                                    quantity: Math.max(1, item.quantity - 1),
                                  })
                                )
                              }
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="position-absolute top-0 end-0 h-100 px-2 quantity-btn-custom"
                              onClick={() =>
                                dispatch(
                                  changeQuantity({
                                    id: item.id,
                                    quantity: item.quantity + 1,
                                  })
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="btn btn-link text-danger p-0 mt-2"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="col-4 col-md-2 text-end mt-3 mt-md-0">
                          <strong>₹{item.price * item.quantity}</strong>
                        </div>
                      </div>

                      {/* Subservices if any */}
                      {item.subservices?.map((sub) => (
                        <div
                          key={sub.id}
                          className="cart-item-box row align-items-center py-2 ps-5 d-flex"
                          style={{ backgroundColor: "#f9f9f9" }}
                        >
                          <div className="col-3 col-md-2">
                            <img src={sub.icon} alt={sub.name} className="img-fluid rounded" style={{ maxWidth: 40 }} />
                          </div>
                          <div className="col-6 col-md-5">
                            <strong className="text-muted">{sub.name}</strong>
                            <p className="mb-1 text-muted">₹{sub.price} × {item.quantity}</p>
                          </div>

                          <div className="col-12 col-md-4 text-md-end">
                            <strong>₹{sub.price * item.quantity}</strong>
                          </div>
                          <button className="col-3 col-md-1 text-red-600" onClick={() => dispatch(removeSubservice({ parentId: item.id, subserviceName: sub.name }))}>
                            X
                          </button>
                        </div>
                      ))}

                      {index !== items.length - 1 && <hr />}
                    </div>
                  ))}

                  <div
                    className="mt-4 
                company-detail-content-empty
                "
                  >
                    <ul
                      className="user-cleaning-container
                user-cleaning-container-carts px-0 mt-2
                user-cleaning-container-carts-position"
                    >
                      <li className="user-cleaning-detail">
                        <h6>Total Amount: ₹{totalAmount}</h6>
                        {totalDiscount > 0 && (
                          <p className="text-success">You saved ₹{totalDiscount} on this order</p>
                        )}
                      </li>

                      <li className="user-cleaning-detail">
                        <Button
                          className=" btn-primary-fill-book
                    "
                          onClick={() => navigate(Screens.cartPage)}
                        >
                          View Cart
                        </Button>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="mt-4 box-cart-container
                company-detail-content-empty
                special-grid-in-view-responsive"
                  >
                    <ul
                      className="user-cleaning-container
                user-cleaning-container-carts px-0 mt-2
                user-cleaning-container-carts-position"
                    >
                      <li className="user-cleaning-detail">
                        <h6>Total Amount: ₹{totalAmount}</h6>
                        {totalDiscount > 0 && (
                          <p className="text-success">You saved ₹{totalDiscount} on this order</p>
                        )}
                      </li>

                      <li className="user-cleaning-detail">
                        <Button
                          className=" btn-primary-fill-book
                    "
                          onClick={() => navigate(Screens.cartPage)}
                        >
                          View Cart
                        </Button>
                      </li>
                    </ul>
                  </div>

                </div>
              )}

              <div
                className=" box-cart-container
                company-detail-content-empty"
              >
                <h5 className="empty-logo-title mb-3 mt-1">
                  Why TASPro Company?
                </h5>
                <ul className="px-0 mb-0">
                  {comapnyTraining.map((item, index) => {
                    return (
                      <>
                        <li key={index} className="company-user-training">
                          <span className="company-user-listing-label">
                            <img src={item.image} className="img-fluid" />
                          </span>
                          <p className="contact-phone-text">{item.text}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div
                className="
                company-detail-content-alert
                company-detail-content-dropdown
                company-detail-content-empty
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
                                <img src={item.percent} className="img-fluid" />
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
                                <img src={item.percent} className="img-fluid" />
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
            </Col>
          </Row>
        </Container>
      </section >
      <section className="application-packages-section mt-3">
        <Container className="application-customers-review-container">
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="text-right">
                <h5 className="user-service-customers-title">
                  What our Customers Say?
                </h5>
                <p
                  className="user-content-card-text mb-1
                text-white text-capitalize"
                >
                  <span className="user-content-star-rate">
                    <img src={Images.Star} className="img-fluid" />
                  </span>
                  4.5(12m reviews)
                </p>
              </div>
              <div
                className="mt-4 user-multi-services-slides 
              user-multi-services-split user-multi-services-customer
              user-multi-services-customer-covered"
              >
                <CustomerProfile />
              </div>
              <div className="my-4 mx-5 multi-services-customer-reviews">
                <img
                  src={AdminImages.ViewAll}
                  style={{ cursor: "pointer" }}
                  className="img-fluid"
                  onClick={handleShowAll}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="application-packages-section mt-3">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div
                className="application-brands-covered 
              user-multi-services-slides  user-multi-services-split"
              >
                <h4 className="heading-title-banner mb-2">
                  We covered AC Brand
                </h4>
                <AcBrands />
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              {acRepairArea.map((item, index) => {
                return (
                  <>
                    <div className="user-ac-repair-areas mb-3">
                      <h4 className="heading-title-banner mb-2">
                        {item.title}
                      </h4>
                      <p className="heading-text-repair-area">{item.text}</p>
                    </div>
                  </>
                );
              })}
            </Col>
            <Col lg={{ span: 12 }}>
              <div className="user-ac-repair-areas mb-3">
                <h4 className="heading-title-banner mb-2">
                  Frequently Asked Questions (FAQ)?
                </h4>
                <div className="user-fixed-faqs-accordions">
                  <FaqsComponent />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className=" user-multi-services-slides">
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-1 user-multi-services-slides
                user-multi-services-cleaning-first"
                >
                  <h4 className="user-heading-title mb-2">
                    You may like our other services
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="on-demand-service-section mt-2 ">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="on-demands-services-detail">
                <h5 className="choose-us-title">
                  On-demand Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTexts.map((item, index) => {
                  return (
                    <div key={index}>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-2">
                        {item.text.split(/(\s*\|\s*)/).map((textSegment, i) => (
                          <span key={i} className="hoverable-text">
                            {textSegment}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                })}
                <h5 className="choose-us-title">
                  AMC Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTextsTwo.map((item, index) => {
                  return (
                    <>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-2">
                        {item.text.split(/(\s*\|\s*)/).map((textSegment, i) => (
                          <span key={i} className="hoverable-text">
                            {textSegment}
                          </span>
                        ))}
                      </p>
                    </>
                  );
                })}
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
      <ApplicancesModal
        link={Screens.service}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <DeepServiceModal
        data={showAllMoreData}
        show={showAllMore}
        handleClose={handleCloseAllMore}
        onHide={() => setShowAllMore(false)}
      />
      {/* <TermsModal show={show} onHide={() => setShow(false)} /> */}
      <AllReviewsModal
        show={showAll}
        handleClose={handleCloseAll}
        onHide={() => setShowAll(false)}
      />
    </>
  );
}

export default ServiceScreen;
