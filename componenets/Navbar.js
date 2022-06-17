import React from "react";
import dropdownImg from "../images/dropdown.png";
import gigachad from "../images/gigachad.png";
import Image from "next/image";
import Link from 'next/link';
import Title from "./Title"

export default function Navbar(props) {
    return (
        <nav>
            <Title />
            <div id="dropdown">
                {/* <div className="image-wrapper2">
                    <Image src={gigachad} alt="profilePic" layout="fill" objectFit="cover"/>
                </div> */}
                <h3>Features</h3>
                <button><div className="image-wrapper3"><Image src={dropdownImg} alt="profilePic" /></div></button>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/features/meter"><a>Progress</a></Link></li>
                    <li><Link href="/features/quality"><a>Quality</a></Link></li>
                    {/* <li><Link href="/features/signup"><a>Sign up</a></Link></li>
                    <li><Link href="/features/login"><a>Log in</a></Link></li> */}
                </ul>
            </div>
            
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
                nav {
                    display: flex;
                    align-items: center;
                    background-color: #21222A;
                    font-family: 'Inter', sans-serif;
                }

                nav > h1 {
                    color: #FFDC00;
                    font-weight: 700;
                }

                nav > h3 {
                    margin: auto;
                    margin-right: 2.6vw;
                    color: white;
                    font-weight: 700;
                }

                button {
                    background: none;
                    border: none
                }

                #dropdown > ul {
                    opacity: 0;
                    visibility: hidden;
                    list-style-type: none;
                    display: block;
                    position: absolute;
                    padding-left: 0px;
                    margin-top: 30px;
                    border: 1px solid gray;
                    background-color: #21222A;
                }

                #dropdown > h3 {
                    color: white;
                }

                li > a {
                    text-decoration: none;
                    color: white;
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                }

                #dropdown:focus-within > ul {
                    opacity: 1;
                    visibility: visible;
                }

                #dropdown {
                    display: inherit;
                    position: relative;
                    margin: auto;
                    margin-right: 2.6vw;
                }

                .image-wrapper3 {
                    width: 15px;
                    height: auto;
                }

                .image-wrapper2 {
                    width: 25px;
                    height: 25px;
                    padding-top: 2px;
                    overflow: hidden;
                    border-radius: 50%;
                    position: relative;
                }
            `}</style>
        </nav>
    );
}