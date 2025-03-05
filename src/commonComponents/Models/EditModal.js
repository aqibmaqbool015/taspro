import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, phoneNumber, handleSave }) => {
  const [number, setNumber] = useState(phoneNumber);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSaveClick = () => {
    handleSave(number);
    handleClose();
  };

  return (
    <>
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
              <Form>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Edit Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={number}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="text-center mt-3">
                  <Button
                    className="btn-primary-fill-book "
                    onClick={handleSaveClick}
                  >
                    Continue
                  </Button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default EditModal;
