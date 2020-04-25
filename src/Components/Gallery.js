import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <section className="pos-rel pd-tb-small bg-dark" data-rgen-sm="pd-tb-small" id="gallery">
                <div className="container pos-rel z1 align-c typo-light" data-animate-in="fadeIn"><span
                    className="iconbox sq100 fs80 txt-default mr-b-20"><i className=" fa-heart fa"></i></span><h2
                    className="title mr-b-50" data-rgen-sm="medium mr-b-20">My favorite
                    projects</h2>
                    <div className="carousel-widget ctrl-1 popgallery-widget ctrl-light zoom-carousel">
                        <div className="owl-carousel" data-margin="10" data-xs-items="1" data-sm-items="2"
                             data-md-items="3" data-lg-items="3" data-dots="true" data-autoplay="false"
                             data-center="true" data-nav="false">
                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_lt-1686x3002.jpg" className="pop-img">
                                        <img src="images/screenshot_lt-1686x3002.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_samorez-1349x2405.jpg" className="pop-img">
                                        <img src="images/screenshot_samorez-1349x2405.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_diggertrade-1349x2392.jpg" className="pop-img">
                                        <img src="images/screenshot_diggertrade-1349x2392.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_galereum-1349x2396.jpg" className="pop-img">
                                        <img src="images/screenshot_galereum-1349x2396.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_stalker-1349x2416.jpg" className="pop-img">
                                        <img src="images/screenshot_stalker-1349x2416.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_vodolaz-1287x2293.jpg" className="pop-img">
                                        <img src="images/screenshot_vodolaz-1287x2293.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_prostolet-1349x2386.jpg" className="pop-img">
                                        <img src="images/screenshot_prostolet-1349x2386.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                            <div className="item">
                                <div className="content">
                                    <a href="images/screenshot_traveltime-1349x2405.jpg" className="pop-img">
                                        <img src="images/screenshot_traveltime-1349x2405.jpg" alt="image"></img>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="bg-holder full-wh z0">
                    <b data-bgholder="overlay" className="full-wh z5" data-bgcolor="rgba(45, 51, 69, 0)"></b>
                    <div data-bgholder="parallax" className="full-wh z2"></div>
                    <b data-bgholder="bg-img" className="full-wh bg-cover bg-cc z1"></b>
                </div>
            </section>
        );
    }
}

export default Gallery;