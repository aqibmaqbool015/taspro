import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import { accountReferList } from "../../constant/accountDummyData";
import ReferShareModal from "../../commonComponents/Models/ReferShareModal";
import { Screens } from "../../constant/routes";
import AddressModal from "../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../commonComponents/Models/NewAddress";
import CancelBookingModal from "../../commonComponents/Models/CancelBookingModal";
import CancellationModal from "../../commonComponents/Models/CancellationModal";
import SelectFormModal from "../../commonComponents/Models/SelectForm";
import RedeemCoinModal from "../../commonComponents/Models/RedeemCoinModal";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";

function AccountReferComponent() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    // setShowSecondModal(false);
    // setShowFifthModal(true);
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
                  Home |{" "}
                  <span
                    className="color-theme-orange"
                    onClick={() => navigate(Screens.accountEdit)}
                  >
                    Profile
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={{ span: 3 }}>
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
              <div className="user-arrow-back-dashboard">
                <img
                  src={AdminImages.BackArrow}
                  className="img-fluid"
                  alt=""
                  onClick={() => navigate(Screens.accountHome)}
                />
              </div>
              <section className="user-content-auth-section">
                <Container>
                  <Row>
                    <Col lg={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="user-account-refer-container">
                        <ol className="user-account-refer-order">
                          {accountReferList.map((item, index) => {
                            return (
                              <li className="user-account-refer-order-listing">
                                {item.text}
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    </Col>
                    <Col lg={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="user-account-refer-card">
                        <h5 className="user-account-refer-coin">
                          Refer a Friend & Earn Coins
                        </h5>
                        <span className="user-account-refer-currency">
                          <img
                            src={Images.Currency}
                            className="img-fluid mr-3"
                          />
                          453
                        </span>
                        <p className="user-account-refer-coins">Your Coins</p>
                        <div className="text-center my-4">
                          <Button
                            className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                            onClick={setShowFirstModal}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                      <div className="mt-5 text-center mb-3">
                        <span className="">
                          <img src={Images.Friend} className="img-fluid" />
                        </span>
                        <div className="mt-5">
                          <Button
                            className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                            onClick={() => setModalShow(true)}
                          >
                            Refer a Friend
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
          <AddressUpdateDropdown />
        </Container>
      </section>
      <ReferShareModal show={modalShow} onHide={() => setModalShow(false)} />
      <RedeemCoinModal
        show={showFirstModal}
        onHide={() => setShowFirstModal(false)}
        onContinue={handleFirstModalContinue}
      />
      <CancellationModal
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        onContinue={handleSecondModalContinue}
        title="Successfully Redeem Coins"
        description="You have redeem your coins successfully, Invite more friends to earn more coins."
      />
    </>
  );
}

export default AccountReferComponent;
