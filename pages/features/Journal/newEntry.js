import React, { useState, useEffect, useRef, Spinner } from "react";

export default function newEntry() {
    const refElem = useRef(0);
    const [value, setValue] = useState('');
    // var turnpis = 0;
    // const [messageLastScrollHeight, setMessageLastScrollHeight] = useState(0);
    // useEffect(() => {
    //     setMessageLastScrollHeight(refElem.current.scrollHeight);
    //     console.log("messageLastScrollHeight_before", messageLastScrollHeight)
    // }, [refElem]) //Ok so this is really scuffed, but basically refElem.current is equal to 0 for the first few miliseconds, which sets messageLastScrollHeight to 0, which then makes it so that rows gets 1 row added in the first input, even though it shouldn't. I hope this makes enough sense
    // const [scrollHeight, setScrollHeight] = useState();
    useEffect(() => {
        // const newScrollHeight = refElem.current.scrollHeight;
        // console.log(refElem.current.scrollHeight)
        // setScrollHeight(newScrollHeight);
        // setMessageLastScrollHeight(refElem.current.scrollHeight);
        refElem.current.height = 0;
        refElem.current.height = Math.min(refElem.current.scrollHeight, 200);
        console.log(refElem.current.height)
    }, [refElem.current.scrollHeight])
    console.log(refElem.current.height)
    function handleChange(e) {
        // var rows = parseInt(refElem.current.rows);
        // console.log("messageLastScrollHeight", messageLastScrollHeight)
        // console.log("rows_before", rows)
        // console.log("scrollHeight", scrollHeight)
        // refElem.current.rows = 1
        // console.log("rows_after", refElem.current.rows)
        // if (scrollHeight > messageLastScrollHeight) {
        //     rows++;
        // } else if (rows > 1 && scrollHeight < messageLastScrollHeight) {
        //     rows--;
        // }
        // console.log("rows_after_after", rows)
        // console.log("messageLastScrollHeight_after", messageLastScrollHeight)
        // refElem.current.rows = rows;
        setValue(e.target.value)
    }
    return (
        <div>
            <h1 className="title">Entry 1</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est vel lorem auctor ornare nec vitae nisl. Quisque quis erat iaculis, pharetra turpis at, sollicitudin diam. Nullam pretium scelerisque risus in hendrerit. Vestibulum sollicitudin eu arcu nec scelerisque. Donec congue ac enim vitae porttitor. Morbi feugiat gravida congue. Nulla pulvinar enim lectus, rhoncus fringilla felis auctor malesuada. Integer vel sapien elit. Curabitur ac turpis vitae elit lobortis condimentum in nec tellus. Vestibulum blandit tincidunt turpis vel gravida. Maecenas euismod sit amet augue eget rutrum. Pellentesque cursus ut purus a cursus. Suspendisse et justo in nulla ullamcorper pharetra. Curabitur vulputate tristique turpis, porta viverra dui sodales non. Vestibulum condimentum eros tellus, in suscipit urna vehicula sit amet.</p>
            <p>Quisque ac tristique libero. Proin efficitur justo ut tellus aliquet facilisis. Curabitur ut imperdiet felis, nec mollis felis. Suspendisse et pellentesque justo. Fusce facilisis felis turpis. Nunc neque augue, blandit in tempor vel, lobortis ut mi. Donec nibh leo, congue ac efficitur consectetur, varius ac lacus. Ut dapibus maximus magna vitae porttitor. Aliquam hendrerit maximus felis, nec fringilla tortor eleifend quis. Vestibulum eleifend fermentum tincidunt. Ut in viverra mauris. Suspendisse volutpat eu mauris ultrices feugiat. Curabitur et urna ornare, iaculis ante vitae, mollis elit. Donec lobortis erat libero, id facilisis odio bibendum at. Fusce ac tincidunt sapien, sed sodales quam. Aenean at feugiat erat.</p> */}
            <textarea ref={refElem} rows={0} cols={0} autoFocus placeholder="Today I..." onChange={(e) => handleChange(e)} value={value}></textarea>
            <style jsx>{`
                .title {
                    text-align: center;
                    color: white;
                }

                p {
                    color: white;
                    padding-left: 5px;
                    font-size: 1.1rem;
                }

                textarea {
                    resize: none;
                    background: none;
                    border: none;
                    outline: none;
                    color: white;
                    font-size: 1.1rem;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}