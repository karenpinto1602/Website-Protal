import React, { Component } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

import { HomeOutlined, TrendingUpOutlined, PersonOutline, Settings } from '@material-ui/icons';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar-body">
                <div className="navbar-logo">PROTAL</div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search"></input>
                </div>
                <div className="navbar-icons">
                    <Link to="/"><HomeOutlined style={{color: "yellow", fontSize: "40px"}}/></Link>
                    <Link to="/home"><TrendingUpOutlined style={{color: "yellow", fontSize: "40px"}}/></Link>
                    <Link to="/profile"><PersonOutline style={{color: "yellow", fontSize: "40px"}}/></Link>
                    <Link to="/"><Settings style={{color: "yellow", fontSize: "40px"}}/></Link>                   
                </div>
            </div>
         );
    }
}
 
export default Navbar;