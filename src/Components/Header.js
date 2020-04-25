import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="main-head dark" data-bgcolor="rgba(45, 51, 69, 1)">
                <div className="container">
                    <div className="row gt0 align-items-center head-row" data-rgen-sm="h-reset">
                        <div className="col-md-3 pos-rel">
                            <a className="nav-handle" data-nav=".m-content" data-navopen="pe-7s-more" data-navclose="pe-7s-close">
                                <i className="pe-7s-more"></i>
                            </a>
                            <div className="header-logo-wrp">
                                <a className="header-logo pd-tb-small" href="">
                                    <img src="images/coding-1.png" alt="Brand logo"></img>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9 align-r m-content">
                            <ul className="row gt30 justify-content-md-end mr-0 align-items-center">
                                <li className="col-md-auto" data-rgen-sm="pd-0 pd-t-10 align-c">
                                    <p className="mr-0 txt-white bold-4 fs16"><i
                                        className="fas fa-phone fa-flip-horizontal mr-r-4"></i><a
                                        href="tel:+375297152299" target=""> +375 29 7152299</a></p>
                                </li>
                                <li className="col-md-auto" data-rgen-sm="pd-0 pd-t-10 align-c"><a href="#contact" className="btn btn-default solid mini">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;