import React from "react";
import AdminImages from "../constant/adminImages";
import { userAccountList } from "../constant/accountDummyData";
import { Screens } from "../constant/routes";
import { useNavigate } from "react-router-dom";

function CareerCarousel() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blogs-salary-education-card my-3">
        <span className="blogs-education-label">
          <img src={AdminImages.Career2} className="img-fluid" />
        </span>
        <div className="blogs-education-profile-section">
          <h6 className="blogs-education-profile-heading">
            <span className="font-gradiant-text">Education</span>
            <span className="blogs-education-profile-label">OCT 27, <label className="ml-3">
            2024</label></span>
          </h6>
          <p className=" text-left mt-3 mb-0
          listing-card-label-paragraph-screen"
          style={{minHeight: "auto"}}>
            What is Salary Range?
          </p>
          <p className="font-weight-normal mb-2 mt-3
          card-label-paragraph-screen-top
          "
          style={{lineHeight: "auto"}}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered...
          </p>
          <ul className="my-0 px-0">
            {userAccountList.map((item, index) => {
              return (
                <>
                  <li className="listing-card-label-content-user">
                    <span className="listing-card-label-user">
                      <img src={item.image} className="img-fluid" />
                    </span>
                    {item.text}
                  </li>
                </>
              );
            })}
          </ul>
          {/* <h6
            className="blogs-education-profile-heading
                  blogs-education-profile-underline mt-2"
          >
            Read More
          </h6> */}
          <span className="read-more-add-context" style={{ cursor: "pointer" }}>
            <img
              src={AdminImages.Readmore}
              className="img-fluid mt-3"
              onClick={() => navigate(Screens.blogs)}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default CareerCarousel;
