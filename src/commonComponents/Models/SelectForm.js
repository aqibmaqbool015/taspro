import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import Images from "../../constant/images";

function SelectFormModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleContinue = () => {
    props.onContinue();
  };
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 0) {
      inputValue =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    }
    setValue(inputValue);
  };

  return (
    <Modal
      className="modal-content-order-service"
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-services-body px-2">
          <Form className="mt-4 mb-5">
            <Form.Group
              className="mb-3 position-relative"
              controlId="formBasicEmail"
            >
              <Form.Label className="form-control-label">
                Select Date
              </Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control-text-input"
                placeholderText="Select Date"
              />
              <img src={Images.Calendar} className="img-fluid-view-effect" />
              {/* <Form.Control
                placeholder="Select Date"
                className="form-control-text-input"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
              />
              <img src={Images.Calendar} className="img-fluid-view-effect" /> */}
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative"
              controlId="formBasicPassword"
            >
              <Form.Label className="form-control-label">
                Select Time Slot
              </Form.Label>
              {/* <TimePicker
                value={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                className="form-control-text-input"
                disableClock={true}
              />
              <img src={Images.TimeClock} className="img-fluid-view-effect" /> */}
              {/* <Form.Control
                type="time"
                className="form-control-text-input"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  color: selectedTime || isFocused ? "black" : "transparent",
                }}
              />
              {!selectedTime && !isFocused && (
                <span className="placeholder-text">HH:mm</span>
              )} */}
              <input
                type="time"
                className="form-control-text-input
              form-control-text-input-times"
              />
              <img
                src={Images.TimeClock}
                className="img-fluid-view-effect time-clock-icon"
              />
              {/* <TimePicker
                onChange={setSelectedTime}
                value={selectedTime}
                disableClock={true}
                clearIcon={null}
                format="h:mm a"
                className="form-control-text-input"
              /> */}
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                className="form-control-label
              form-control-label-notes"
              >
                Special Notes
              </Form.Label>
              {/* <Form.Control
                placeholder="Write here"
                as="textarea"
                className="form-control-text-input
                form-control-text-input-case-form"
                rows={5}
                style={{ height: "auto" }}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              /> */}
              <textarea
                value={value}
                onChange={handleInputChange}
                className="form-control-text-input"
                rows={5}
                style={{ height: "auto" }}
                placeholder="Enter text here"
              />
            </Form.Group>
            <div className="text-center mt-3">
              <Button
                className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                onClick={handleContinue}
              >
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SelectFormModal;
