import {
  Row,
  Col,
  Modal,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import {
  modalService,
  textDetailService,
  workFlow,
} from "../constant/dummyData";
import { useNavigate } from "react-router-dom";
import Images from "../constant/images";
import { useState } from "react";
import { CleaningCarousel } from "./CleaningCarousel";
import { FrequentlyCarousel } from "./FrequentlyCarousel";
import { Screens } from "../constant/routes";

function DeepServiceModal(props) {
  const { data } = props;

  const navigate = useNavigate();
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
    <div className="modal-content-main-container">
      <Modal
        className="modal-content-order-service"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="px-0 py-0">
          <div
            className="modal-services-body
          services-modal-description-overflow-height"
          >
            <video style={{ height: 280, width: "100%" }} controls>
              <source
                src={data?.video}
                type="video/mp4"
              ></source>
            </video>
            <div className="px-3">
              <Container
                style={{ padding: "18px" }}
                className="modal-description-overflow-responsive"
              >
                <div
                  className="cart-amount-split-box
            cart-amount-split-box-service-deep mb-1"
                >
                  <h5 className="choose-us-title-video">
                    {data?.name}
                    <br />
                    (Split)
                  </h5>
                  <div className="split-ac-flex-right">
                    <h6 className="split-ac-title-small">
                      ₹{data?.price}
                      {/* <span className="font-weight-normal">₹599</span> */}
                    </h6>
                  </div>
                  <div
                    className="input-group input-group-form-box
                  "
                  >
                    <div className="input-group-prepend">
                      <Button
                        className="btn btn-outline-primary
                        btn-outline-primary-increment"
                        type="button"
                        onClick={decNum}
                      >
                        -
                      </Button>
                    </div>
                    <FormControl
                      type="text"
                      className="form-control-content-text text-center"
                      value={num}
                      onChange={handleChange}
                    />
                    <div className="input-group-prepend">
                      <Button
                        className="btn btn-outline-primary
                        btn-outline-primary-increment"
                        type="button"
                        onClick={incNum}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="user-content-card-text mb-2">
                  <span className="user-content-star-rate">
                    <img src={Images.Star} className="img-fluid" />
                  </span>
                  4.83 (1.2M reviews) | {data?.time} {data?.timeUnit}
                </p>
                <p
                  className="user-ammount-bottom-succes
            text-capitalize"
                >
                  {data?.warranty} {data?.warrantyUnit} Warranty
                </p>
                <div
                  className="box-cart-content-container
            box-hidden-charges-container"
                >
                  <div
                    className="cart-box-left cart-box-left-text-arrow btn-primary-fill-book-border"
                    style={{ height: "auto", width: "100%" }}
                  >
                    <h6
                      className="choose-us-title-coupans
                    "
                    >
                      Standard Rate Card no hidden charges
                    </h6>
                  </div>
                  <div className="cart-box-right">
                    <img src={Images.ArrowRight} className="img-fluid" />
                  </div>
                </div>
                <h5 className="choose-us-title-video mt-4">How it Works?</h5>
                {data?.howItWorks?.map((item, index) => {
                  return (
                    <>
                      <div className="cart-amount-split-box mb-1 mt-3 justify-left">
                        <span className="cart-amount-split-label">
                          <img src={item.image} className="img-fluid" alt='image' />
                        </span>
                        <div className="split-ac-flex-right">
                          <p className="contact-phone-text ">
                            <span className="text-bold-label-content">
                              {item.heading}
                            </span>
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className="service-content-box-modal">

                  <h5 className="choose-us-title-video mt-2 mb-0">
                    Service Inclusion
                  </h5>
                  <p className="services-modal-description">
                    {data?.serviceInclusion}
                  </p>

                </div>
                <div className="service-content-box-modal">

                  <h5 className="choose-us-title-video mt-2 mb-0">
                    Service Exclusion
                  </h5>
                  <p className="services-modal-description">
                    {data?.serviceExclusion}
                  </p>

                </div>
                <div className="service-content-box-modal">

                  <h5 className="choose-us-title-video mt-2 mb-0">
                    Important Note
                  </h5>
                  <p className="services-modal-description">
                    {data?.importantNote}
                  </p>

                </div>
                {data?.additionalServices?.length > 0 && <div
                  className="mt-4 user-multi-services-slides user-multi-services-cleaning
              user-multi-services-slides-modal"
                >
                  <h6 className="user-heading-title mb-2">
                    Frequently Added Together
                  </h6>
                  <FrequentlyCarousel additionalServices={data?.additionalServices} mainServiceId={data?._id} />
                </div>}
              </Container>
            </div>
          </div>
          <div className="mt-1 modal-service-footer-box">
            <div className="modal-service-left-footer">
              <div className="cart-amount-split-box mb-1 mt-3 justify-left">
                <span className="cart-amount-detail-label">
                  <img src={Images.OneLabel} className="img-fluid" />
                </span>
                <div className="split-ac-flex-right">
                  <h6 className="split-ac-title-small">
                    ₹ {data?.price}
                    {/* <span className="font-weight-normal"> ₹350 </span> */}
                  </h6>
                  <p className="contact-phone-text split-ac-title-small-little">
                    12 Month Plan
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-service-right-footer" onClick={handleClicks}>
              <Button
                className=" btn-primary-fill-book
                btn-primary-fill-book-cart"
                onClick={() => navigate(props.screen)}
                style={{ height: "45px !important" }}
              >
                view cart
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeepServiceModal;
