import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import CarouselMap from "./CarouselMapComponent";

const items = [
  <CarouselMap
    image={Images.Cleaning1}
    title="Domestic Help Services"
    bold="₹550"
    light="₹650"
    time="45 min"
  />,
  <CarouselMap
    image={Images.Cleaning2}
    title="Home Appliances Repair & Ser..."
    bold="₹550"
    light="₹650"
    time="45 min"
  />,
  <CarouselMap
    image={Images.Cleaning3}
    title="Furniture Dealers"
    bold="₹550"
    light="₹650"
    time="45 min"
  />,
  <CarouselMap
    image={Images.Cleaning4}
    title="Packer and Movers"
    bold="₹550"
    light="₹650"
    time="45 min"
  />,
  <CarouselMap
    image={Images.Cleaning2}
    title="Packer and Movers"
    bold="₹550"
    light="₹650"
    time="45 min"
  />,
  <CarouselMap
    image={Images.Cleaning1}
    title="Packer and Movers"
    bold="₹550"
    light="₹650"
    time="45 min"
  />,
];

export const CleaningCarousel = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
    1400: { items: 4 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
