import React from "react";
import { checkInterest } from "../../constant/dummyData";

function CheckBox() {
  return (
    <>
      <div className="">
        {checkInterest.map((item, index) => (
          <div className="btn-outline-success-label-box" key={index}>
            <label className="container-checks-box-btn">
              <div className="user-card-payment-method-container">
                <span className="user-card-payment-method-label">
                  <img src={item.image} alt=" " className="img-fluid" />
                </span>
                <p className="mb-0 check-label-paragraph">{item.name}</p>
              </div>
              <input type="radio" name="paymentMethod" />
              <span className="checkmark-content-btn-outline"></span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheckBox;