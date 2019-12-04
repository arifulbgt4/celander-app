import React, { useState } from "react";
import { connect } from "react-redux";
import { addEvent } from "../redux/actions/eventDispatcher";
import {
  Input,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";

const Eventform = ({ modal, toggle, id, day, month, year, addEvent }) => {
  const [title, setTitle] = useState(null);
  const changeHadelar = e => setTitle(e.target.value);
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <Input
          type="text"
          placeholder="Add title"
          onChange={v => changeHadelar(v)}
        />
      </ModalHeader>
      <ModalBody>
        <ul>
          <li>
            {day} / {month} / {year} - {day} / {month} / {year}
          </li>
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            addEvent(id, { title });
            toggle();
          }}
        >
          Do Something
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapDispatchToProps = {
  addEvent
};

export default connect(null, mapDispatchToProps)(Eventform);
