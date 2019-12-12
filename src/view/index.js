import React, { useState } from "react";
import * as dateFns from "date-fns";
import { Container, Row, Col } from "reactstrap";
import Week from "../components/WeeksRow";
import MonthBox from "../components/MonthBox";
import Header from "../components/Header";

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
            <MonthBox currentMonth={currentMonth} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
