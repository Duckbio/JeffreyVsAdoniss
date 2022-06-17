import React, {useRef, useState, useEffect} from "react";
import GoldAdonisImg from "../images/adonisgold.png"
import PurpleAdonisImg from "../images/adonispurple.png"
import DiscipleImg from "../images/disciple.png"
import JeffreyImg from "../images/jeffrey.png"
import TrueJeffreyImg from "../images/truejeffrey.png"
import data from "../data"
import Image from "next/image"
import cookies from 'js-cookie'

function Bar({valueOfAdd} ) { 
    var total = 0;
    data.forEach(element => {
        if(element.positive === true) {
            total+=element.value;
        }
    });
    var actualValue = parseFloat(cookies.get('potential'));
    actualValue += (valueOfAdd / total) * 100;
    if (actualValue > 100) {
        actualValue = 100;
    }
    console.log(actualValue);
    useEffect(() => {
        cookies.set('potential', actualValue, {expires: 1});
    }, [actualValue]);
    return (
        <div className="main">
            <div className="imgs">
                <div className="trueJeffrey"><Image src={TrueJeffreyImg} /></div>
                <div className="jeffrey"><Image src={JeffreyImg} /></div>
                <div className="disciple"><Image src={DiscipleImg} /></div>
                <div className="purpleAdonis"><Image src={PurpleAdonisImg} /></div>
                <div className="goldAdonis"><Image src={GoldAdonisImg} /></div>
            </div>
            <meter id="bar" value={actualValue} min="0" max={100} optimum={100}></meter>
            <div className="values">
                <span id="zero">0<span>%</span></span>
                <span id="twentyfive">25<span>%</span></span>
                <span id="fifty">50<span>%</span></span>
                <span id="seventyfive">75<span>%</span></span>
                <span id="onehundred">100<span>%</span></span>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                meter {
                    width: 71.09vw;
                    height: 30px;
                    border-radius: 5px;
                    background: #F95151;
                    -webkit-appearance: none;
                }
                
                meter:-moz-meter-sub-optimum::-moz-meter-bar {
                    background:#53F953;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                }
                
                meter:-moz-meter-optimum::-moz-meter-bar {
                    background:#53F953;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 0px;
                    border-top-right-radius: 0px;
                }
                
                .main {
                    display: flex;
                    flex-direction: column;
                    margin-left: 13.1vw;
                }
                
                .imgs {
                    display: flex;
                    width: 71.09vw;
                    justify-content: space-between;
                    margin-top: 75px;
                    margin-bottom: 5px;
                }
                
                .trueJeffrey, .jeffrey, .disciple, .purpleAdonis, .goldAdonis {
                    width: 47px;
                    height: 47px;
                    /* margin-right: calc((71.09vw - 225px) / 4); */
                }

                .disciple {
                    overflow: hidden;
                }
                
                .values {
                    display: flex;
                    justify-content: space-between;
                    width: 70.7vw;
                    color: white;
                    font-size: large;
                    padding-left: 6px;
                }
                
                span > span {
                    font-size: 7px;
                }
            `}</style>
        </div>
    );
}

export default Bar;

// const listRef = useRef();
    // const trueJeffreyRef = useRef();
    // const [width, setWidth] = useState();
    // const [margin, setMargin] = useState();
    // const getListSize = () => {
    //     const newWidth = listRef.current.clientWidth;
    //     console.log(newWidth);
    //     setWidth(newWidth);
    // };
    // const getMarginSize = () => {
    //     const newMargin = (width - (4 * trueJeffreyRef.current.clientWidth)) / 4;
    //     console.log(width);
    //     setMargin(newMargin);
    // };
    // useEffect(() => {
    //     window.addEventListener("resize", getListSize());
    //     // window.addEventListener("resize", getMarginSize());
    // }, []); // 14.14vw

// var i = total / 4;
    // var x = [1, 2, 3];
    // var y = x.map(d => (d * i).toFixed(0));
