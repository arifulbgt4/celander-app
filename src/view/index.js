import React, { Component } from "react";
import moment from "moment";
import { Container, Row, Col } from "reactstrap";
import WeekDaysRow from "../components/WeekDaysRow";
import MonthBox from "../components/CalenderViewBox";
import Header from "../components/Header";

class Celander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: moment(),
      currentWeek: moment()
        .clone()
        .startOf("week"),
      weekViwe: false,
      toDay: moment().date()
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.weekView = this.weekView.bind(this);
    this.monthView = this.monthView.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
    this.prevWeek = this.prevWeek.bind(this);
  }

  weekView() {
    this.setState({
      weekViwe: true,
      currentMonth: moment(),
      currentWeek: moment()
        .clone()
        .startOf("week")
    });
  }
  monthView() {
    this.setState({
      weekViwe: false,
      currentMonth: moment()
    });
  }
  nextMonth() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: currentMonth.add(1, "month")
    });
  }
  prevMonth() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: currentMonth.subtract(1, "month")
    });
  }
  nextWeek() {
    const { currentWeek, currentMonth } = this.state;
    const endMonth = currentMonth.clone().endOf("month");
    const endWeek = currentMonth
      .clone()
      .endOf("month")
      .endOf("week");
    if (endMonth.subtract(1, "week") > currentWeek) {
      this.setState({
        currentWeek: currentWeek.add(1, "week")
      });
    } else {
      if (endMonth.add(1, "week").date() === endWeek.date()) {
        this.setState({
          currentWeek: currentWeek.add(1, "week"),
          currentMonth: currentMonth.add(1, "month")
        });
      } else {
        this.setState({
          currentMonth: currentMonth.add(1, "month")
        });
      }
    }
  }
  prevWeek() {
    const { currentWeek, currentMonth } = this.state;
    const startMonth = currentMonth.clone().startOf("month");
    const startWeek = currentMonth
      .clone()
      .startOf("month")
      .startOf("week");
    if (startMonth < currentWeek) {
      this.setState({
        currentWeek: currentWeek.subtract(1, "week")
      });
    } else {
      if (startMonth.date() === startWeek.date()) {
        this.setState({
          currentWeek: currentWeek.subtract(1, "week"),
          currentMonth: currentMonth.subtract(1, "month")
        });
      } else {
        this.setState({
          currentMonth: currentMonth.subtract(1, "month")
        });
      }
    }
  }
  render() {
    const { currentMonth, currentWeek, weekViwe } = this.state;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <div className="calendar">
              <Header
                currentMonth={currentMonth}
                prevMonth={this.prevMonth}
                nextMonth={this.nextMonth}
                prevWeek={this.prevWeek}
                nextWeek={this.nextWeek}
                weekView={this.weekView}
                monthView={this.monthView}
                weekViwe={weekViwe}
                currentWeek={currentWeek}
              />
              <WeekDaysRow />
              <MonthBox
                weekViwe={weekViwe}
                currentWeek={currentWeek}
                currentMonth={currentMonth}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Celander;

// export default () => {
//   const [currentMonth, setMonth] = useState(moment());
//   const nextMonth = () => {
//     setMonth(currentMonth.add(1, "month"));
//   };
//   const prevMonth = () => {
//     setMonth(currentMonth.subtract(1, "month"));
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={12}>
//           <div className="calendar">
//             <Header
//               currentMonth={currentMonth}
//               prevMonth={prevMonth}
//               nextMonth={nextMonth}
//             />
//             <Week />
//             <MonthBox currentMonth={currentMonth} />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
