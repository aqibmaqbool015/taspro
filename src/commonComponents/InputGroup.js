import { Form, InputGroup } from "react-bootstrap";
import Images from "../constant/images";

function InputGroupComponent() {
  return (
    <>
      <InputGroup className="input-group-content-container">
        <div className="input-group-content-left position-relative">
          <Form.Select
            aria-label="Default select example"
            className="form-control-input-content 
          form-control-input-dropdown"
          >
            <option>Raipur</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <span className="user-location-label">
            <img src={Images.Location} className="img-fluid-label-content" />
          </span>
        </div>
        <div className="input-group-content-right position-relative">
          <span className="user-location-label-search">
            <img src={Images.Search} className="img-fluid-label-content" />
          </span>
          <Form.Control
            className="form-control-input-content form-control-input-search"
            placeholder="Search for “AC Repair”..."
            aria-label="Text input with dropdown button"
          />
          <span className="user-location-label-mic">
            <img src={Images.Mic} className="img-fluid-label-content" />
          </span>
        </div>
      </InputGroup>
    </>
  );
}

export default InputGroupComponent;
