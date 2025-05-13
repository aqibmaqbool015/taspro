import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addSubservice } from "../src/store/cartSlice";

function FrequentlyMapCarousel(props) {
  const {
    image,
    title,
    value,
    book,
    mainServiceId,
    service, // full subservice object
  } = props;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // ✅ adjust path if needed

  const mainInCart = cartItems.find((item) => item.id === mainServiceId);

  const handleAddSubservice = () => {
    if (!mainInCart) {
      toast.warning("Please add the main service before adding subservices.");
      return;
    }

    dispatch(
      addSubservice({
        parentId: mainServiceId,
        subservice: {
          name: service.name,
          price: service.price - (service.priceDiscount || 0),
          icon: service.icon,
        },
      })
    );
  };

  return (
    <>
      <div className="user-multi-services-content">
        <img src={image} className="img-fluid img-fluid-carousel-content" />
        <div className="user-multi-services-detail">
          <h6 className="user-content-title-card user-content-title-light mb-1">
            {title}
          </h6>
          <h6 className="split-ac-title-small split-ac-title-small-light">
            <s>{value}</s>
          </h6>
          <div className="text-center mt-3">
            <Button
              className="btn-primary-fill-book btn-primary-fill-book-outline"
              onClick={handleAddSubservice}
            >
              {book}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrequentlyMapCarousel;
