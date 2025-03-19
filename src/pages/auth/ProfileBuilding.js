import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import { useLocation, useNavigate } from "react-router-dom";
import { Screens } from "../../constant/routes";
import { imagePickerProfile } from "../../constant/dummyData";
import ImagePicker from "../../commonComponents/imagePicker";

function ProfileBuilding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [avatar, setAvatar] = useState(null);
  const location = useLocation();
  const { user } = location.state || {};
  console.log('user', user,avatar);
  const handleImageChanged = (selectedImage) => {
  const imageUrl = URL.createObjectURL(selectedImage); // This creates an object URL

  setAvatar(imageUrl);  // This URL will be used to display the image and can be sent to the backend
};
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    navigate(Screens.completeProfile, { state: { formData, user, avatar } });
  };

  return (
    <section className="user-content-auth-section text-center">
      <Container fluid>
        <Row style={{ justifyContent: "center" }}>
          <div className="user-content-card-box">
            <div className="user-content-form-box">
              <div className="content-form-left-side">
                <span className="content-form-auth-logo">
                  <img src={Images.AuthLogo} className="img-fluid" />
                </span>
                <div className="content-form-auth-container text-center">
                  <Form className="form-user-auth-separate-content mt-3">
                    <h4 className="services-modal-title-main color-theme-dark-font" style={{ fontWeight: "600" }}>
                      Complete your Profile!
                    </h4>
                    <p className="services-modal-description-otp-section">
                      Please enter your details to complete the profile.
                    </p>

                    <div className="text-center mb-4">
                      {imagePickerProfile.map((item, index) => (
                        <ImagePicker key={index} {...item} imageChanged={handleImageChanged} />
                      ))}
                    </div>

                    {/* First Name Field */}
                    <Form.Group className="mb-2 position-relative text-left">
                      <Form.Label className="form-control-label text-left">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control-text-input"
                      />
                    </Form.Group>

                    {/* Last Name Field */}
                    <Form.Group className="mb-2 position-relative text-left">
                      <Form.Label className="form-control-label text-left">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control-text-input"
                      />
                    </Form.Group>

                    {/* Email Field */}
                    <Form.Group className="mb-2 position-relative text-left">
                      <Form.Label className="form-control-label text-left">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={user?.user.email}
                        // onChange={handleChange}
                        disabled
                        className="form-control-text-input"
                      />
                    </Form.Group>

                    <div className="text-center mt-3">
                      <Button className="btn-primary-fill-book" style={{ boxShadow: "none" }} onClick={handleContinue}>
                        Continue
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="content-form-right-side">
                <span className="content-form-logo-banner">
                  <img src={Images.AuthBanner} className="img-fluid" />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default ProfileBuilding;
