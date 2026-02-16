import "./Navbar.css";

function Navbar(){
    return (
        <div className="container-fluid nav">
            <div className="container">
                <div className="nav-left">
                    <h2>Zahid Nasiri</h2>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar ;