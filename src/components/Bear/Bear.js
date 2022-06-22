import React from "react";
import "./Bear.css"
import bear from "../../images/bear.png"
import code from "../../images/code.png"
import fund from "../../images/fund.png"

function Bear() {
    return (
        <div id="reminder" className="bearAtom">
            <div>
                <h2 className="reminderH2"><p className="reminderP">Reminder</p></h2>
            </div>
            <div className="speechRow">
                <h2 className="speechColumn"><a href="https://www.zola.com/wedding/royandsharon2022/registry" target="_blank" rel="noreferrer"><img alt="" className="code" src={fund}></img></a>Gift money to the newlywed!</h2>
                <h2 className="speechColumn"><a href="https://www.zola.com/wedding/royandsharon2022/rsvp" target="_blank" rel="noreferrer"><img alt="" className="code" src={code}></img></a>Do not forget to RVSP by July 9th!</h2>
            </div>
            <a href="https://github.com/danchanyoungkim">
                <img className="bear" src={bear} alt="" />
            </a>
        </div>
    )
}

export default Bear;