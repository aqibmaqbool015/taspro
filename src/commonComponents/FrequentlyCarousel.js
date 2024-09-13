import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import FrequentlyMapCarousel from "./FrequentlyMapCarousel";


const items = [
    <FrequentlyMapCarousel image={Images.Work2} title='Ac Repair (Split / Window)' value= "₹550" book="add" />,
    <FrequentlyMapCarousel image={Images.Work3} title='Deep Clean AC (Window)' value= "₹550" book="add"  />,
    <FrequentlyMapCarousel image={Images.Work4} title='Ac Repair (Split / Window)' value= "₹550" book="add"  />,
    <FrequentlyMapCarousel image={Images.Work2} title='Ac Repair (Split / Window)' value= "₹550" book="add"  />,
    <FrequentlyMapCarousel image={Images.Work3} title='Ac Repair (Split / Window)' value= "₹550" book="add"  />,
];

export const FrequentlyCarousel = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
