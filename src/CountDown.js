import "rc-time-picker/assets/index.css";
import React from "react";
import ReactDom from "react-dom";
import moment from "moment";
import TimePicker from "rc-time-picker";
import Countdown from "react-countdown";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { min: 5, sec: 6 };
  }
  render() {
    return (
      <div>
        <TimePicker
          value={moment(`${this.state.min}:${this.state.sec}`, "mm:ss")}
          showHour={false}
          inputReadOnly={true}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDom.render(<Test />, rootElement);

export default Countdown;