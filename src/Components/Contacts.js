import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (

            <section className="pd-tb-small bg-secondary typo-light" data-rgen-sm="pd-tb-small align-c" id="contact">
                <div className="container small align-c">
                    <div className="w75 mr-auto mr-b-tiny" data-animate-in="fadeIn">
                        <h2 className="title f-1" data-rgen-sm="medium">Contact me</h2>
                        <p className="title-sub small" data-rgen-sm="small">If you are interested in my skills, you can
                            contact me in any way.</p>
                    </div>
                    <div className="row gt20 mb20">
                        <div className="col-md-4" data-animate-in="fadeInUp|0.1">
                            <div className="-mr-b-50">
                              <span className="sq100 rd bg-white iconbox fs50 txt-secondary">
                                <i className=" fa-phone-square fa"></i>
                              </span>
                            </div>
                            <div className="pd-tiny bg-dark rd-6">
                                <h3 className="title mini bold-n mr-t-mini">+375 29 7152299 </h3>
                                <p className="op-05">
                                    <br/><br/>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4" data-animate-in="fadeInUp|0.2">
                            <div className="-mr-b-50">
                              <span className="sq100 rd bg-white iconbox fs50 txt-secondary">
                                <i className=" fa-envelope-o fa"></i>
                              </span>
                            </div>
                            <div className="pd-tiny bg-dark rd-6">
                                <h3 className="title mini bold-n mr-t-mini">conpro@tut.by</h3>
                                <p className="op-05">
                                    <br/><br/>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4" data-animate-in="fadeInUp|0.3">
                            <div className="-mr-b-50">
                              <span className="sq100 rd bg-white iconbox fs50 txt-secondary">
                                <i className=" fa-telegram fa"></i>
                              </span>
                            </div>
                            <div className="pd-tiny bg-dark rd-6">
                                <h3 className="title mini bold-n mr-t-mini">https://t.me/grhgrmgrhrm</h3>
                                <p className="op-05">
                                    <br/>
                                </p>
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

export default Contacts;