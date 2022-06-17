import React from "react";
import '../Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
    return (
        <footer> 
            {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
            <p>h1</p>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                .footer {
                    display: flex;
                    align-self: center;
                    justify-content: space-around;
                    background-color: #161619;
                }
            `}</style>
        </footer>
    );
}

export default Footer;