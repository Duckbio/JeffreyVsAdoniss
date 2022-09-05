export default function SideMenu() {
    return (
        <div id="mySidenav" className="sidenav">
            <a href="./due">Due</a>
            <a href="./daily">Daily</a>
            <a href="#">Weekly</a>
            <a href="#">Monthly</a>
            <a href="#">Yearly</a>
            <a href="#">Custom</a>
            <a href="#">Projects</a>

            <style>{`
                .sidenav {
                    height: 100%;
                    width: 250px;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: #09090B;
                    overflow-x: hidden;
                    padding-top: 70px;
                }                  

                .sidenav a {
                    padding: 8px 8px 8px 32px;
                    text-decoration: none;
                    font-size: 20px;
                    color: #818181;
                    display: block;
                    transition: 0.3s;
                }
                
                .sidenav a:hover {
                    color: #f1f1f1;
                }
            `}</style>
        </div>
    );
}