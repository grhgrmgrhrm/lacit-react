import React, { Component } from 'react';

class GridHealth extends Component {
    render() {
        return (
            <section className="pos-rel pd-tb-medium" data-rgen-sm="pd-0 align-c">
                <div className="bg-holder img-half l full-wh z0" data-rgen-sm="pos-rel px-h400"><b
                    data-bgholder="overlay" className="full-wh z5" data-bgcolor="rgba(45, 51, 69, 0)"></b>
                    <div data-bgholder="video" className="videobg z4 full-wh"></div>
                    <div data-bgholder="slider" className="full-wh z3" data-rgen-sm="h100">
                        <div className="bgslider full-wh"></div>
                    </div>
                    <div data-bgholder="parallax" className="full-wh z2 bg-cover bg-cc"></div>
                    <b data-bgholder="bg-img" data-bg="images/mountain+biking-1259x1125.jpeg"
                       className="full-wh bg-cover bg-cc z1"></b></div>
                <div className="container">
                    <div className="row mb20">
                        <div className="col-md-6"></div>
                        <div className="col-md-5 offset-md-1" data-rgen-sm="pd-30" data-animate-in="fadeInRight"><h2
                            className="title f-1 large bold-1" data-rgen-sm="medium">HEALTH</h2>
                            <p className="title-sub small" data-rgen-sm="small">I am committed to a healthy
                                lifestyle. <br/>I do not smoke, do active sports - cycling, swimming, diving.</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GridHealth;