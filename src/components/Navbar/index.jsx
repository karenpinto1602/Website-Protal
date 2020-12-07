import React, { Component } from 'react';
import "./navbar.css";

import { HomeOutlined, TrendingUpOutlined, AccountBox, Settings } from '@material-ui/icons';

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
                    <HomeOutlined style={{color: "yellow", fontSize: "40px"}}/>
                    <TrendingUpOutlined style={{color: "yellow", fontSize: "40px"}}/>
                    <AccountBox style={{color: "yellow", fontSize: "40px"}}/>
                    <Settings style={{color: "yellow", fontSize: "40px"}}/>
                </div>
            </div>
         );
    }
}
 
export default Navbar;