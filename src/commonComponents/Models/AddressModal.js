import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import Images from "../../constant/images";

function AddressModal(props) {
  const navigate = useNavigate();
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  const handleSelectAddress = (index) => {
    console.log("Selected Index:", index);
    setSelectedAddressIndex(index);
  };

  const handleContinue = () => {
    console.log("Selected Address Index:", selectedAddressIndex);
    props.onContinue(selectedAddressIndex);
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
          <div className="modal-services-body
          modal-services-body-confirms px-4">
            <Form className="mt-4 mb-5">
              {/* Addresses Array 1 */}
              {/* {props.addresses1.map((address, index) => (
                <div key={index} className="mb-3">
                  <Form.Check
                    className="user-form-check-control"
                    type="radio"
                    id={`check-api-radio-1-${index}`}
                    checked={selectedAddressIndex === index}
                    onChange={() => handleSelectAddress(index)}
                  >
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>
                      <div className="mx-2">
                        <h6 className="user-provider-name user-provider-name-modal">
                          {address.name}
                          <span className="user-provider-label-home">
                            {address.type}
                          </span>
                        </h6>
                        <p className="user-provider-label-description">
                          {address.address}
                          <br />
                          {address.phone}
                        </p>
                      </div>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))} */}

              <label class="container-check-forms">
                <div className="mx-2">
                  <h6 className="user-provider-name user-provider-name-modal
                  user-provider-name-confirms">
                    Mr. Tikesh Dewangan
                    <span className="user-provider-label-home">Home</span>
                  </h6>
                  <p className="user-provider-label-description">
                    Office No 201, atlantis Corporate Park, Ring Road No.1,
                    Telibandha, Raipur 492001
                    <br />
                    +91 7247799900
                  </p>
                </div>
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
              <label class="container-check-forms">
                <div className="mx-2">
                  <h6 className="user-provider-name user-provider-name-modal
                  user-provider-name-confirms">
                    Mr. Tikesh Dewangan
                    <span className="user-provider-label-home">Work</span>
                  </h6>
                  <p className="user-provider-label-description">
                    Office No. 201, atlantis corporate park, ring road No.1,
                    Near Airtel office, Telebandha Raipur, C.G.
                    <br />
                    9644430161
                  </p>
                </div>
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>

              {/* Addresses Array 2 */}
              {/* {props.addresses2.map((address, index) => (
                <div key={index} className="mb-3">
                  <Form.Check
                    className="user-form-check-control"
                    type="radio"
                    id={`check-api-radio-2-${index}`}
                    checked={
                      selectedAddressIndex === index + props.addresses1.length
                    }
                    onChange={() =>
                      handleSelectAddress(index + props.addresses1.length)
                    }
                  >
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>
                      <div className="mx-2">
                        <h6 className="user-provider-name user-provider-name-modal">
                          {address.name}
                          <span className="user-provider-label-home">
                            {address.type}
                          </span>
                        </h6>
                        <p className="user-provider-label-description">
                          {address.address}
                          <br />
                          {address.phone}
                        </p>
                      </div>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))} */}

              {/* Continue Button */}
              <div className="mt-3">
                <span className="img-adding-content" onClick={handleContinue}>
                  <img src={Images.Plus} className="img-fluid" />
                  Add a new address
                </span>
              </div>
              <div className="text-center mt-3">
                <Button
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

AddressModal.defaultProps = {
  addresses1: [
    {
      name: "Mr. Tikesh Dewangan",
      type: "Home",
      address:
        "Office No 201, atlantis Corporate Park, Ring Road No.1, Telibandha, Raipur 492001",
      phone: "+91 7247799900",
    },
  ],
  addresses2: [
    {
      name: "Mr. Tikesh Dewangan",
      type: "Work",
      address:
        "Office No 201, atlantis Corporate Park, Ring Road No.1, Telibandha, Raipur 492001",
      phone: "+91 7247799900",
    },
  ],
};

export default AddressModal;
