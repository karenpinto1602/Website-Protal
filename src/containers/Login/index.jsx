import React, { Component } from 'react';
import "./login.css";
import {Link} from "react-router-dom";

class Login extends Component {
    state = {  }
    render() { 
        return (
            <div className="login-body">
                <div className="login-sub-body">
                <div className="login-heading">
                    <b>Pro</b>ducing <b>Tal</b>ents
                </div>
                <div className="login-subheading">
                Join the new talent community
                </div>
                <div className="login-switch">                    
                    <button className="login-login">Login</button>                   
                    <Link to="/signup"><button className="login-signup">Sign Up</button></Link>
                </div>
                <br></br>
                <br></br>
                <div className="login-inputs">
                    <input type="text" placeholder="Jane Doe"></input>
                    <span className="login-unit">Name</span>
                </div>
                <div className="login-inputs">
                    <input type="text" placeholder="janedoe@xyz.com"></input>
                    <span className="login-unit">Email id</span>
                </div>
                <div className="login-inputs">
                    <input type="password" placeholder="password"></input>
                    <span className="login-unit">Password</span>
                </div>
                <br></br>
                <div className="login-next">
                <Link to="/home"><button>Next</button></Link>
                </div>
                </div>
            </div>
          );
    }
}
 
export default Login;