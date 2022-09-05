import { useState, useEffect } from "react"
import dateFormat from "dateformat";

export default function CheckboxTitle(props) {
    const date = new Date();
    const [colorOfFraction, setColorOfFraction] = useState("white");
    useEffect(() => {
        props.valueOfCompleted == props.numberOfTasks ? setColorOfFraction("green") :   setColorOfFraction("white");
    }, [props.valueOfCompleted]);
    return (
        <div className="title">
            <h2 className="today">Today</h2>
            <h4>{dateFormat(date, "ddd d mmmm")}</h4>
            <div className="end">
                {/* <div className="filter-with-text">
                    <div className="filter-img">
                        <Image src={filter} alt="filter" />
                    </div>
                    <h3>View</h3>
                </div> */}
                <h2 className="outof">{props.valueOfCompleted}/{props.numberOfTasks}</h2>
            </div>
            <style jsx>{`
                .title {
                    display: flex;
                    width: 1220px;
                }

                .modal {
                    margin-top: 7px;
                }

                .title > h2 {
                    font-weight: 500;
                }

                .today {
                    color: white;
                }

                .title > h4 {
                    color: white;
                    font-weight: lighter;
                    margin-top: 28px;
                    margin-left: 5px;
                }

                // .filter-img {
                //     min-height: 0%;
                //     min-width: 0%;
                //     height: 22px;
                //     width: 25px;
                //     margin-left: 20px;
                // }

                // .filter-with-text {
                //     display: flex;
                //     flex-direction: row;
                //     align-items: center;
                //     color: white;
                //     margin-top: 6px;
                // }

                // .filter-with-text > h3 {
                //     font-weight: 400;
                //     margin-top: 26px;
                //     margin-left: 5px;
                //     font-size: 21px;
                // }

                .outof {
                    font-weight: 400;
                    padding-top: 3px;
                    font-size: 23px;
                    color: ${colorOfFraction};
                }

                .end {
                    display: flex;
                    flex-direction: row;
                    margin: auto;
                    margin-right: 1px;
                }
            `}</style>
        </div>
    )
}