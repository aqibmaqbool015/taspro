import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import AddressModal from "../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../commonComponents/Models/NewAddress";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";
import { Screens } from "../../constant/routes";
import { languageArray } from "../../constant/accountDummyData";
function AccountLanguageComponent() {
  const [selected, setSelected] = useState("");
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
              
              <section className="user-content-auth-section">
                <Container>
                  <Row>
                    <Col lg={{ span: 12 }}>
                      <div className="user-arrow-back-dashboard">
                        <img
                          src={AdminImages.BackArrow}
                          className="img-fluid"
                          alt=""
                          onClick={() => navigate(Screens.accountHome)}
                        />
                      </div>
                    </Col>
                    <Col lg={{ span: 6 }} md={{ span: 12 }}>
                      <div className="user-account-language-controller">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-1"
                        >
                          Change Language
                        </h6>
                        {/* <ReactFlagsSelect
                          selected={selected}
                          onSelect={(code) => setSelected(code)}
                        /> */}
                        <Form.Group className="mb-2" controlId="formGridEmail">
                          <Form.Select
                            aria-label="Default select example"
                            className="form-control-text-input
                    form-control-text-input-new-address"
                          >
                            {languageArray.map((item, index) => {
                              return (
                                <>
                                  <option>{item.name}</option>
                                </>
                              );
                            })}
                          </Form.Select>
                        </Form.Group>
                        <div className="mt-5 text-center">
                          <Button
                            className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                            onClick={setShowFirstModal}
                          >
                            Save
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
      <AddressModal
        show={showFirstModal}
        onHide={() => setShowFirstModal(false)}
        onContinue={handleFirstModalContinue}
      />

      <NewAddressModal
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        onContinue={handleSecondModalContinue}
      />
    </>
  );
}

export default AccountLanguageComponent;
