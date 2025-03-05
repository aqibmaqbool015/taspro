import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";
import { Link, NavLink } from "react-router-dom";

function NewAddressModal(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");
  const [contactA, setContactA] = useState("");

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
          <div className="modal-services-body px-2">
            <div className="text-center">
              <h4 className="services-modal-title-main color-theme-dark-font">
                Add New Address
              </h4>
              <p className="services-modal-description-uptodate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <Form
              className="mt-2 mb-2
            services-modal-description-overflow-height"
            >
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="form-control-label">
                  Full Name <span className="red-alert-require">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Full Name"
                  className="form-control-text-input
                form-control-text-input-new-address"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="form-control-label">
                  Contact Number <span className="red-alert-require">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Contact Number"
                  className="form-control-text-input
                form-control-text-input-new-address"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="form-control-label">
                  Alternate Contact Number{" "}
                  <span className="red-alert-require">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Alternate Contact Number"
                  className="form-control-text-input
                form-control-text-input-new-address"
                  value={contactA}
                  onChange={(e) => setContactA(e.target.value)}
                />
              </Form.Group>
              <Row className="mb-1">
                <Col lg={{ span: 6 }} md={{ span: 12 }}>
                  <Form.Group className="mb-1" controlId="formGridEmail">
                    <Form.Label className="form-control-label">
                      Postal Code <span className="red-alert-require">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Postal Code"
                      className="form-control-text-input
                    form-control-text-input-new-address"
                    />
                  </Form.Group>
                </Col>
                <Col lg={{ span: 6 }} md={{ span: 12 }}>
                  <Form.Group
                    className="mb-3 position-relative"
                    controlId="formGridPassword"
                  >
                    <Form.Label className="form-control-label">
                      Use my Location
                    </Form.Label>

                    <Link to={"https://www.google.com/maps"} target="_blank"
                    style={{textDecoration: "none"}}>
                      <Form.Control
                        type="text"
                        placeholder="Location"
                        className="form-control-text-input
                    form-control-text-input-new-address"
                      />
                    </Link>
                    <img
                      src={Images.Location}
                      className="img-fluid-view-effect"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col lg={{ span: 6 }} md={{ span: 12 }}>
                  <Form.Group className="mb-2" controlId="formGridEmail">
                    <Form.Label className="form-control-label">
                      State
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control-text-input
                    form-control-text-input-new-address"
                    >
                      <option>State</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={{ span: 6 }} md={{ span: 12 }}>
                  <Form.Group className="mb-2" controlId="formGridPassword">
                    <Form.Label className="form-control-label">City</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control-text-input
                    form-control-text-input-new-address"
                    >
                      <option>City</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-2" controlId="formGridEmail">
                <Form.Label className="form-control-label">
                  House No <span className="red-alert-require">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="House No"
                  className="form-control-text-input
                form-control-text-input-new-address"
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formGridPassword">
                <Form.Label className="form-control-label">
                  Road Name/Area Name{" "}
                  <span className="red-alert-require">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Road Name/Area Name"
                  className="form-control-text-input
                form-control-text-input-new-address"
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button
                  className="btn-primary-fill-book btn-primary-fill-book-rounded "
                  style={{ boxShadow: "none", width: "220px" }}
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewAddressModal;
