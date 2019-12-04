import React, { useState } from "react";
import * as dateFns from "date-fns";
import { Container, Row, Col } from "reactstrap";
import Week from "../components/week";
import Dayes from "../components/dayes";
import Header from "../components/header";

export default () => {
  const [currentMonth, setMonth] = useState(new Date());
  const nextMonth = () => {
    setMonth(dateFns.addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setMonth(dateFns.subMonths(currentMonth, 1));
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="calendar">
            <Header
              currentMonth={currentMonth}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
            />
            <Week currentMonth={currentMonth} />
            <Dayes currentMonth={currentMonth} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
