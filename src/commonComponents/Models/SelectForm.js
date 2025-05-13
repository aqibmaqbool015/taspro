import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Images from "../../constant/images";

function SelectFormModal(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [note, setNote] = useState("");
  console.log('daaa', selectedDate, selectedTime, note);

  const handleContinue = () => {
    props.onContinue({
      date: selectedDate,
      time: selectedTime,
      note: note,
    });
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 0) {
      inputValue =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    }
    setNote(inputValue);
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
            {/* Date Picker */}
            <Form.Group className="mb-3 position-relative">
              <Form.Label className="form-control-label">Select Date</Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control-text-input"
                placeholderText="Select Date"
              />
              <img src={Images.Calendar} className="img-fluid-view-effect" />
            </Form.Group>

            {/* Time Input */}
            <Form.Group className="mb-3 position-relative">
              <Form.Label className="form-control-label">Select Time Slot</Form.Label>
              <input
                type="time"
                className="form-control-text-input form-control-text-input-times"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <img
                src={Images.TimeClock}
                className="img-fluid-view-effect time-clock-icon"
              />
            </Form.Group>

            {/* Special Notes */}
            <Form.Group className="mb-5">
              <Form.Label className="form-control-label form-control-label-notes">
                Special Notes
              </Form.Label>
              <textarea
                value={note}
                onChange={handleInputChange}
                className="form-control-text-input"
                rows={5}
                style={{ height: "auto" }}
                placeholder="Enter text here"
              />
            </Form.Group>

            {/* Continue Button */}
            <div className="text-center mt-3">
              <Button
                disabled={!selectedDate || !selectedTime}
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
