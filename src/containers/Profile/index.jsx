import React, { Component } from 'react'
import "./profile.css";

import { PersonOutline, EmailOutlined, Update, CalendarTodayOutlined} from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Link} from "react-router-dom";
import dp from "./images/dp.jpg";
import cover from "./images/cover.png";
import p1 from "./images/food/p1.jpg";
import p2 from "./images/food/p2.jpg";
import p3 from "./images/food/p3.jpg";
import p4 from "./images/food/p4.jpg";
import p5 from "./images/food/p5.jpg";
import p6 from "./images/food/p6.jpg";
import p7 from "./images/food/p7.jpg";
import p8 from "./images/food/p8.jpg";
import p9 from "./images/food/p9.jpg";

class Profile extends Component {
    constructor(props){
        super(props)
        this.onLikeUploads = this.onLikeUploads.bind(this);
        this.onLikeBuzzes = this.onLikeBuzzes.bind(this);
        this.onLikeFollowers = this.onLikeFollowers.bind(this);
        this.state = { 
            likeUploads: false,
            likeBuzzes: false,
            likeFollowers: false,
        }
    }
    onLikeUploads(){
        this.setState({
            likeUploads: !(this.state.likeUploads)
        })
    }
    onLikeBuzzes(){
        this.setState({
            likeBuzzes: !(this.state.likeBuzzes)
        })
    }
    onLikeFollowers(){
        this.setState({
            likeFollowers: !(this.state.likeFollowers)
        })
    }
    render() { 
        return ( 
            <div className="profile-body">
                <div className="profile-account">
                    <img src={dp}></img>  
                    <p>
                        <div className="profile-name">Becky Helen</div>
                        Mexican Chef
                    </p>  
                    <div className="profile-icons">
                    <Link to="/home"><PersonOutline className="profile-icon" style={{fontSize: "40px"}}/></Link>
                    <Link to="/profile"><Update className="profile-icon" style={{fontSize: "40px"}}/></Link>
                    <Link to="/"><EmailOutlined className="profile-icon" style={{fontSize: "40px"}}/></Link>                    
                    <Link to="/"><CalendarTodayOutlined className="profile-icon" style={{fontSize: "40px"}}/></Link>
                    </div>               
                </div>
                <div className="profile-talent">
                    <img className="profile-coverpage" src={cover}></img>
                    <div className="profile-likes">
                        <div>
                            100<br></br>
                            Uploads<br></br> 
                            <button onClick={this.onLikeUploads}>                                        
                            <FavoriteIcon className={this.state.likeUploads ? "profile-likeIcon":"profile-likeIcon-none"} style={{fontSize: "40px", }}/>
                            <FavoriteBorderIcon className={this.state.likeUploads ? "profile-likeIcon-none":"profile-likeIcon"} style={{fontSize: "40px", }}/>
                            </button>
                        </div>
                        <div>
                            100<br></br>
                            Buzzes<br></br>
                            <button onClick={this.onLikeBuzzes}>                                        
                            <FavoriteIcon className={this.state.likeBuzzes ? "profile-likeIcon":"profile-likeIcon-none"} style={{fontSize: "40px", }}/>
                            <FavoriteBorderIcon className={this.state.likeBuzzes ? "profile-likeIcon-none":"profile-likeIcon"} style={{fontSize: "40px", }}/>
                            </button>
                        </div>
                        <div>
                            100<br></br>
                            Followers<br></br>
                            <button onClick={this.onLikeFollowers}>                                        
                            <FavoriteIcon className={this.state.likeFollowers ? "profile-likeIcon":"profile-likeIcon-none"} style={{fontSize: "40px", }}/>
                            <FavoriteBorderIcon className={this.state.likeFollowers ? "profile-likeIcon-none":"profile-likeIcon"} style={{fontSize: "40px", }}/>
                            </button>
                        </div>
                    </div>
                    <div className="profile-posts">
                        <img src={p1}></img>
                        <img src={p2}></img>
                        <img src={p3}></img>
                        <img src={p4}></img>
                        <img src={p5}></img>
                        <img src={p6}></img>
                        <img src={p7}></img>
                        <img src={p8}></img>
                        <img src={p9}></img>
                        <img src={p1}></img>
                        <img src={p2}></img>
                        <img src={p3}></img>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Profile;