import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../../auth.css";
import Images from "../../constant/images";
import { Screens } from "../../constant/routes";

function CompleteProfile() {
  const navigate = useNavigate();
  const location = useLocation();
const { formData, user } = location.state || {};

console.log('useruser', formData, user);

  const [profileData, setProfileData] = useState({
    ...formData,
    gender: "",
    address: "",
  });
console.log('profileData', profileData);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      gender: profileData.gender,
      address: { address: profileData.address },
      user: user?.user?._id, // Passed from props
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URI}/api/v1/users/completeProfile`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate(Screens.Home, {state : {data : response?.data?.data}});
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <section className="user-content-auth-section text-center">
      <Container fluid>
        <Row style={{ justifyContent: "center" }}>
          <div className="user-content-card-box">
            <div className="user-content-form-box">
              <div className="content-form-left-side">
                <span className="content-form-auth-logo">
                  <img src={Images.AuthLogo} className="img-fluid" alt="Auth Logo" />
                </span>
                <div className="content-form-auth-container text-center">
                  <Form className="form-control-contact-content mt-3">
                    <h4 className="services-modal-title-main color-theme-dark-font" style={{ fontWeight: "600" }}>
                      Complete your Profile!
                    </h4>
                    <p className="services-modal-description-otp-section">
                      Please fill in the remaining details.
                    </p>

                    {/* Gender Dropdown */}
                    <Form.Group className="mb-2 text-left">
                      <Form.Label className="form-control-label">Gender</Form.Label>
                      <Form.Select name="gender" value={profileData.gender} onChange={handleChange} className="form-control-text-input">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Address Input */}
                    <Form.Group className="mb-2 text-left">
                      <Form.Label className="form-control-label">Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        name="address"
                        value={profileData.address}
                        onChange={handleChange}
                        className="form-control-text-input"
                      />
                    </Form.Group>

                    <div className="text-center mt-3">
                      <Button className="btn-primary-fill-book" onClick={handleSubmit}>
                        Continue
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default CompleteProfile;
