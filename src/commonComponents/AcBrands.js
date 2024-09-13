import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import SplitComponent from "./SplitComponent";

const items = [
  <SplitComponent
    image={Images.Brand1}
    textLabel="Voltas AC Repair& Service"
  />,
  <SplitComponent
    image={Images.Brand2}
    textLabel="Daikin AC Repair& Service"
  />,
  <SplitComponent
    image={Images.Brand3}
    textLabel="Samsung AC Repair& Service"
  />,
  <SplitComponent
    image={Images.Brand4}
    textLabel="Blue Star AC Repair& Service"
  />,
  <SplitComponent
    image={Images.Brand5}
    textLabel="Hitachi AC Repair& Service"
  />,
  <SplitComponent
    image={Images.Brand6}
    textLabel="Mitsubishi AC Repair& Service"
  />,
  <SplitComponent
    image={Images.Brand3}
    textLabel="Voltas AC Repair& Service"
  />,
];

export const AcBrands = () => {
  const responsive = {
    0: { items: 3 },
    768: { items: 6 },
    1024: { items: 6 },
    1200: { items: 6 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
