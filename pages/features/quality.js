import qualitiesList from '../../qualitiesList'
import generate from '../../generateASCII'
import Qualities from "../../componenets/Quality/Qualities"
import Navbar from '../../componenets/Navbar'
import react, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function quality() {
    const [submitted, setSubmitted] = useState(0);
    const [total, setTotal] = useState(0);
    var final = 0;
    qualitiesList.forEach(element => {
        final += element.value;
    })
    final = final / qualitiesList.length;
    //if(Cookies.get('submitted') != undefined) {
      //  setSubmitted(Cookies.get('submitted'));
    //}
    useEffect(() => {
        //Cookies.set('submitted', submitted);
        setSubmitted((submitted >= 8) ? 8 : submitted);
        if(submitted == 8) {
            const submittedValues = JSON.parse(Cookies.get('submittedValues'))
            submittedValues.forEach(element => {
                setTotal(prevTotal => prevTotal + parseInt(element.value));
            });
        } else {
            setTotal(0);
        }
    }, [submitted]);
    return (
        <div className='all-elements'>
            <Navbar />            
            <div className='all-qualities'>
                <Qualities setSubmitted={setSubmitted}/>
            </div>
            <div className='parent-all-around-quality'>
                <div className='all-around-quality'><p>Average</p><p className='ascii'>{generate('⬛⬜', 10, (total / 8)/10)}</p></div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .all-elements {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .all-qualities {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    // margin-right: 34.2vw;
                }
                
                .parent-all-around-quality {
                    display: flex;
                    justify-content: flex-end;
                }

                p {
                    color: white;
                    font-size: clamp(0.5rem, 4vw, 1.4rem);
                }

                .all-around-quality {
                    display: flex;
                    align-items: center;
                    margin-top: -10px;
                    color: white;
                }
                
                .all-around-quality > h3 {
                    margin-right: 1.3vw;
                }

                .ascii {
                    margin-left: 5px;
                }
            `}</style>
        </div>
    )
}