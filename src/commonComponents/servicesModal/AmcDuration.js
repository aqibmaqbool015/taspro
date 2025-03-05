import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Images from "../../constant/images";
import { AmcDurationContent } from "../../constant/dummyData";
import AdminImages from "../../constant/adminImages";
import { Screens } from "../../constant/routes";

function AmcModal(props) {
  const navigate = useNavigate();
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
            <div className="user-arrow-back-dashboard">
              <img
                src={AdminImages.BackArrow}
                className="img-fluid"
                alt=""
                onClick={props.onBack}
              />
            </div>
            <h5 className="choose-us-title-video text-left">
              Select AMC Duration
            </h5>
            <Form className="mt-4 mb-4">
              <label className="container-check-forms">
                <div className="mx-3">
                  <p className="services-modal-description">
                    12 Month Maintenance
                  </p>
                  <h6 className="services-amc-duration-title">
                    <span className="amc-label-view">₹1050</span>
                    ₹650
                  </h6>
                </div>
                <input type="radio" name="radio" />
                <span className="checkmark mt-1"></span>
              </label>
              <label className="container-check-forms">
                <div className="mx-3">
                  <p className="services-modal-description">
                    24 Month Maintenance
                  </p>
                  <h6 className="services-amc-duration-title">
                    <span className="amc-label-view">₹1050</span>
                    ₹1650
                  </h6>
                  <h6 className="services-amc-duration-success-opt">
                    RECOMMENDED
                  </h6>
                </div>
                <input type="radio" name="radio" />
                <span className="checkmark mt-1"></span>
              </label>
              <label className="container-check-forms">
                <div className="mx-3">
                  <p className="services-modal-description">
                    36 Month Maintenance
                  </p>
                  <h6 className="services-amc-duration-title">
                    <span className="amc-label-view">₹1050</span>
                    ₹2650
                  </h6>
                </div>
                <input type="radio" name="radio" />
                <span className="checkmark mt-1"></span>
              </label>
              {/* {["radio", "radio", "radio"].map((type, index) => (
                <div key={index} className="mb-2">
                  <Form.Check
                    className="user-form-check-control
                    user-form-check-control-amc"
                    type={type}
                    id={`check-api-${type}-${index}`}
                  >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>
                      {AmcDurationContent.map((item, index) => {
                        return (
                          <>
                            <div className="mx-3">
                              <p className="services-modal-description">
                                {item.text}
                              </p>
                              <h6 className="services-amc-duration-title">
                                <span className="amc-label-view">
                                  {item.text2}
                                </span>
                                {item.text3}
                              </h6>
                              <h6 className="services-amc-duration-success-opt">
                                RECOMMENDED
                              </h6>
                            </div>
                          </>
                        );
                      })}
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))} */}

              <div className="text-center mt-4">
                <Button
                  className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-capacity"
                  // onClick={handleContinue}
                  onClick={()=>navigate(Screens.amcserviceCart)}
                >
                  done
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AmcModal;
