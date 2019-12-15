import React, { useEffect } from "react";
import { FormGroup, Label, Input, Col } from "reactstrap";
import timeSlotGenaret from "../../helper/timeSlotGenaret";

export default ({ details, setDetails, checkValidate, months }) => {
  const devide = 5;
  let timeSlot = timeSlotGenaret(months, devide);

  function changeHandeler(e) {
    setDetails({
      [e.target.name]: e.target.value
    });
  }
  useEffect(() => {
    if (details.service !== "") {
      checkValidate(true);
    } else {
      checkValidate(false);
    }
  });
  return (
    <div className="event-details-area">
      <FormGroup row>
        <Label for="provider" sm={2}>
          Provider
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            defaultValue={details.provider}
            name="provider"
            id="provider"
            onChange={e => changeHandeler(e)}
          >
            <option value="provider">Provider</option>
            <option value="another">Another</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="service" sm={2}>
          Service
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            defaultValue={details.service}
            name="service"
            id="service"
            onChange={e => changeHandeler(e)}
          >
            <option value="">Select a service</option>
            <option value="slot">Slot blocker</option>
            <option value="sample">Sample Service</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="selectTimeSlot" sm={2}>
          Time Slot
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            defaultValue={details.service}
            name="selectTimeSlot"
            id="selectTimeSlot"
            onChange={e => changeHandeler(e)}
          >
            <option value="">Select a Slot</option>
            {timeSlot.length !== 0 &&
              timeSlot.map((obj, i) => (
                <option key={i} value={obj}>
                  {obj}
                </option>
              ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="notes" sm={2}>
          Notes
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            placeholder="Notes for the Customer"
            name="notes"
            id="notes"
            onChange={e => changeHandeler(e)}
          />
        </Col>
      </FormGroup>
    </div>
  );
};
