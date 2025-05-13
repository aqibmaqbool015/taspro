import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import FrequentlyMapCarousel from "./FrequentlyMapCarousel";


export const FrequentlyCarousel = ({ additionalServices, mainServiceId }) => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };
  const items = additionalServices?.map((service) => (
    <FrequentlyMapCarousel
      key={service.id}
      image={service.icon}
      title={service.name}
      value={`₹${service.price - (service.priceDiscount || 0)}`}
      book="add"
      mainServiceId={mainServiceId}  // pass this logic
      service={service}
    />
  ));
  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
