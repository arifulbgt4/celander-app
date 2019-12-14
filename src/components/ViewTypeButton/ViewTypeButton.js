import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default ({ view, weekView, monthView }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle outline caret>
        {view ? "Weekly" : "Monthly"}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          onClick={weekView}
          disabled={view}
        >
          Weekly
        </DropdownItem>
        <DropdownItem
          onClick={monthView}
          disabled={!view}
        >
          Monthly
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
