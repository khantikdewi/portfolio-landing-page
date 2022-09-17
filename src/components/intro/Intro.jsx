import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current,{
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Developer", "Graphic Designer", "Programmer"]
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Khanti Kusuma Dewi</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""></img>
                </a>
            </div>
        </div>
    )
}

export default Intro