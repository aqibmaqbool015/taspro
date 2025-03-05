import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Images from "../../constant/images";
import { CleaningCarousel } from "../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import { scheduleHomeCard } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";

function ScheduleCardComponent({ scheduleHomeCards }) {
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
                  Home | <span className="color-theme-orange" onClick={()=>navigate(Screens.accountEdit)}>Profile</span>
                </p>
              </div>
            </Col>
            <Col lg={{ span: 3 }}>
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
              <div className="repair-time-date-container">
                <ul className="px-0">
                  {scheduleHomeCard.map((item, index) => {
                    return (
                      <>
                        <li
                          className="repair-time-date-card"
                          onClick={() => navigate(Screens.scheduleDetail)}
                        >
                          <Card className="admin-sidebar-redirect"
                          onClick={handleClicks}>
                            <div
                              className="split-ac-flex-container
                       repair-ac-flex-container"
                            >
                              <div
                                className="split-ac-flex-left
                               repair-ac-flex-left"
                              >
                                <span
                                  className="
                           repair-ac-label-service"
                                >
                                  <img src={item.image} className="img-fluid" />
                                </span>
                                <div
                                  className="split-ac-username
                                 repair-ac-username"
                                >
                                  <h6
                                    className="user-power-title
                             user-power-title-repair"
                                  >
                                    {item.title}
                                  </h6>
                                  <p
                                    className="user-power-title
                             user-power-title-repair-text"
                                  >
                                    {item.text}
                                  </p>
                                  <p
                                    className="user-content-card-text
                             user-content-card-text-repair mb-3"
                                  >
                                    <span className="user-content-star-rate">
                                      <img
                                        src={item.star}
                                        className="img-fluid"
                                      />
                                    </span>
                                    {item.review}
                                  </p>
                                </div>
                              </div>
                              <div className="repair-time-date-label">
                                <span className="pending-approve-label">
                                  <h6 className="pending-approve-label-text mb-0">
                                    {item.button}
                                  </h6>
                                </span>
                              </div>
                            </div>
                            <div className="mt-3 user-account-time-container">
                              <p className="user-account-detail-timer">
                                {item.label}
                              </p>
                              <h6 className="user-account-detail-timer">
                                {item.date}
                              </h6>
                            </div>
                          </Card>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
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

export default ScheduleCardComponent;
