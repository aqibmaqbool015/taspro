import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  modalReferShare,
  sharePlatfoam,
} from "../../constant/accountDummyData";
import Images from "../../constant/images";
import AdminImages from "../../constant/adminImages";

function ReferShareModal(props) {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleContinue = () => {
    props.onContinue();
  };

  const handleClicks = (index) => {
    setSelectedImageIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="modal-content-main-container">
      <Modal
        className="modal-content-order-service"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body text-center">
            <h4 className="services-modal-title-refer">Share</h4>
            <div className="services-modal-refer-view">
              <p className="services-modal-refer-text">
                https://www.figma.com/file/cSkqYkiSpzSXdwai
                Xd2FZJ/Net-Card?type=design&node-3BS6NB-1
              </p>
              <img
                src={Images.Copy}
                className="img-fluid-content-refer"
                alt="Copy link"
              />
            </div>
            <Row>
              {modalReferShare.map((item, index) => (
                <Col
                  key={index}
                  lg={{ span: 3 }}
                  md={{ span: 3 }}
                  sm={{ span: 4 }}
                  xs={{ span: 4 }}
                  onClick={() => handleClicks(index)}
                >
                  <div
                    className="user-modal-services-item user-modal-services-item-refer"
                    style={{ position: "relative" }}
                    onClick={() => navigate(props.link)}
                  >
                    <img
                      src={item.image}
                      className="img-fluid-content-idea-friend"
                      alt={item.text}
                    />
                    <p className="user-service-name-small font-500">
                      {item.text}
                    </p>
                    {selectedImageIndex === index && (
                      <span className="user-check-icon-image">
                        <img
                          src={AdminImages.Accepted}
                          className="img-fluid"
                          alt="Selected"
                        />
                      </span>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
            <ul className="px-0 user-share-platfoam-order">
              {sharePlatfoam.map((item, index) => (
                <li key={index} className="user-share-platfoam-listing">
                  <img
                    src={item.image}
                    className="img-fluid-content-share-friend"
                    alt={item.text}
                  />
                  <p className="user-service-name-small font-500">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReferShareModal;
