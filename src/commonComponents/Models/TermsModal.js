import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";
import { termsConstant } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import { useNavigate } from "react-router-dom";

function TermsModal(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleContinue = () => {
    props.onContinue();
  };

  return (
    <div className="modal-content-main-container">
      <Modal
        className="modal-content-order-service"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            className="modal-services-body
           services-modal-description-overflow-height px-4"
          >
            <div className="text-left mt-3">
              <h4 className="services-modal-title-main color-theme-dark-font">
                Terms & conditions
              </h4>
              <p
                className="services-modal-description"
                style={{ fontSize: "12px" }}
              >
                Welcome to TASPRO Company! These Terms of Use govern your access
                to and use of our mobile application and related services
                (collectively, the "App"). By accessing or using the App, you
                agree to be bound by these Terms of Use.
              </p>
              {termsConstant.map((item, index) => {
                return (
                  <>
                    <div key={index} className="mt-2">
                      <h6 className="services-terms-sub-title mx-4">
                        {item.title}
                      </h6>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.text}
                      </p>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.list1}
                      </p>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.list2}
                      </p>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.list3}
                      </p>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.list4}
                      </p>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.list5}
                      </p>
                      <p
                        className="services-modal-description"
                        style={{ fontSize: "12px" }}
                      >
                        {item.list6}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <Form
              className="mt-2 mb-2
           "
            >
              <div className="mb-2">
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <Form.Check
                    className="user-form-check-control"
                    type="checkbox"
                  >
                    <Form.Check.Input
                      style={{ marginTop: "4px" }}
                      type="checkbox"
                    />
                    <Form.Check.Label>
                      <div className="mx-3">
                        <p className="user-provider-label-description">
                          I accept Company
                          <span
                            className="terms-privacy-alert"
                            onClick={() => navigate(Screens.termsOfUse)}
                          >
                            {" "}
                            Terms and Condition
                          </span>{" "}
                          to proceed further.
                        </p>
                      </div>
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </div>
            </Form>
          </div>
          <div className="text-center mt-2" onClick={handleContinue}>
            <Button
              className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
              onClick={() => navigate(props.screen)}
            >
              Continue
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TermsModal;
