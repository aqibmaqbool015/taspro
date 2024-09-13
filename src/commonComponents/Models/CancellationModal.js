import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";

function CancellationModal(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");

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
        <div className="modal-services-body px-4">
          <div className="text-center mt-3">
            <div className="mb-3">
              <span className="img-label-order">
                <img src={Images.IconTick} className="img-fluid" />
              </span>
            </div>
            <h4 className="services-modal-title-main mb-4">
              {props.title}
            </h4>
            <p className="services-modal-description mb-3">
              {props.description}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    </div>
  );
}

export default CancellationModal;
