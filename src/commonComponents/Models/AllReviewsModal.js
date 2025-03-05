import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Images from "../../constant/images";
import { allReviewsView } from "../../constant/accountDummyData";

const AllReviewsModal = ({ show, handleClose, phoneNumber, handleSave }) => {
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
            <div className="modal-services-body px-1">
              {allReviewsView.map((item, index) => {
                return (
                  <>
                    <div
                      className={item.mainClass}
                    >
                      <span
                        className="border-box-label-split
                border-box-label-split-all-reviews"
                      >
                        <img src={item.image} className="img-fluid" />
                      </span>
                      <div
                        className="user-customer-profile-data text-left"
                        style={{ marginLeft: "10px" }}
                      >
                        <h5
                          className="user-content-title-card mb-0"
                          style={{ color: "#1b1b1b" }}
                        >
                          {item.title}
                        </h5>
                        <img
                          src={item.star}
                          className="user-profile-label-star img-fluid"
                        />
                        <p
                          className="listing-card-label-paragraph text-left font-regular"
                          style={{ minHeight: "auto", color: "#1b1b1b" }}
                        >
                          {item.time}
                        </p>
                        <p
                          className="listing-card-label-paragraph text-left font-regular"
                          style={{ minHeight: "auto", color: "#1b1b1b" }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AllReviewsModal;
