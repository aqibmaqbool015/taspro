import { Modal } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";

function TrackOrderModal(props) {
  const navigate = useNavigate();
  const handleClicks = () => {
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
          <div
            className="modal-services-body
           services-modal-description-overflow-height px-4"
          >
            <div className="text-left mt-3">
              <h4 className="services-modal-title-main color-theme-dark-font">
                Track Order
              </h4>
              <svg
                width="100%"
                height="400"
                viewBox="0 0 200 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="200" r="150" fill="#FF552C" />

                <rect
                  x="25"
                  y="50"
                  width="150"
                  height="300"
                  rx="20"
                  ry="20"
                  fill="none"
                  stroke="black"
                  stroke-width="5"
                />

                <rect
                  x="75"
                  y="90"
                  width="50"
                  height="50"
                  rx="10"
                  ry="10"
                  fill="#FF6A4C"
                />
                <image
                  x="75"
                  y="90"
                  width="50"
                  height="50"
                  href={Images.Logo}
                  preserveAspectRatio="xMidYMid slice"
                />

                <text
                  x="50%"
                  y="180"
                  text-anchor="middle"
                  fill="red"
                  font-size="20"
                  font-family="Arial"
                >
                  Download
                </text>
                <text
                  x="50%"
                  y="200"
                  text-anchor="middle"
                  fill="black"
                  font-size="14"
                  font-family="Arial"
                >
                  Our New App
                </text>

                <rect
                  x="50"
                  y="220"
                  width="100"
                  height="30"
                  rx="5"
                  ry="5"
                  fill="black"
                />
                <text
                  x="50%"
                  y="240"
                  text-anchor="middle"
                  fill="white"
                  font-size="10"
                  font-family="Arial"
                >
                  PLAY STORE
                </text>

                <rect
                  x="50"
                  y="270"
                  width="100"
                  height="30"
                  rx="5"
                  ry="5"
                  fill="black"
                />
                <text
                  x="50%"
                  y="290"
                  text-anchor="middle"
                  fill="white"
                  font-size="10"
                  font-family="Arial"
                >
                  APP STORE
                </text>
              </svg>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TrackOrderModal;
