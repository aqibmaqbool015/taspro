import React from "react";
import { SplitAc } from "./SplitAc";

function SplitComponent(props) {
  return (
    <>
      <div className="border-box-split-product text-center">
        <span className="border-box-label-split">
          <img src={props.image} className="img-fluid" />
        </span>
        <p className="listing-card-label-paragraph mt-1 mb-2"
        style={{minHeight: "auto"}}>{props.text}</p>
      </div>
      <p className="listing-card-label-paragraph
      listing-card-label-paragraph-gap mt-3 text-center">
        {props.textLabel}
      </p>
    </>
  );
}
export default SplitComponent;
