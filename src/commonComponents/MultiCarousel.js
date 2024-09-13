import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import { Button } from "react-bootstrap";
import { Screens } from "../constant/routes";
import { useNavigate } from "react-router-dom";
import AdminImages from "../constant/adminImages";

const handleDragStart = (e) => e.preventDefault();

export const Gallery = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const navigate = useNavigate();
  const items = [
    <div className="position-relative">
      <img
        src={Images.Plan1}
        onDragStart={handleDragStart}
        role="presentation"
        className="user-slider-cntent-object"
      />
      <span className="user-multi-services-content">
        <h5 className="user-content-title-card mb-1">
          Looking for Fridge Repair?
        </h5>
        <p
          className="user-content-card-text
      user-content-card-text-home mb-1"
        >
          AC Service repair at your doorstep
        </p>
        <span className="slide-content-card-text-home"
        onClick={handleClick}>
          <img
            src={AdminImages.BookNowHome}
            className="img-fluid"
            onClick={() => navigate(Screens.amchomeservice)}
          />
        </span>
        {/* <Button
          className="btn-primary-detail-book"
          onClick={() => navigate(Screens.amcService)}
        >
          book now
          <span className="user-sharp-arrow">
            <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
          </span>
        </Button> */}
      </span>
    </div>,
    <div className="position-relative">
      <img
        src={Images.Plan2}
        onDragStart={handleDragStart}
        role="presentation"
        className="user-slider-cntent-object"
      />
      <span className="user-multi-services-content">
        <h5 className="user-content-title-card mb-1">
          Looking for Fridge Repair?
        </h5>
        <p
          className="user-content-card-text
      user-content-card-text-home mb-1"
        >
          AC Service repair at your doorstep
        </p>
        {/* <Button
          className="btn-primary-detail-book"
          onClick={() => navigate(Screens.amcService)}
        >
          book now
          <span className="user-sharp-arrow">
            <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
          </span>
        </Button> */}
        <span className="slide-content-card-text-home">
          <img
            src={AdminImages.BookNowHome}
            className="img-fluid"
            onClick={() => navigate(Screens.amcService)}
          />
        </span>
      </span>
    </div>,
    <div className="position-relative">
      <img
        src={Images.Plan3}
        onDragStart={handleDragStart}
        role="presentation"
        className="user-slider-cntent-object"
      />
      <span className="user-multi-services-content">
        <h5 className="user-content-title-card mb-1">
          Looking for Fridge Repair?
        </h5>
        <p
          className="user-content-card-text
  user-content-card-text-home mb-1"
        >
          AC Service repair at your doorstep
        </p>
        {/* <Button
          className="btn-primary-detail-book"
          onClick={() => navigate(Screens.amcService)}
        >
          book now
          <span className="user-sharp-arrow">
            <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
          </span>
        </Button> */}
        <span className="slide-content-card-text-home">
          <img
            src={AdminImages.BookNowHome}
            className="img-fluid"
            onClick={() => navigate(Screens.amcService)}
          />
        </span>
      </span>
    </div>,
    <div className="position-relative">
      <img
        src={Images.Plan1}
        onDragStart={handleDragStart}
        role="presentation"
        className="user-slider-cntent-object"
      />
      <span className="user-multi-services-content">
        <h5 className="user-content-title-card mb-1">
          Looking for Fridge Repair?
        </h5>
        <p
          className="user-content-card-text
  user-content-card-text-home mb-1"
        >
          AC Service repair at your doorstep
        </p>
        {/* <Button
          className="btn-primary-detail-book"
          onClick={() => navigate(Screens.amcService)}
        >
          book now
          <span className="user-sharp-arrow">
            <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
          </span>
        </Button> */}
        <span className="slide-content-card-text-home">
          <img
            src={AdminImages.BookNowHome}
            className="img-fluid"
            onClick={() => navigate(Screens.amcService)}
          />
        </span>
      </span>
    </div>,
    <div className="position-relative">
      <img
        src={Images.Plan2}
        onDragStart={handleDragStart}
        role="presentation"
        className="user-slider-cntent-object"
      />

      <span className="user-multi-services-content">
        <h5 className="user-content-title-card mb-1">
          Looking for Fridge Repair?
        </h5>
        <p
          className="user-content-card-text
  user-content-card-text-home mb-1"
        >
          AC Service repair at your doorstep
        </p>
        {/* <Button
          className="btn-primary-detail-book"
          onClick={() => navigate(Screens.amcService)}
        >
          book now
          <span className="user-sharp-arrow">
            <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
          </span>
        </Button> */}
        <span className="slide-content-card-text-home">
          <img
            src={AdminImages.BookNowHome}
            className="img-fluid"
            onClick={() => navigate(Screens.amcService)}
          />
        </span>
      </span>
    </div>,
    <div className="position-relative">
      <img
        src={Images.Plan3}
        onDragStart={handleDragStart}
        role="presentation"
        className="user-slider-cntent-object"
      />
      <span className="user-multi-services-content">
        <h5 className="user-content-title-card mb-1">
          Looking for Fridge Repair?
        </h5>
        <p
          className="user-content-card-text
  user-content-card-text-home mb-1"
        >
          AC Service repair at your doorstep
        </p>
        {/* <Button
          className="btn-primary-detail-book"
          onClick={() => navigate(Screens.amcService)}
        >
          book now
          <span className="user-sharp-arrow">
            <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
          </span>
        </Button> */}
        <span className="slide-content-card-text-home">
          <img
            src={AdminImages.BookNowHome}
            className="img-fluid"
            onClick={() => navigate(Screens.amcService)}
          />
        </span>
      </span>
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
