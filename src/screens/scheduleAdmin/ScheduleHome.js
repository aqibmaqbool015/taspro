import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Images from "../../constant/images";
import { CleaningCarousel } from "../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import { scheduleHomeCard } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";

function ScheduleComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="user-home-profile-content">
                <p className="user-fome-content-link">
                  <span className="user-home-content-label">
                    <img src={Images.Sidebar1} className="img-fluid" />
                  </span>
                  Home | <span className="color-theme-orange" onClick={()=>navigate(Screens.mySchedule)}>Schedule</span>
                </p>
              </div>
            </Col>
            <Col lg={{ span: 3 }}>
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
           
                <div className="mt-3 text-center"
                >
                  <span className="box-cart-empty-label"
                  onClick={()=>navigate(Screens.myScheduleCard)}>
                    <img src={Images.EmptyIcon} className="img-fluid" />
                  </span>
                  <h5 className="empty-logo-title">Your Cart is empty</h5>
                  <p className="choose-us-description choose-us-description-empty">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    iaculis mauris pharetra, tincidunt odio non, sodales libero.
                    Aliquam a risus vel lectus lobortis ultricies at a enim.
                  </p>
                </div>
               
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className="mt-2 user-multi-services-slides">
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-2 user-multi-services-slides
                user-multi-services-cleaning-first">
                  <h4 className="user-heading-title mb-3">
                    You might be also interested in
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
         <AddressUpdateDropdown />
        </Container>
      </section>
    </>
  );
}

export default ScheduleComponent;
