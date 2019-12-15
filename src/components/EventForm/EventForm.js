import React, { useState } from "react";
import classnames from "classnames";
import {
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import useMergedState from "../../hook/useMergedState";
import Details from "./Details";
import Customer from "./Customer";
import "./EventForm.scss";

const Eventform = ({ id, modal, toggle, addEvent, months }) => {
  const [next, setNext] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [event, setEvent] = useMergedState({
    provider: "provider",
    service: "",
    notes: ""
  });

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }
  function nextStep() {
    if (next) {
      toggleTab("2");
    }
  }
  function eventSubmit() {
    addEvent(id, event);
    toggle();
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Appointment</ModalHeader>
      <ModalBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggleTab("1")}
            >
              Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={nextStep}
            >
              Customer
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Details
              checkValidate={setNext}
              details={event}
              setDetails={setEvent}
              months={months}
            />
          </TabPane>
          <TabPane tabId="2">
            <Customer />
          </TabPane>
        </TabContent>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        {activeTab === "2" ? (
          <Button color="primary" onClick={eventSubmit}>
            Submit
          </Button>
        ) : (
          <Button disabled={!next} color="primary" onClick={nextStep}>
            Continue
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default Eventform;
