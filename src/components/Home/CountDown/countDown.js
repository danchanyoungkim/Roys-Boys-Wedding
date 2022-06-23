// import React, { useEffect, useState } from "react";
// import "./dateTime.css"

// function CountDown() {
//   const calculateTimeLeft = () => {
//     let year = new Date().getFullYear();
//     const difference = +new Date(`${year}-07-30`) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         Minutes: Math.floor((difference / 1000 / 60) % 60),
//         Seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {    
//     timerComponents.push(
//       <span className="time" id="interval" key={interval}>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });

//   return (
//     <div>
//       <div className="timer">
//         <h1>Wedding <strong>Countdown</strong></h1>
//         <div className="time">
//           {timerComponents.length ? timerComponents : <span>Congratulations!</span>}
//         </div>
//       </div>
//     </div>
//   );
// }


// export default CountDown;

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
      secounds: 0,
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
        time_up: "TIME IS UP"
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
      <div id="countdown">
        <div className="col-4">
          <div className="box">
            <p id="day">{days}</p>
            <span className="text">Days</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="hour">{hours}</p>
            <span className="text">Hours</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="minute">{minutes}</p>
            <span className="text">Minutes</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="second">{seconds}</p>
            <span className="text">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
