import React, {useRef, useState, useEffect} from "react";
import Navbar from "../../componenets/Navbar"
import Bar from "../../componenets/Bar"
import Add from "../../componenets/Add"
import data from "../../data"


export default function meter() {
    const [valueOfAdd, setValueOfAdd] = useState(0);
    const add = data.map(add => {
        return <Add 
            setValueOfAdd={setValueOfAdd} //There's probably a much better way to do it but whatever LMAO 
            description={add.description}
            value={add.value}
            positive={add.positive}
            key={add.description}
        />
    })
    return (
        <div>
            <Navbar />
            <Bar valueOfAdd={valueOfAdd}/>
            <div className='all-buttons'>
                {add}
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .all-buttons {
                    display: grid;
                    grid-template-columns: auto auto auto auto;
                    margin-left: 13.1vw;
                    margin-top: 25px;
                    width: 79.01vw;
                    min-width: 79.01vw;
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
  
  