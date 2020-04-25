import React, { Component } from 'react';

class Autor extends Component {
    render() {
        return (
            <section className="pos-rel pd-tb-small" data-rgen-sm="pd-tb-small align-c" id="author">
                <div className="container">
                    <div className="row mb20 middle-md">
                        <div className="col-md-3" data-animate-in="fadeInLeft">
                            <img src="/images/profilepic.jpg" alt="About author" className="rd" data-rgen-sm="max-px-w200 mr-auto"></img>
                        </div>
                        <div className="col-md-8 offset-md-1" data-animate-in="fadeIn"><h2 className="title"
                                                                                           data-rgen-sm="medium">About
                            Me</h2>
                            <p>I am a creative and hardworking specialist who likes to use both proven methods and new
                                technologies. My General interests are UI, ux and some design. During last years I
                                developed a number of web sites and applications using HTML, CSS, javascript and
                                different frameworks.&nbsp;I have extensive experience in creating web projects of
                                various complexity, excellent feel in a team of developers. I can work remotely,
                                observing deadlines and providing constant feedback during working hours.</p>
                            <hr></hr>
                            <a href="https://github.com/grhgrmgrhrm" target="_blank" className="sq40 fs18 mr-4 rd-4 iconbox btn-dark">
                                <i className=" fa-github fa"></i>
                            </a>
                            <a href="mailto:conpro@tut.by" target="_blank" className="sq40 fs18 mr-4 rd-4 iconbox btn-dark">
                                <i className=" fa-envelope-o fa"></i>
                            </a>
                            <a href="tel:+375297152299" target="_blank" className="sq40 fs18 mr-4 rd-4 iconbox btn-dark">
                                <i className=" fa-phone fa"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-holder full-wh z0"><b data-bgholder="overlay" className="full-wh z5"
                                                         data-bgcolor="rgba(45, 51, 69, 0)"></b>
                    <div data-bgholder="parallax" className="full-wh z2"></div>
                    <b data-bgholder="bg-img" className="full-wh bg-cover bg-cc z1"></b></div>
            </section>
        );
    }
}

export default Autor;