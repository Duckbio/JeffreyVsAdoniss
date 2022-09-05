import React, { forwardRef } from "react";
import QualitiesFinal from "./QualitiesFinal";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import generateASCII from '../../generateASCII';

var submittedValues = [];
export default function QualitiesNotDefined(props) {
    const [submittedOrNot, setSubmittedOrNot] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (Cookies.get('submittedValues') != undefined) {
            const submittedValues = JSON.parse(Cookies.get('submittedValues'))
            submittedValues.forEach(element => {
                if (element.description == props.description) {
                    setValue(element.value);
                    setSubmittedOrNot(true);
                    props.setSubmitted(prevSubmitted => prevSubmitted + 1);
                }
            });
        }            
    }, [])

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        const valueToAdd = {description: props.description, value: value};
        submittedValues.push(valueToAdd);
        Cookies.set('submittedValues', JSON.stringify(submittedValues));
        setSubmittedOrNot(true);
        props.setSubmitted(prevSubmitted => prevSubmitted + 1);
        e.preventDefault();
    }
    
    function Form() {
        return ( 
            <div className="flex">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="number" name="value" min={0} max={10} onChange={(e) => handleChange(e)} value={value}/>
                    <button type="submit">Submit</button>
                </form>
                <style jsx>{`
                    .flex {
                        display: flex;
                        justify-content: center;
                    }

                    form {
                        display: flex;
                        align-items: center;
                    }

                    form > input {
                        border-radius: 3px;
                        height: 2.5vh;
                        font-family: 'Inter', sans-serif;
                        width: 50%;
                    }
        
                    form > button {
                        font-family: 'Inter', sans-serif;
                        font-weight: 400;
                        // font-size: clamp(0.4rem, 2vw, 1.4rem);
                        color: black;
                        margin-left: 10px;
                        height: clamp(2.5vh, 3vh, 5vh)
                    }
                `}</style>
            </div>
        )
    }
    
    function ASCII(props) {
        return (
            <div>
                <div className="bar"><p>{generateASCII('⬛⬜', 10, props.value/10)}</p></div>
                <style jsx>{`
                    div {
                        display: flex;
                        margin-right: 5px;
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                    .bar {
                        color: white;
                        align-self: center;
                    }
                `}</style>
            </div>
        )
    }

    function Reset() {
        if (Cookies.get('submittedValues') != undefined) {
            const submittedValues = JSON.parse(Cookies.get('submittedValues'))
            for (let i = 0; i < submittedValues.length; i++) {
                if (submittedValues[i].description == props.description) {
                    setValue(0);
                    setSubmittedOrNot(false);
                    submittedValues.splice(i, 1);
                    Cookies.set('submittedValues', JSON.stringify(submittedValues));
                    props.setSubmitted(prevSubmitted => prevSubmitted - 1);
                }
            }
        }   
    }

    return (
        <div className="qualities">
            <p>{props.description}</p>
            {(submittedOrNot) ? <ASCII value={value} /> : <Form />}
            <button onClick={Reset}>Reset</button>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .qualities {
                    display: flex;
                    justify-content: flex-end;
                }
                            
                .qualities > p {
                    margin-right: 1.3vw;
                    // font-size: clamp(6px, 20.8px, 32px);
                    font-size: clamp(0.5rem, 4vw, 1.4rem);
                    color: white;
                    align-self: center;
                }

                .qualities > button {
                    align-self: center;
                }
            `}</style>
        </div>
    )
}