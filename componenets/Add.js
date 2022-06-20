import React from "react"
import plus from "../images/plus.png"
import minus from "../images/minus.png"
import Image from "next/dist/client/image"
var val = 0;

function Add(props) {
    function add() {
        if (props.positive===false && val<-props.value) {
            val = 0;
        } else if (props.positive===false && val>=0) { 
            val += props.value;
        } else if (props.positive===true) { 
            val += props.value;
        }
        if (val >= 100) {
            val = 100;
        }
        props.setValueOfAdd(val);
    }
    function subtract() {
        if (props.positive===true && val<props.value) {
            val = 0;
        } else if (props.positive===false && val>=0) { 
            val -= props.value;
        } else if (props.positive===true) {
            val -= props.value;
        }
        props.setValueOfAdd(val);
    }
    var order;
    if (props.positive === true) {
        order = <div><button onClick={add} type="submit" className="plus"><Image src={plus} alt="plus" /></button><button onClick={subtract} type="submit" className="minus"><Image src={minus} alt="minus" /></button></div>;
    } else {
        order = <div><button onClick={subtract} type="submit" className="minus"><Image src={minus} alt="minus" /></button><button onClick={add} type="submit" className="plus"><Image src={plus} alt="plus" /></button></div>;
    }
    return (
        <div className="buttons">
            <label>{props.description}</label>
            <button onClick={add} type="submit" className="plus"><Image src={plus} alt="plus" /></button>
            <button onClick={subtract} type="submit" className="minus"><Image src={minus} alt="minus" /></button>
        
            <style jsx>{` 
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .buttons {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                }
                
                button {
                    background: none;
                    border: none;
                    margin-top: 4px;
                }
                
                label {
                    margin-right: 2px;
                    font-size: 20px;
                    color: white;
                }
                
                .plus, .minus{
                    width: 24px;
                    height: 24px;   
                    margin: 0px;
                    padding-top: 6px;
                    margin-right: 5px;
                    cursor: pointer;
                }                
            `}</style>
        </div>
    );
}

export default Add;