import React, { Component } from 'react';

class GridWork extends Component {
    render() {
        return (
            <section className="pos-rel pd-tb-medium" data-rgen-sm="pd-0 align-c">
                <div className="bg-holder img-half r z0" data-rgen-sm="pos-rel px-h400"><b data-bgholder="overlay"
                                                                                           className="full-wh z5"
                                                                                           data-bgcolor="rgba(45, 51, 69, 0)"></b>
                    <div data-bgholder="video" className="videobg z4 full-wh"></div>
                    <div data-bgholder="slider" className="full-wh z3" data-rgen-sm="h100">
                        <div className="bgslider full-wh"></div>
                    </div>
                    <div data-bgholder="parallax" className="full-wh z2"></div>
                    <b data-bgholder="bg-img" data-bg="images/istock_000077392727_large1-1251x1036.jpg"
                       className="full-wh bg-cover bg-cc z1"></b></div>
                <div className="container">
                    <div className="row mb20">
                        <div className="col-md-5" data-rgen-sm="pd-30" data-animate-in="fadeInLeft"><h2
                            className="title f-1 large bold-1" data-rgen-sm="medium">WORK </h2>
                            <p className="title-sub small" data-rgen-sm="small">I specialize in developing high quality
                                responsive websites for companies of all sizes around the globe.</p>
                            <p>I designed websites for travel agencies, construction companies and companies selling
                                earth moving and construction equipment. I also developed online stores and websites of
                                modeling agencies. I can create both simple one-page web applications and complex
                                portals. <br/><br/>I create websites both in simple HTML5/CSS3 + Bootstrap, and in site
                                    management systems - Joomla, Wordpress, Livestreet. I have some experience with
                                    OpenCart, Bitrix</p>
                        </div>
                        <div className="col-md-6 offset-md-1"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GridWork;