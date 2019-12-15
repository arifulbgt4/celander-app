import React from "react";
import { Form, InputGroup, InputGroupAddon, Input } from "reactstrap";

export default () => {
  return (
    <div className="event-customer-area">
      <Form onSubmit={e => e.preventDefault()}>
        <InputGroup size="lg">
          <Input />
          <InputGroupAddon className="search-icon" addonType="append">
            search
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  );
};
