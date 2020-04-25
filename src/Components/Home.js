import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section className="pos-rel vh70" data-rgen-sm="h-reset pd-tb-small" id="home">
                <div className="container pos-rel z2 h100 flex-cc">
                    <div className="content w75 align-c typo-light">
                        <div className="carousel-widget ctrl-1">
                            <div className="owl-carousel" data-animation-in="flipInX" data-animation-out="fadeOut"
                                 data-nav="false">
                                <div className="item"><h2 className="title large" data-rgen-sm="medium"
                                                          data-novi-id="4">Hello! <br/>I'm Raman Shastapalau</h2>
                                    <p className="title-sub italic" data-rgen-sm="small" data-novi-id="5">I am a Vitebsk
                                        based <span data-novi-id="6">front-end developer</span>, <span data-novi-id="7">web developer</span> with
                                        about 7 years of experience in web development.</p>
                                </div>
                            </div>
                        </div>
                        <a href="#gallery" className="btn btn-white bdr-2 small solid">MY PROJECTS </a>
                    </div>
                </div>
                <div className="bg-holder full-wh z1"><b data-bgholder="overlay" className="full-wh z5"
                                                         data-bgcolor="rgb(45, 51, 69, 0.5)"></b>
                    <div data-bgholder="video" className="videobg z4 full-wh" data-videoid="O-KHkAGt2L0"></div>
                    <div data-bgholder="slider" className="full-wh z3" data-rgen-sm="h100">
                        <div className="bgslider full-wh"></div>
                    </div>
                    <div data-bgholder="parallax" className="full-wh z2"></div>
                    <b data-bgholder="bg-img" className="full-wh bg-cover bg-cc z1"
                       data-bg="%PUBLIC_URL%/images/2018-11-15_23-58-37-1365x382.png"></b></div>
            </section>
        );
    }
}

export default Home;