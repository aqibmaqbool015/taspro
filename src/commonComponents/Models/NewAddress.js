import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Images from "../../constant/images";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const BASE_URL = process.env.REACT_APP_BASE_URI;
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const defaultCenter = {
  lat: 28.6139,
  lng: 77.209,
};

function NewAddressModal(props) {
  const [form, setForm] = useState({
    fullName: "",
    contactNumber: "",
    alternateContactNumber: "",
    postalCode: "",
    city: "",
    state: "",
    houseNumber: "",
    streetAddress: "",
    landmark: "",
    address: "",
    type: "Home",
    location: {
      type: "Point",
      coordinates: [0.0, 0.0],
    },
  });
  const [showMap, setShowMap] = useState(false);
  const [marker, setMarker] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMapClick = (e) => {
    const coords = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarker(coords);
    setForm((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        coordinates: [coords.lng, coords.lat], // GeoJSON order: [lng, lat]
      },
    }));
    setShowMap(false);
  };
  const mutation = useMutation({
    mutationFn: async () => {
      const url = props.addressId
        ? `${BASE_URL}/api/v1/address/${props.addressId}`
        : `${BASE_URL}/api/v1/address`;

      const method = props.addressId ? "patch" : "post";

      const res = await axios[method](url, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return res.data;
    },
    onSuccess: () => props.onContinue(),
    onError: (error) => {
      console.error("Address submission failed:", error.response?.data?.message || error.message);
    },
  });

  const handleContinue = () => {
    mutation.mutate();
  };

  useEffect(() => {
    if (props.addressId) {
      refetch();
    }
  }, [props.addressId]);

  const { isLoading: isFetching, refetch } = useQuery({
    queryKey: ["get-address", props.addressId],
    enabled: false,
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/api/v1/address/${props.addressId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setForm(data.data);
      return data.data;
    },
  });


  return (
    <div className="modal-content-main-container">
      <Modal className="modal-content-order-service" {...props} size="md" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body px-2">
            <div className="text-center">
              <h4 className="services-modal-title-main color-theme-dark-font">Add New Address</h4>
              <p className="services-modal-description-uptodate">
                Please enter your address details below.
              </p>
            </div>
            <Form className="mt-2 mb-2 services-modal-description-overflow-height">
              <Form.Group className="mb-2">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control name="fullName" value={form.fullName} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Contact Number *</Form.Label>
                <Form.Control name="contactNumber" type="number" value={form.contactNumber} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Alternate Contact Number *</Form.Label>
                <Form.Control name="alternateContactNumber" type="number" value={form.alternateContactNumber} onChange={handleChange} />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>Postal Code *</Form.Label>
                    <Form.Control name="postalCode" type="text" value={form.postalCode} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>Use My Location</Form.Label>
                    <Form.Control
                      placeholder="Click to pick location"
                      value={
                        form.location.coordinates[0] !== 0
                          ? `Lat: ${form.location.coordinates[1]}, Lng: ${form.location.coordinates[0]}`
                          : ""
                      }
                      readOnly
                      onClick={() => setShowMap(true)}
                    />
                    <img
                      src={Images.Location}
                      className="img-fluid-view-effect"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowMap(true)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {showMap && (
                <div className="mb-3">
                  <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={marker || defaultCenter}
                      zoom={marker ? 14 : 10}
                      onClick={handleMapClick}
                    >
                      {marker && <Marker position={marker} />}
                    </GoogleMap>
                  </LoadScript>
                  <div className="text-center mt-2">
                    <Button size="sm" variant="secondary" onClick={() => setShowMap(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>State</Form.Label>
                    <Form.Control name="state" value={form.state} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Label>City *</Form.Label>
                    <Form.Control name="city" value={form.city} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-2">
                <Form.Label>House No *</Form.Label>
                <Form.Control name="houseNumber" value={form.houseNumber} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Road Name / Area *</Form.Label>
                <Form.Control name="streetAddress" value={form.streetAddress} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Landmark</Form.Label>
                <Form.Control name="landmark" value={form.landmark} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Complete Address *</Form.Label>
                <Form.Control name="address" as="textarea" rows={2} value={form.address} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address Type</Form.Label>
                <Form.Select name="type" value={form.type} onChange={handleChange}>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Work">Work</option>
                </Form.Select>
              </Form.Group>

              <div className="text-center mt-4">
                <Button
                  className="btn-primary-fill-book btn-primary-fill-book-rounded"
                  style={{ boxShadow: "none", width: "220px" }}
                  onClick={handleContinue}
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? "Saving..." : "Continue"}
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewAddressModal;
