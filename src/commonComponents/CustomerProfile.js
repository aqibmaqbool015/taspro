import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import CustomerCarousel from "./CustomerCarousel";


const items = [
  <CustomerCarousel image={Images.UserCustomer} title="Tikesh Dewangan"
  text= '1m ago' detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus."
  star={Images.FiveStar} />,
  <CustomerCarousel image={Images.UserCustomer} title="Tikesh Dewangan"
  text= '1m ago' detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus."
  star={Images.FiveStar} />,
  <CustomerCarousel image={Images.UserCustomer} title="Tikesh Dewangan"
  text= '1m ago' detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nunc diam. Vestibulum ante ipsum primis in faucibus orci luctus."
  star={Images.FiveStar} />,
];

export const CustomerProfile = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
