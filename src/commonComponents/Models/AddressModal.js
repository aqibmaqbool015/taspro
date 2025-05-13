import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import Images from "../../constant/images";
import { useQuery } from "@tanstack/react-query";
import { fetchUserAddress } from "../../services/api";

function AddressModal(props) {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleContinue = () => {
    if (selectedAddress) {
      props.onContinue(selectedAddress);
    }
  };

  const { data: addresses = [], isLoading, error } = useQuery({
    queryKey: ['userAddress'],
    queryFn: fetchUserAddress,
  });

  if (isLoading) return <p>Loading address...</p>;
  if (error) return <p>Error loading address.</p>;
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
          <div className="modal-services-body
          modal-services-body-confirms px-4">
            <Form className="mt-4 mb-5">
              {addresses.map((address, index) => (
                <label
                  key={address._id}
                  className="container-check-forms"
                  style={{ display: "block", cursor: "pointer" }}
                >
                  <div className="mx-2">
                    <h6 className="user-provider-name user-provider-name-modal user-provider-name-confirms">
                      {address.fullName}
                      <span className="user-provider-label-home">{address.type}</span>
                    </h6>
                    <p className="user-provider-label-description">
                      {address.houseNumber}, {address.streetAddress}, {address.address}, {address.city}, {address.state}, {address.landmark}, {address.postalCode}
                      <br />
                      {address.contactNumber}
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === address}
                    onChange={() => setSelectedAddress(address)}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}

              <div className="mt-3">
                <span className="img-adding-content" onClick={handleContinue}>
                  <img src={Images.Plus} className="img-fluid" />
                  Add a new address
                </span>
              </div>
              <div className="text-center mt-3">
                <Button
                  disabled={!selectedAddress}
                  className="btn-primary-fill-book btn-primary-fill-book-rounded"
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



export default AddressModal;
