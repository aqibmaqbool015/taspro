import React from "react";
import { cleaningCard } from "../constant/dummyData";
import { Button } from "react-bootstrap";

function FrequentlyMapCarousel(props) {
  return (
    <>
      <div className="user-multi-services-content">
        <img
          src={props.image}
          className="img-fluid img-fluid-carousel-content"
        />
        <div className="user-multi-services-detail">
          <h6
            className="user-content-title-card
          user-content-title-light mb-1"
          >
            {props.title}
          </h6>
          <h6
            className="split-ac-title-small
          split-ac-title-small-light"
          >
            <s>{props.value}</s>
          </h6>
          <div className="text-center mt-3">
            <Button className=" btn-primary-fill-book btn-primary-fill-book-outline
            ">{props.book}</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrequentlyMapCarousel;
