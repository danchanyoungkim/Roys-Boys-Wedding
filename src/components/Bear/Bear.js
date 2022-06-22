import React from "react";
import "./Bear.css"
import bear from "../../images/bear.png"
import code from "../../images/code.png"

function Bear() {
    return (
        <div id="reminder" className="bearAtom">
            <div>
                <h2 className="reminderH2"><p className="reminderP">Reminder</p></h2>
            </div>
            <div className="speechRow">
                    <h2 className="speechColumn Left"><a href="https://www.zola.com/wedding/royandsharon2022"><img alt="" className="code" src={code}></img></a>Do not forget to RVSP by July 9th!</h2>
            </div>
            <a href="https://github.com/danchanyoungkim">
                <img className="bear" src={bear} alt=""/>
            </a>
        </div>
    )
}

export default Bear;