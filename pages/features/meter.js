import React, {useRef, useState, useEffect} from "react";
import Navbar from "../../componenets/Navbar"
import Bar from "../../componenets/Meter/Bar"
import Add from "../../componenets/Meter/Add"
import data from "../../data"

var columnLength;
export default function meter() {
    const [valueOfAdd, setValueOfAdd] = useState(0);
    const [clickedOrNot, setClickedOrNot] = useState(0);
    const add = data.map(add => {
        return <Add 
            setValueOfAdd={setValueOfAdd} 
            setClickedOrNot={setClickedOrNot}
            description={add.description}
            value={add.value}
            positive={add.positive}
            order={add.order}
            key={add.order}
        />
    })
    const refElem = useRef(0);
    const [width, setWidth] = useState(0);
    const getListSize = () => {
        const newWidth = refElem.current.clientWidth;
        setWidth(newWidth);
        switch(true) {
            case (newWidth <= 634):
                columnLength = 'auto auto'
                break;
            case (634 < newWidth && newWidth <= 774):
                columnLength = 'auto auto auto';
                break;
            default:
                columnLength = 'auto auto auto auto'
        }
    };
    useEffect(() => {
        window.addEventListener("resize", getListSize);
    }, []);
    useEffect(() => {
        const newWidth = refElem.current.clientWidth;
        setWidth(newWidth);
        switch(true) {
            case (newWidth <= 634):
                columnLength = 'auto auto'
                break;
            case (634 < newWidth && newWidth <= 774):
                columnLength = 'auto auto auto';
                break;
            default:
                columnLength = 'auto auto auto auto';
        }
    }, [width])
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Navbar />
            <div className="holder">
                <Bar ref={refElem} valueOfAdd={valueOfAdd} clickedOrNot={clickedOrNot}/>
                <div className='all-buttons'>
                    {add}
                </div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .all-buttons {
                    display: grid;
                    grid-template-columns: ${columnLength};
                    margin-top: 25px;
                    width: ${width}px;
                    margin: 0 auto;
                }

                .holder {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                }
            
                @media only screen and (max-width: 534px) {
                    label {
                        font-size: 10px;
                    }
                }
            `}</style>
        </div>
    );
}

// function handleClick() {
//     // Simply omit context parameter.
//     // Parse
//     const cookies = parseCookies()
//     console.log( cookies.potential );
  
//     // Set
//     setCookie(null, 'potential', 40, {
//       maxAge: 30 * 24 * 60 * 60,
//       path: '/',
//     })
  
//     // Destroy
//     // destroyCookie(null, 'fromClient')
//   }
  
  