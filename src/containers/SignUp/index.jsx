import React, { Component } from 'react';
import "./signup.css";
import {Link} from "react-router-dom";

class Signup extends Component {
    state = {  }
    render() { 
        return (
            <div className="signup-body">

                <div className="signup-heading">
                    <b>Pro</b>ducing <b>Tal</b>ents
                </div>
                <div className="signup-subheading">
                Join the new talent community
                </div>
                <div className="signup-switch">
                <Link to="/"><button className="signup-login">Login</button></Link>
                <button className="signup-signup">Sign Up</button>
                </div>
                <br></br>
                <br></br>
                <div className="signup-inputs">
                    <input type="text" placeholder="Jane Doe"></input>
                    <span className="signup-unit">Name</span>
                </div>
                <div className="signup-inputs">
                    <input type="text" placeholder="janedoe@xyz.com"></input>
                    <span className="signup-unit">Email id</span>
                </div>
                <div className="signup-inputs">
                    <input type="text" placeholder="Mob No"></input>
                    <span className="signup-unit">+91</span>
                </div>
                <div className="signup-inputs">
                    <input type="password" placeholder="Password"></input>
                    <span className="signup-unit">Password</span>
                </div>
                <div className="signup-inputs">
                    <input type="password" placeholder="Confirm-Password"></input>
                    <span className="signup-unit">Password</span>
                </div>
                <br></br>
                <div className="signup-next">
                <Link to="/"><button>Next</button></Link>
                </div>

            </div>
          );
    }
}
 
export default Signup;