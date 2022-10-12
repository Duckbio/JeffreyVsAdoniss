import AdonisImg from "../images/adonisgold.png";
import Image from "next/dist/client/image";

export default function Title() {
    return (
        <div>
            <div className="image-wrapper1">
                <Image src={AdonisImg} alt="Adonis"/>
            </div>
            <h1><span className="jeffrey">Jeffrey</span><span className="vs"> VS </span><span className="adonis">Adoniss</span></h1>
        
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    background-color: #21222A;
                    font-family: 'Inter', sans-serif;
                }

                .image-wrapper1 {
                    width: 47px;
                    height: 47px;
                    margin: 0px 0.4vw 0px 2.3vw;
                }

                .jeffrey {
                    color: #FF7070;  //FF7070
                }

                .adonis {
                    color: #70FF70;
                }

                .vs {
                    font-size: 19px;
                }

                h1 {
                    color: #FFDC00;
                    font-weight: 700;
                }
            `}</style>
        </div>
    )
}