import React, { Component } from "react";
import moment from "moment";
import { Container, Row, Col } from "reactstrap";
import Week from "../components/WeeksRow";
import MonthBox from "../components/MonthBox";
import Header from "../components/Header";

class Celander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: moment()
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
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
  render() {
    const { currentMonth } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <div className="calendar">
              <Header
                currentMonth={currentMonth}
                prevMonth={this.prevMonth}
                nextMonth={this.nextMonth}
              />
              <Week  />
              <MonthBox currentMonth={currentMonth} />
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
