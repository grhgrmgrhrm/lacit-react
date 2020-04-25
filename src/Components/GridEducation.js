import React, { Component } from 'react';

class GridEducation extends Component {
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
                    <b data-bgholder="bg-img" data-bg="images/react_illo_final_720x400-683x595.png"
                       className="full-wh bg-cover bg-cc z1"></b></div>
                <div className="container">
                    <div className="row mb20">
                        <div className="col-md-6"></div>
                        <div className="col-md-5 offset-md-1" data-rgen-sm="pd-30" data-animate-in="fadeInRight"><h2
                            className="title f-1 large bold-1" data-rgen-sm="medium">EDUCATION </h2>
                            <p className="title-sub small" data-rgen-sm="small"><span
                                data-novi-id="0">HTML, CSS,&nbsp;JavaScript</span> and <span
                                data-novi-id="1">React.Js</span></p>
                            <p>The course was difficult, but it was all worth it. Courses go through a lot of
                                information so that we start with HTML, CSS, and we’ve finished React + Redux
                                training. <br/>Having completed the course, I began to comfortably write and understand
                                    how to encode not only in HTML + css, but also write code in JavaScript and in React
                                    + Redux.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GridEducation;