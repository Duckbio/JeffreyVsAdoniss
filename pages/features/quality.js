import qualitiesList from '../../qualitiesList';
import generate from '../../generateASCII';
import Qualities from "../../componenets/Qualities"
import react from 'react';
import Navbar from '../../componenets/Navbar';

export default function quality() {
    const qualities = qualitiesList.map(quality => {
        return <Qualities 
            description={quality.description}
            value={quality.value}
            key={quality.description}
        />
    })
    var final = 0;
    qualitiesList.forEach(element => {
        final += element.value;
    })
    final = final / qualitiesList.length;
    return (
        <div>
            <Navbar />            
            <div className='all-qualities'>
            {qualities}
            </div>
            <div className='parent-all-around-quality'>
                <div className='all-around-quality'><h3>Average quality</h3>{generate('⬛⬜', 10, final/10)}</div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .all-qualities {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    margin-right: 35.87vw;
                }
                
                .parent-all-around-quality {
                    display: flex;
                    justify-content: flex-end;
                }

                h3 {
                    color: white;
                }

                .all-around-quality {
                    display: flex;
                    align-items: center;
                    margin-right: 35.87vw;
                    margin-top: -10px;
                    color: white;
                }
                
                .all-around-quality > h3 {
                    margin-right: 1.3vw;
                }
            `}</style>
        </div>
    )
}