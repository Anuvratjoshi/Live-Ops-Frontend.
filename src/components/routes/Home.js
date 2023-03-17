import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (<nav>
        <div className="nav-wrapper black">
            <div className="brand-logo left">liveops</div>
            <ul id="nav-mobile" className="right">
                <li><Link to="/signin">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/player">Offers</Link></li>
                <li><Link to="/getoffers">Available offers</Link></li>
            </ul>
        </div>
        <ul className="ul">
            <li>Note: You have to login first to build an offer</li>
        </ul>
        <div style={{height:"100vh",position:"relative",top:"-40px",color:"red",marginTop:"300px"}}>
            <h1 className="moving-h2">Welcome to liveops</h1>
        </div>
    </nav>)
}
export default Home