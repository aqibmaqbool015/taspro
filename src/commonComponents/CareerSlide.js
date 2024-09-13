import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import CareerCarousel from "./CareerCarousel";

const items = [
  <CareerCarousel image={Images.UserCustomer} />,
  <CareerCarousel image={Images.UserCustomer} />,
  <CareerCarousel image={Images.UserCustomer} />,
];

export const CareerSlide = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1250: { items: 2 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
