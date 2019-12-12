import { connect } from "react-redux";
import { dragEvent } from "../../redux/actions/eventDispatcher";
import DateBox from "./DateBox";

const mapStateToprops = state => ({
  events: state.event.events,
  shouldUpdateList: state.event.shouldUpdateList
});

const mapDispatchToProps = {
  dragEvent
};

export default connect(mapStateToprops, mapDispatchToProps)(DateBox);
