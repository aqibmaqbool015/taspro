import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import {
  accountEditProfile,
  imagePickerProfile,
  profileBuilding,
} from "../../constant/dummyData";
import ImagePicker from "../../commonComponents/imagePicker";
import { Screens } from "../../constant/routes";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
import AdminImages from "../../constant/adminImages";

function AccountEditComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
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
                    <Col lg={{ span: 7 }} sm={{ span: 12 }}>
                      <div
                        className="
                    content-form-auth-container-account"
                      >
                        <div className="contact-form-content-container">
                          <Form className="form-control-contact-content mt-1">
                            <div className=" mb-4">
                              {accountEditProfile.map((item, index) => {
                                return (
                                  <>
                                    <ImagePicker
                                      labelContainer={item.labelContainer}
                                      spanImage={item.spanImage}
                                      editIcon={item.editIcon}
                                      profileContainer={item.profileContainer}
                                      placeholderImage={item.placeholderImage}
                                      coverImage={item.coverImage}
                                    />
                                  </>
                                );
                              })}
                            </div>
                            <div className="user-account-content-profile">
                              <h6 className="user-account-detail-title">
                                First Name
                              </h6>
                              <Form.Control
                                className="form-control-input-account-edit mt-2"
                                placeholder="Andrew"
                              />
                            </div>
                            <div className="user-account-content-profile">
                              <h6 className="user-account-detail-title">
                                Last Name
                              </h6>
                              <Form.Control
                                className="form-control-input-account-edit mt-2"
                                placeholder="Ainsley"
                              />
                            </div>
                            <div className="user-account-content-profile">
                              <h6 className="user-account-detail-title mb-3">
                                Select gender
                              </h6>
                              <Form.Group>
                                <InputGroup className="btn-radio-checked-control">
                                  <InputGroup.Radio
                                    name="options"
                                    value="option1"
                                    onChange={() =>
                                      handleOptionChange("option1")
                                    }
                                    checked={selectedOption === "option1"}
                                  />
                                  <h6 className="user-account-detail-timer">
                                    I am male
                                  </h6>
                                </InputGroup>
                                <InputGroup className="btn-radio-checked-control">
                                  <InputGroup.Radio
                                    name="options"
                                    value="option2"
                                    onChange={() =>
                                      handleOptionChange("option2")
                                    }
                                    checked={selectedOption === "option2"}
                                  />
                                  <h6 className="user-account-detail-timer">
                                    I am female
                                  </h6>
                                </InputGroup>
                                <InputGroup className="btn-radio-checked-control">
                                  <InputGroup.Radio
                                    name="options"
                                    value="option3"
                                    onChange={() =>
                                      handleOptionChange("option3")
                                    }
                                    checked={selectedOption === "option3"}
                                  />
                                  <h6 className="user-account-detail-timer">
                                    Rather not to say
                                  </h6>
                                </InputGroup>
                              </Form.Group>
                              <h6 className="user-account-detail-title mt-4">
                                Phone Number
                              </h6>
                              <Form.Control
                                className="form-control-input-account-edit mt-2"
                                placeholder=" +1-300-555-0399"
                                type="number"
                              />
                            </div>
                            <div
                              className="text-center mt-3"
                              onClick={handleClicks}
                            >
                              <Button
                                className="btn-primary-fill-book btn-primary-fill-book-rounded"
                                style={{ boxShadow: "none" }}
                                onClick={() => navigate(Screens.accountHome)}
                              >
                                save
                              </Button>
                            </div>
                          </Form>
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
    </>
  );
}

export default AccountEditComponent;
