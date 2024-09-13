import React from "react";
import { SplitAc } from "./SplitAc";

function CustomerCarousel(props) {
  return (
    <>
      <div
        className="
        border-box-transparent-customer"
      >
        <span className="border-box-label-split">
          <img src={props.image} className="img-fluid" />
        </span>
        <div className="user-customer-profile-data text-left">
          <h5 className="user-content-title-card">{props.title}</h5>
          <img src={props.star} className="user-profile-label-star img-fluid" />
          <p className="listing-card-label-paragraph text-left font-regular text-white mt-2"
          style={{minHeight:"auto"}}>{props.text}</p>
          <p className="listing-card-label-paragraph text-left font-regular text-white mt-2"
          style={{minHeight:"auto"}}>{props.detail}</p>
        </div>
      </div>
    </>
  );
}
export default CustomerCarousel;
