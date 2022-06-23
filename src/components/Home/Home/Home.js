import React, { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Particles from "../../Particles/particles";
import "./Home.css";

import img_2 from "../../../images/2.jpg";
import img_3 from "../../../images/3.jpg";
import img_4 from "../../../images/4.jpg";
import img_5 from "../../../images/5.jpg";
import img_6 from "../../../images/6.jpg";
import img_7 from "../../../images/7.jpg";
import img_8 from "../../../images/8.jpg";
import img_9 from "../../../images/9.jpg";
import img_10 from "../../../images/10.jpg";
import img_11 from "../../../images/11.jpg";

const Home = () => {
    const displays = [
        {
            img: img_2
        },
        {
            img: img_3
        },
        {
            img: img_4
        },
        {
            img: img_5
        },
        {
            img: img_6
        },
        {
            img: img_7
        },
        {
            img: img_8
             
        },
        {
            img: img_9
        },
        {
            img: img_10
        },
        {
            img: img_11
        }
    ]

    const [opt, setOpt] = useState(0);
    const [animate, setAnimate] = useState("0");

    const navBefore = () => {
        setAnimate("1")
        if (opt===0) {
            setOpt(displays.length-1)
        } else {
            setOpt(opt-1)
        }
    }

    const navNext = () => {
        setAnimate("1")
        if(opt===displays.length-1) {
            setOpt(0);
        } else {
            setOpt(opt+1);
        }
    }

    return (
        <div id="home" className="homeContainer">
            <Particles/>
            <div className="leftHomeContainer">
                <div className="leftContentContainer">
                    <div className="nameContainer">
                        <p className="subText top">Welcome to</p>
                        <p className="homeName">Roy's Wedding Plans<span style={{fontSize: "25px", color: "lightgray"}}></span></p>
                        <p className="subText bottom">For The Boys</p>
                    </div>
                        <div className="description top">
                            <strong className='strong top'>This</strong> website is for commemorating Roy and Sharon's wedding!
                        </div>
                        <div className="description middle">
                            <strong className='strong middle'>This</strong> is for the boys, therefore, this will solely be concentrated on Roy and his close friends/brother.
                        </div>
                        <div className="description bottom">
                            <strong className='strong'>This</strong> is to make things simpler to keep up the important details.
                        </div>
                </div>
            </div>
            <div className="rightHomeContainer">
                <div className="rightContentContainer">
                    <img className="image" src={displays[opt].img} alt="description" />
                    <div className="content">
                        <p className="displayDescription" animate={animate} onAnimationEnd={() => setAnimate("0")} >{displays[opt].description}</p>
                    </div>
                    <div>
                        <NavigateBeforeIcon className="navIcon left" onClick={navBefore} />
                        <NavigateNextIcon className="navIcon right" onClick={navNext} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home