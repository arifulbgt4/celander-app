import { connect } from "react-redux";
import EventForm from "./EventForm";
import { addEvent } from "../../redux/actions/eventDispatcher";

const mapDispatchToProps = {
  addEvent
};

export default connect(null, mapDispatchToProps)(EventForm);
