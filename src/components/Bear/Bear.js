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
                <h2 className="speechColumn Left"><img alt="" className="code" src={code}></img>Do not forget to RVSP by July 9th!</h2>
                {/* <h2 className="speechColumn Mid">?asdas</h2> */}
            </div>
            <img className="bear" src={bear} alt=""/>
        </div>
    )
}

export default Bear;