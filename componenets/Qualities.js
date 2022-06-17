import React from "react";
import generate from "../generateASCII";

function Add(props) {
    return (
        <div className="qualities">
            <h3>{props.description}</h3>
            <div className="bar">{generate('⬛⬜', 10, props.value/10)}</div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .qualities {
                    display: flex;
                    justify-content: flex-end;
                }
                
                .qualities > h3 {
                    margin-right: 1.3vw;
                    color: white;
                    align-self: center;
                }
                
                .bar {
                    color: white;
                    align-self: center;
                }
            `}</style>
        </div>
    );
}

export default Add;