import { useState } from "react";
var numberOfTicked = 0;

export default function Checkbox(props) {
    const [checkboxTick, setCheckboxTick] = useState(false);
    // const [numberOfTicked, setNumberOfTicked] = useState(0);
    function handleChange(e) {
        setCheckboxTick(e.target.checked);
        e.target.checked ==  true ? numberOfTicked += 1 : numberOfTicked -= 1;
        props.setValueOfCompleted(numberOfTicked);
    }
    return (
        <div className="checkbox-and-date">
            <div className="checkbox">
                <label className="checkbox-label">
                    <input type="checkbox" id="checkbox" checked={checkboxTick} onChange={handleChange}/>
                    <span className="checkbox-custom"></span>
                </label>
                <label htmlFor="checkbox" className="description-label">{props.task}</label>
            </div>
            <h4 className="date">18:00</h4>
            

            <style jsx>{`
                .checkbox-and-date {
                    width: 1220px;
                }

                .checkbox {
                    display: flex;
                    align-items: center;
                }
                
                input[type=checkbox] {
                    visibility: hidden;
                }        

                .checkbox-custom {
                    border-radius: 15px;
                    background: transparent;
                    border: 3px solid white;
                    width: 17px;
                    display: inline-block;
                    height: 17px;
                }

                /* Specify the background color to be
                shown when checkbox is checked */
                .checkbox-label input:checked ~ .checkbox-custom {
                    background-color: white;
                }
                
                /* Checkmark to be shown in checkbox */
                /* It is not be shown when not checked */
                .checkbox-custom:after {
                    content: "";
                    position: absolute;
                    display: none;
                }
                
                /* Display checkmark when checked */
                .checkbox-label input:checked ~ .checkbox-custom:after {
                    display: block;
                }

                /* Styling the checkmark using webkit */
                /* Rotated the rectangle by 45 degree and 
                showing only two border to make it look
                like a tickmark */
                .checkbox-label .checkbox-custom:after {
                    margin-left: 3.4px;
                    margin-top: -0.2px;
                    width: 6px;
                    height: 12px;
                    border: solid green;
                    border-width: 0 4px 4px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

                .description-label {
                    font-size: 24px;
                    margin-bottom: 6px;
                    margin-left: 5px;
                }

                .checkbox-and-date {
                    display: flex;
                    flex-direction: column;
                }

                .date {
                    font-weight: 400;
                    font-size: 18px;
                    margin-left: 49px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
            `}</style>
        </div>
    )
}


//When I was young
//Alone with all my thoughts
//I thought I'd be alone
//In my journey through hell
//But then you came along
//A lover in disguise
//My heart skipped a beat
//And soon my demise