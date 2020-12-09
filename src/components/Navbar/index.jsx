import React, { Component } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

import { HomeOutlined, TrendingUpOutlined, PersonOutline, Settings } from '@material-ui/icons';


class Navbar extends Component {
    constructor(props){
        super(props)
        this.gethome = this.gethome.bind(this); 
        this.gettrend = this.gettrend.bind(this);
        this.getprofile = this.getprofile.bind(this);
        this.getsettings = this.getsettings.bind(this);
        this.state = {
            homebutton: true,
            trendbutton: false,
            profilebutton: false,
            settingsbutton: false,
        }
    }
    gethome(){
        this.setState({
            homebutton: true,
            trendbutton: false,
            profilebutton: false,
            settingsbutton: false,
          })
    }
    gettrend(){
        this.setState({
            homebutton: false,
            trendbutton: true,
            profilebutton: false,
            settingsbutton: false,
          })
    }
    getprofile(){
        this.setState({
            homebutton: false,
            trendbutton: false,
            profilebutton: true,
            settingsbutton: false,
          })
    }
    getsettings(){
        this.setState({
            homebutton: false,
            trendbutton: false,
            profilebutton: false,
            settingsbutton: true,
          })
    }


    render() { 
        return ( 
            <div className="navbar-body">
                <div className="navbar-logo">PROTAL</div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search"></input>
                </div>
                <div className="navbar-icons">
                    <Link onClick={this.gethome} to="/"><HomeOutlined className={this.state.homebutton ? "navbar-icon-clicked":"navbar-icon"} style={{color: "yellow", fontSize: "40px"}}/></Link>
                    <Link onClick={this.gettrend} to="/home"><TrendingUpOutlined className={this.state.trendbutton ? "navbar-icon-clicked":"navbar-icon"} style={{color: "yellow", fontSize: "40px"}}/></Link>
                    <Link onClick={this.getprofile} to="/profile"><PersonOutline className={this.state.profilebutton ? "navbar-icon-clicked":"navbar-icon"} style={{color: "yellow", fontSize: "40px"}}/></Link>
                    <Link onClick={this.getsettings} to="/signup"><Settings className={this.state.settingsbutton ? "navbar-icon-clicked":"navbar-icon"} style={{color: "yellow", fontSize: "40px"}}/></Link>                   
                </div>
            </div>
         );
    }
}
 
export default Navbar;