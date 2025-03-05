import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import { Button } from "react-bootstrap";
import { cleaningCard } from "../constant/dummyData";
import CarouselMap from "./CarouselMapComponent";


const items = [
    <CarouselMap image={Images.MajorService1} title='Plumbing Service Agency' consult="Free consultancy" />,
    <CarouselMap image={Images.MajorService2} title='Electrical Service Agency' consult="Free consultancy" />,
    <CarouselMap image={Images.MajorService3} title='Waterproofing Service Agency' consult="Free consultancy" />,
    <CarouselMap image={Images.MajorService4} title='Bathroom & kitchen Renovation' consult="Free consultancy" />,
    <CarouselMap image={Images.MajorService1} title='Bathroom & kitchen Renovation' consult="Free consultancy" />,
    <CarouselMap image={Images.MajorService3} title='Bathroom & kitchen Renovation' consult="Free consultancy" />,
];

export const ServicesCarouselComponent = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: {items: 3},
    1400: {items: 4},
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
