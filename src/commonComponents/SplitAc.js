import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import SplitComponent from "./SplitComponent";





export const SplitAc = ({ data }) => {
  const responsive = {
    0: { items: 3 },
    768: { items: 3 },
    1024: { items: 3 },
    1200: { items: 3 },
  };

  const items = data?.map((d, i) => (
    <SplitComponent key={i} image={d.icon} text={d.name} />
  ));


  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
