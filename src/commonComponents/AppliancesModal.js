import { Row, Col, Modal } from "react-bootstrap";
import { modalService } from "../constant/dummyData";
import { useNavigate } from "react-router-dom";

function ApplicancesModal(props) {
  const navigate = useNavigate();
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
        <Modal.Body>
          <div className="modal-services-body text-center">
            <h4 className="services-modal-title-main">
              Appliance Repair & Service
            </h4>
            <p className="services-modal-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Row>
              {modalService.map((item, index) => {
                return (
                  <>
                    <Col lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 4 }} xs={{span: 4}}>
                      <div
                        className="user-modal-services-item"
                        onClick={() => navigate(props.link)}
                      >
                        <span className="user-modal-services-label"
                        onClick={handleClicks}>
                          <img src={item.image} className="img-fluid" />
                        </span>
                        <p className="user-service-name-small">{item.text}</p>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ApplicancesModal;
