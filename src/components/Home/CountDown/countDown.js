import React, { Component } from "react";
import "./dateTime.css";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      seconds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "Congratulations!"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("Jul 30, 2022 15:030:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div>
        <div className="timer">
          <h1>Wedding <strong>Countdown</strong></h1>
          <div className="time">
            <span className="time">
              {days} Days  |
            </span>
            <span className="time">
              {hours} Hours  |
            </span>
            <span className="time">
              {minutes} Minutes  |
            </span>
            <span className="time">
              {seconds} Seconds
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
