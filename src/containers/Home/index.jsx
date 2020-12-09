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
              items: 2.5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 0.5,
            }
          };
          
          

        return ( 
            <div className="home-body">
                <div className="home-round-carousel">
                <Carousel responsive={responsive1}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    infinite={true}                
                >
                    <img src={img1} width="100px" height="100px" alt="" />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />
                    <img src={img1} width="100px" height="100px" alt=""  />            
                </Carousel>
                </div>

                <div className="home-elements">
                    <p className="home-headings">Dance</p>
                    <Carousel responsive={responsive2}
                    swipeable={true}                 
                    infinite={true} 
                    partialVisbile={true}

                    
                    removeArrowOnDeviceType={["tablet", "mobile"]}               
                    >
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                                               
                    
                    </Carousel>
                </div>
                <div className="home-elements">
                    <p className="home-headings">Music</p>
                    <Carousel responsive={responsive2}  
                    swipeable={true}                 
                    infinite={true} 
                    removeArrowOnDeviceType={["tablet", "mobile"]}               
                    >
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>                        
                    
                    </Carousel>
                </div>
                <div className="home-elements">
                    <p className="home-headings">Photography</p>
                    <Carousel responsive={responsive2} 
                    swipeable={true}                 
                    infinite={true} 
                    removeArrowOnDeviceType={["tablet", "mobile"]}  
                
                    >
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>
                        <div className="home-grid">
                            <img className="home-img1" src={imgd1} alt=""   />
                            <img className="home-img2" src={imgd2} alt=""  />
                            <div className="home-img34">
                                <img className="home-img3" src={imgd3} alt=""   />
                                <img className="home-img4" src={imgd4} alt=""   />
                            </div>
                        </div>                        
                    
                    </Carousel>
                </div>
            </div>
         );
    }
}
 
export default Home;