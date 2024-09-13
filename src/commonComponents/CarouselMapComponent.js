import React from "react";
import { cleaningCard } from "../constant/dummyData";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { Screens } from "../constant/routes";

function CarouselMap(props) {
  const navigate = useNavigate();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        {cleaningCard.map((item, index) => {
          return (
            <>
              <div className="user-multi-services-content">
                <img
                  src={props.image}
                  className="img-fluid img-fluid-carousel-content"
                />
                <div className="user-multi-services-detail">
                  <h6 className="user-content-title-card mb-1">
                    {props.title}
                  </h6>
                  <p className="user-content-card-text mb-1">
                    <span className="user-content-star-rate">
                      <img src={item.star} className="img-fluid" />
                    </span>
                    {item.rating}
                  </p>
                  <ul className="user-cleaning-container
                  user-cleaning-container-carts px-0">
                    <li className="user-cleaning-detail user-cleaning-detail-dotted">
                      <p className="user-ammount-bottom ">
                        <span className="user-theme-black">{props.bold}
                         {/* <small>.</small> */}
                          </span>
                       <s > {props.light}</s>
                      </p>
                    </li>
                    <li className="user-cleaning-detail
                    user-cleaning-detail-dotted
                    ">
                      <p className="user-ammount-bottom">{props.time} </p>
                    </li>
                    <li className="user-cleaning-detail">
                      <p className="user-ammount-bottom-succes"
                      style={{marginBottom: "-8px", marginRight: "5px"}}>
                        {props.consult}
                      </p>
                    </li>

                    <li className="user-cleaning-detail"
                    onClick={handleClicks}>
                      <Button className=" btn-primary-fill-book"
                      style={{borderRadius: "6px", height: "40px"}}
                      onClick={()=>navigate(Screens.cartDetail)}>
                        {item.book}{" "}
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CarouselMap;
