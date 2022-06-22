import React from "react";
import { informationInfo } from "./informationInfo";
import "./information.css";

const Information = () => {
    return (
        <div id="information" className="infoContainer">
            <div className="headers">
                <p className="headerTitle" >Information</p>
            </div>
            <div className="infoContentContainer">
                {
                    informationInfo.map((info, specialInfo) => (
                        <div key={specialInfo} className="infoCard">
                            <div className="infoCardContent">
                                <div className="infoCardFront">
                                    <div style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "25px", marginTop: "5px" }} key="event">{info.event}</div>
                                    <img style={{ objectFit: "contain", width: "55%", margin: "20px" }} src={info.eventImg.img} alt="" key="img" />
                                    <div style={{ fontFamily: "'Quattrocento', serif", fontSize: "18px", marginBottom: "5px" }} key="location">{info.location}</div>
                                    <div style={{ fontFamily: "'Quattrocento', serif" }} key="date">{info.date}</div>
                                </div>
                                <div className="infoCardBack" style={{ backgroundColor: info.eventImg.bkgColor }}>
                                    <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }} className="rowCard">
                                        <img style={{ objectFit: "contain", width: "25%", margin: "20px" }} src={info.eventImg.img} alt="" key="img" />
                                        <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px", alignSelf: "center" }}>
                                            <div style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "18px", marginBottom: "5px", textAlign: "center" }} key="event">{info.event}</div>
                                            <div style={{ fontFamily: "'Quattrocento', serif", fontSize: "16px", marginBottom: "5px", textAlign: "center" }} key="location">{info.location}</div>
                                            <div style={{ fontFamily: "'Quattrocento', serif", fontSize: "14px", textAlign: "center" }} key="date">{info.date}</div>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            info.details.map((detail, specialDetail) => (
                                                <p key={specialDetail} className="details" style={info.details.length >= 3 ? { fontFamily: "'Quattrocento', serif", marginBottom: "10px", textAlign: "center", fontSize: "16px" } : { fontFamily: "'Quattrocento', serif", marginBottom: "15px", textAlign: "left", fontSize: "18px" }}>{detail}</p>
                                            ))
                                        }
                                    </div>
                                    <p className="extension">For more details&emsp;<a className="button-28" href={info.extension} target="_blank" rel="noreferrer noopener">Click Here</a></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Information;