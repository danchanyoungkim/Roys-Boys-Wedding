import React from "react";
import Home from "./Home/Home";
import Information from "./Information/information";
import CountDown from "./CountDown/countDown"

const Homepage = () => {
    return (
        <div>
            <Home />
            <CountDown />
            <Information />
        </div>
    )
}

export default Homepage;