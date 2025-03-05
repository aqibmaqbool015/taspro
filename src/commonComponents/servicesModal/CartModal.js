import { Row, Col, Modal, Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { countCartBox } from "../../constant/dummyData";
import AdminImages from "../../constant/adminImages";
import { useState } from "react";
import { Screens } from "../../constant/routes";

function CartModal(props) {
  const navigate = useNavigate();
  const handleContinue = () => {
    props.onContinue();
  };
  const [counts, setCounts] = useState(
    countCartBox.map((item) => ({ id: item.id, num: 0 }))
  );

  const handleChange = (e, id) => {
    const { value } = e.target;
    setCounts((prevCounts) =>
      prevCounts.map((count) =>
        count.id === id ? { ...count, num: value } : count
      )
    );
  };

  const incNum = (id) => {
    setCounts((prevCounts) =>
      prevCounts.map((count) =>
        count.id === id ? { ...count, num: parseInt(count.num) + 1 } : count
      )
    );
  };

  const decNum = (id) => {
    setCounts((prevCounts) =>
      prevCounts.map((count) =>
        count.id === id ? { ...count, num: parseInt(count.num) - 1 } : count
      )
    );
  };
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <div
              className="mt-4 box-cart-container
                company-detail-content-empty
                 user-cleaning-container-modal-fixed"
            >
              <h5 className="empty-logo-title mb-1 mt-1">Cart</h5>
              {countCartBox.map((item, index) => {
                const countItem = counts.find((count) => count.id === item.id);
                return (
                  <div className="cart-amount-split-box" key={index}>
                    <h6 className="cart-amount-split-left">{item.title}</h6>
                    <div className="input-group input-group-form-box">
                      <div className="input-group-prepend">
                        <Button
                          className="btn btn-outline-primary btn-outline-primary-increment"
                          type="button"
                          onClick={() => decNum(item.id)}
                        >
                          {item.minus}
                        </Button>
                      </div>
                      <FormControl
                        type="text"
                        className="form-control-content-text text-center"
                        value={countItem.num}
                        onChange={(e) => handleChange(e, item.id)}
                        id={item.id}
                      />
                      <div className="input-group-prepend">
                        <Button
                          className="btn btn-outline-primary btn-outline-primary-increment"
                          type="button"
                          onClick={() => incNum(item.id)}
                        >
                          {item.plus}
                        </Button>
                      </div>
                    </div>
                    <div className="split-ac-flex-right">
                      <h6 className="split-ac-title-small">{item.text}</h6>
                      <span className="font-weight-normal">
                        <s>{item.text2}</s>
                      </span>
                    </div>
                  </div>
                );
              })}
              <ul className="user-cleaning-container px-0 
             "
              style={{position: "inherit", width: "100%"}}>
                <li className="user-cleaning-detail">
                  <h6 className="split-ac-title-small">₹598</h6>
                  <p
                    className="user-ammount-bottom-succes
                    user-ammount-bottom-succes-order"
                  >
                    You save ₹102 on this order
                  </p>
                </li>

                <li className="user-cleaning-detail" onClick={()=>navigate(Screens.cartDetail)}>
                  <Button
                    className=" btn-primary-fill-book
                   "
                    
                  >
                    View Cart
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CartModal;
