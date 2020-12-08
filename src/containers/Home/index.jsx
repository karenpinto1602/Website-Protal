import React, { Component } from 'react'
import "./home.css";
import img1 from "./images/d2.jpg";
import imgd1 from "./images/imgd1.jpg";
import imgd2 from "./images/imgd2.jpeg";
import imgd3 from "./images/imgd3.jpg";
import imgd4 from "./images/imgd4.jpeg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Home extends Component {
    state = {  }
    render() { 
        const responsive1 = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 10
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 9
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 6
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2
            }
          };
          const responsive2 = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 4
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
          

        return ( 
            <div className="home-body">
                <div className="home-round-carousel">
                <Carousel responsive={responsive1}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    infinite={true}
                
                >
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
                    <img src={img1} width="100px" height="100px" />
            
                </Carousel>
                </div>
                <div className="home-elements">
                    <p className="home-headings">Dance</p>
                    <Carousel responsive={responsive2}   
                    swipeable={true}                 
                    infinite={true}
                
                    >
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>                        
                    
                    </Carousel>
                </div>
                <div className="home-elements">
                    <p className="home-headings">Music</p>
                    <Carousel responsive={responsive2}   
                    swipeable={true}                 
                    infinite={true}
                
                    >
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>                        
                    
                    </Carousel>
                </div>
                <div className="home-elements">
                    <p className="home-headings">Photography</p>
                    <Carousel responsive={responsive2}   
                    swipeable={true}                 
                    infinite={true}
                
                    >
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1}  />
                            <img className="home-img2" src={imgd2} />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3}  />
                                <img className="home-img3" src={imgd4}  />
                            </div>
                        </div>                        
                    
                    </Carousel>
                </div>
            </div>
         );
    }
}
 
export default Home;