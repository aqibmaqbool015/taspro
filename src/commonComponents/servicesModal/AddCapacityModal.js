import { Modal, Button, FormControl, Form } from "react-bootstrap";
import { addSplitAmout } from "../../constant/dummyData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminImages from "../../constant/adminImages";

function AddCapacityModal(props) {
  const navigate = useNavigate();
  const handleContinue = () => {
    props.onContinue();
  };
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
          <div className="modal-services-body">
            <h5 className="choose-us-title-video text-center">
              Select Split AC Capacity
            </h5>

            <div className="services-modal-description-overflow-height">
              {addSplitAmout.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="cart-amount-split-box 
                    cart-amount-split-box-little mb-1 mt-4 justify-left"
                    >
                      <div
                        className="split-ac-flex-right
              split-ac-flex-right-adding"
                      >
                        <span className="cart-amount-split-label">
                          <img src={item.image} className="img-fluid" />
                        </span>
                        <div className="mx-2">
                          <h5 className="cart-amount-split-ton">
                            {item.title}
                          </h5>
                          <h6 className="cart-amount-split-amount">
                            <b>{item.textBold}</b> <s>{item.text}</s>
                          </h6>
                        </div>
                      </div>
                      {/* <Button className=" btn-primary-fill-book-add">
                      {item.button}
                    </Button> */}
                      {/* <Button
                      className=" btn-primary-fill-book-border"
                      style={{ height: "45px" }}
                    >
                      <span className="card-label-text-btn">  {item.button}</span>
                    </Button> */}
                      <span className="cart-amount-split-add-button">
                        <img
                          src={AdminImages.AddButton}
                          className="img--fluid"
                          alt=""
                        />
                      </span>
                    </div>
                  </>
                );
              })}
              <Form className="mt-5 mb-5  mx-2">
                <div className="mb-4 container-check-forms-separated">
                  <label class="container-check-forms">
                    <div className="mx-2">
                      <h5 className="cart-amount-split-ton">
                        Enter Capacity manually (in TR)
                      </h5>
                    </div>
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                {/* {["radio"].map((type, index) => (
                <div key={index} className="mb-3">
                  <Form.Check
                    className="user-form-check-control
                    user-form-check-control-adding"
                    type={type}
                    id={`check-api-${type}-${index}`}
                  >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>
                      <div className="mx-2">
                        <h5 className="cart-amount-split-ton">
                          Enter Capacity manually (in TR)
                        </h5>
                      </div>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))} */}
                <div className="user-dflex-justify-space mt-2 mb-2">
                  <span
                    className="user-form-label-view
                "
                  >
                    10
                  </span>
                  <div className="user-text-container">
                    <h5 className="user-form-label-title">₹350</h5>
                    <h6 className="user-form-label-heading">
                      <s>₹299</s>
                    </h6>
                  </div>
                  <div className="input-group input-group-form-box">
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
              </Form>
            </div>
            <div className="text-center mt-3">
              <Button
                className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-capacity
                    "
                onClick={handleContinue}
              >
                done
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddCapacityModal;
