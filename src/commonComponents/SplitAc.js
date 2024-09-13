import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import SplitComponent from "./SplitComponent";


const items = [
  <SplitComponent image={Images.SplitAc} text="Split AC" />,
  <SplitComponent image={Images.SplitAc} text="Window AC" />,
  <SplitComponent image={Images.SplitAc} text="Cassette AC" />,
  <SplitComponent image={Images.SplitAc} text="Split AC" />,
];

export const SplitAc = () => {
  const responsive = {
    0: { items: 3 },
    768: { items: 3 },
    1024: { items: 3 },
    1200: { items: 3 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
