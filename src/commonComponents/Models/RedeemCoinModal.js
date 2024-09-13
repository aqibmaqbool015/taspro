import { Row, Col, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { itemCollection, modalService } from "../../constant/dummyData";
import {
  itemCollectionCoins,
  modalReferShare,
  sharePlatfoam,
} from "../../constant/accountDummyData";
import Images from "../../constant/images";

function RedeemCoinModal(props) {
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
          <div className="modal-services-body">
            <h6
              className="user-power-title
                            user-power-title-repair
                            mb-4 mt-4"
            >
              Redeem Coins
            </h6>
            <div
              className="admin-sidebar-redirect"
              style={{ boxShadow: "none" }}
            >
              <div className="user-account-time-coins">
                {itemCollectionCoins.map((item, index) => {
                  return (
                    <>
                      <div
                        className="mt-3 user-account-time-container
                    border-bottom-container
                    "
                        style={{ borderBottom: "none" }}
                      >
                        <p className="user-account-detail-timer">
                          {item.label}
                        </p>
                        <h6
                          className="user-account-detail-timer"
                         
                        >
                          {item.amount}
                        </h6>
                      </div>
                    </>
                  );
                })}
              </div>
              <div
                className="mt-4 user-account-time-container
                    border-bottom-container
                    "
                style={{ borderBottom: "none" }}
              >
                <h5 className="user-account-detail-coins">Total</h5>
                <h5 className="user-account-detail-coins">₹20</h5>
              </div>
            </div>
            <div className="text-center my-4">
              <Button
                className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-modal"
                onClick={handleContinue}
                style={{width: "80%"}}
              >
                Redeem Coins
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RedeemCoinModal;
