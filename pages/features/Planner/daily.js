import Navbar from "../../../componenets/Navbar"
import SideMenu from "../../../componenets/Planner/SideMenu.js"
import Checkbox from "../../../componenets/Planner/Checkbox.js"
import CheckboxTitle from "../../../componenets/Planner/Title"
import filter from "../../../images/filter.png"
import Image from "next/dist/client/image"
import plans from "../../../plans"
import { useEffect, useState } from "react"
import cookies from 'js-cookie'
import Popup from "reactjs-popup"

var descArr = [cookies.get('description')];
var title = cookies.get('title');
export default function daily() {
    // for(var i = 0; i <= titleArr.length; i++) {
    //     var string = titleArr[i];
    //     console.log(string.indexOf(","));
    //     // if(string.indexOf(",") == 0) {
    //     //     titleArr[i].replace(",", "");
    //     // }
    // }
    var tasks;
    var numberOfTasks;
    const [valueOfCompleted, setValueOfCompleted] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [checkboxes, setCheckboxes] = useState([]);
    for(var i in plans) {
        const object = plans[i];
        if(object.type == "daily") {
            tasks = object.plans;
            numberOfTasks = object.plans.length;
        }
    }
    useEffect(() => {
        setCheckboxes(tasks.map(task => {
            return (
                <div>
                    <Checkbox 
                        setValueOfCompleted={setValueOfCompleted}
                        task={task}
                        key={task}
                    /> 
                    <hr></hr>
                </div>   
            )
        }))
    }, [submitted])
    const Modal = function Modal() {
        // console.log('Title: ' + cookies.get('title'));
        // console.log('Desc: ' + cookies.get('description'));
        // console.log(titleArr);
        // console.log('DescriptionArrray: ' + descArr);
        const [formData, setFormData] = useState({
            title: "",
            description: "",
        });
    
        function handleChange(e) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [e.target.name]: e.target.value
                }
            })
        }
    
        function handleSubmit(e) {
            e.preventDefault(); 
            // titleArr.push(e.target.title.value);
            // descArr[descArr.length] = e.target.description.value;
            // console.log("Title: " + e.target.title.value);
            // cookies.set('title', titleArr, { expires: 1000 });
            // cookies.set('description', descArr, { expires: 1000 });
            setSubmitted(true);
        }
        // console.log(cookies.get('title'));
        return (
            <div className="popup">
                <Popup trigger={<button className="button"><h2 className="button-text"><span id="plus">+</span> Add task</h2></button>} position="bottom left">
                    {close => (
                        <form className="modal-content" onSubmit={(e) => handleSubmit(e)}>
                            <input autoComplete="off" type="text" name="title" placeholder="e.g. Review your mother" className="task-input" onChange={(e) => handleChange(e)} value={formData.username}/>
                            <input autoCapitalize="on" autoComplete="off" type="textarea" name="description" placeholder="e.g. Review your mother" className="description-input" onChange={(e) => handleChange(e)} value={formData.username}/>
                            <div className="cancel-and-submit">
                                <button className="close-button" onClick={() => {close()}}>Cancel</button>
                                <button type="submit">Add task</button>
                            </div>
                        </form>
                    )}
                </Popup>
                <style jsx>{`
                    .button {
                        background: none;
                        border: none;
                    }
                
                    .button-text {
                        color: gray;
                        font-weight: 100;
                        cursor: pointer;
                    }

                    #plus {
                        color: #db4c3f;
                        margin-right: 5px;
                        font-size: 27px;
                    }

                    .modal-content {
                        background: white;
                        display: flex;
                        flex-direction: column;
                        border-radius: 5px;
                        border: 2px solid #ffd
                    }

                    input {
                        width: 500px;
                        border: none;
                        line-height: 21px;
                        margin-left: 5px;
                    }

                    input:focus {
                        outline: none;
                    }

                    .task-input {
                        margin-top: 5px;
                    }

                    .cancel-and-submit {
                        margin-top: 5px;
                        align-self: flex-end;
                    }

                    .cancel-and-submit > button {
                        height: 30px;
                        width: 75px;
                        border-radius: 5px;
                        border: none;
                        margin-bottom: 5px;
                        margin-right: 10px;
                    }

                    .close-button {
                        background-color: #C21807;
                    }
                `}</style>
            </div>
        )
    }
    return (
        <div>
            <div style={{zIndex: 1, position: "fixed", width: "100%", top: 0}}>
                <Navbar />
            </div>
            <div className="flexbox">
                <SideMenu />
                <div className="title-and-checkboxes">
                    <CheckboxTitle valueOfCompleted={valueOfCompleted} numberOfTasks={numberOfTasks} />
                    <div className="checkboxes">
                        {checkboxes}
                    </div>
                    <div className="modal"><Modal /></div>
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .flexbox {
                    display: flex;
                    flex-direction: row;
                }

                .title-and-checkboxes {
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    padding-top: 70px;
                    margin-left: 300px;
                    width: 1220px;
                }

                .checkboxes {
                    display: flex;
                    flex-direction: column;
                    color: white;
                }
            `}</style>
        </div>
    )
}