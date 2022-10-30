import React, {useState, useEffect, forwardRef } from "react";
import GoldAdonisImg from "../../images/adonisgold.png"
import PurpleAdonisImg from "../../images/adonispurple.png"
import DiscipleImg from "../../images/disciple.png"
import JeffreyImg from "../../images/jeffrey.png"
import TrueJeffreyImg from "../../images/truejeffrey.png"
import data from "../../data"
import Image from "next/image"
import cookies from 'js-cookie'

const Bar = forwardRef((props, ref) => {
    const [actualValue, setActualValue] = useState();
    useEffect(() => {
        var potential;
        
        if (cookies.get('potential') === undefined) {
            potential = 0;
        } else {
            try {
                potential = cookies.get('potential');
            } catch {
                potential = 0;
            }
        }
        let val = parseFloat(potential);
        if (val > 100) val = 100;
        setActualValue(val)
    }, []);

    useEffect(() => {
        var trueValueOfAdd = 0;
        var total = 0;
        data.forEach(element => {
            if (element.positive === true) {
                total += element.value;
            }
        });
        if(props.valueOfAdd == 0) {
            trueValueOfAdd = (cookies.get('valueOfAdd') != undefined) ? cookies.get('valueOfAdd') : 0;
        } else if (cookies.get('valueOfAdd') != undefined) {
            trueValueOfAdd = (parseInt(cookies.get('valueOfAdd')) < 0) ? 0 : parseInt(cookies.get('valueOfAdd')) + props.valueOfAdd;
            trueValueOfAdd = (trueValueOfAdd >= 56) ? 56 : trueValueOfAdd;
            cookies.set('valueOfAdd', trueValueOfAdd, { expires: 1});
        } else {
            trueValueOfAdd += props.valueOfAdd;
            trueValueOfAdd = (trueValueOfAdd >= 56) ? 56 : trueValueOfAdd;
            cookies.set('valueOfAdd', trueValueOfAdd, { expires: 1});
        }
        let val2 = (trueValueOfAdd / total) * 100;
        if (val2 > 100) {
            cookies.set('potential', 100, { expires: 1 });
            val2 = 100;
        } else if (val2 <= 0) {
            cookies.set('potential', 0, { expires: 1 });
            val2 = 0;
        } else {
            setActualValue(val2);
            cookies.set('potential', val2, { expires: 1 });
        }
        setActualValue(val2);
    }, [props.clickedOrNot])
    return (
        <div className="main">
            {actualValue === undefined ? <div>Loading...</div> :
                <>
                    <div className="imgs">
                        <div className="trueJeffrey"><Image src={TrueJeffreyImg} /></div>
                        <div className="jeffrey"><Image src={JeffreyImg} /></div>
                        <div className="disciple"><Image src={DiscipleImg} /></div>
                        <div className="purpleAdonis"><Image src={PurpleAdonisImg} /></div>
                        <div className="goldAdonis"><Image src={GoldAdonisImg} /></div>
                    </div>
                    <progress id="bar" ref={ref} value={actualValue} max="100"></progress>
                    <div className="values">
                        <span id="zero">0<span>%</span></span>
                        <span id="twentyfive">25<span>%</span></span>
                        <span id="fifty">50<span>%</span></span>
                        <span id="seventyfive">75<span>%</span></span>
                        <span id="onehundred">100<span>%</span></span>
                    </div>
                </>
            }


            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                progress {
                    width: 100%;
                    height: 30px;
                    background: #F95151;
                    border: none; /* Needed for Firefox */
                    border-radius: 5px;
                    color: #fff; /* For IE10 */
                    -webkit-appearance: none; /* Needed for WebKit/Blink */
                }           
                
                progress::-webkit-progress-bar {
                    background-color: #F95151;
                    border-radius: 5px;
                }

                progress::-webkit-progress-value {
                    background-color: #53F953;
                    border-radius: 5px;
                    // border-top-left-radius: 0px;
                    // border-bottom-left-radius: 0px;
                }

                progress::-moz-progress-bar {
                    background-color: #53F953;
                    border-radius: 5px;
                }
                

                .delete {
                    width: 100%;
                }
                
                .main {
                    display: flex;
                    flex-direction: column;
                    margin: 0 auto;
                }
                
                .imgs {
                    display: flex;
                    width: 100%;
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
});

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

//TODO
// When the website refreshe, the prop value returns to 0, while the cookie value is higher, so when click a button,
// it goes to the case in which the cookies exists and we set the trueValueOfAdd to the value of the prop, which is not the true
// value! We should set it to the cookie instead and after that we could just set the prop to be the cookie + the prop value?
// This doesn't work because the cookie gets updated too, so for example if our cookie is 30 and our prop is 0, we then press
// the button and the cookie is 40 (it's the old cookie value + the prop value = 30 + 10 = 40) and the prop is 10, this is okay
// because we added 10 to both. On the second button press the cookie is 40 (the old value) + the prop (20) = 60 and the prop is
// 20, so after the first button press we should re

// we could remake the add thing.
// I made it only have the value of the button but now none of the options are running for some reason!



// meter::-webkit-meter-bar {
//     background: none; /* Required to get rid of the default background property */
//     background-color: whiteSmoke;
//     box-shadow: 0 5px 5px -5px #333 inset;
// }

// meter::-webkit-meter-optimum-value {
//     box-shadow: 0 5px 5px -5px #999 inset;
//     background-image: linear-gradient(
//         90deg, 
//         #8bcf69 5%, 
//         #e6d450 5%,
//         #e6d450 15%,
//         #f28f68 15%,
//         #f28f68 55%,
//         #cf82bf 55%,
//         #cf82bf 95%,
//         #719fd1 95%,
//         #719fd1 100%
//     );
//     background-size: 100% 100%;
// }

// meter:-moz-meter-sub-optimum::-moz-meter-bar {
//     background: #53F953;
//     border-top-left-radius: 0px;
//     border-bottom-left-radius: 0px;
// }

// meter:-moz-meter-optimum::-moz-meter-bar {
//     background: #53F953;
//     border-top-left-radius: 5px;
//     border-bottom-left-radius: 5px;
//     border-bottom-right-radius: 0px;
//     border-top-right-radius: 0px;
// }