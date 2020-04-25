import React, { Component } from 'react';

class Calltoaction extends Component {
    render() {
        return (
            <section className="pd-tb-mini bg-dark" data-animate-in="fadeIn">
                <div className="container small typo-light" data-rgen-sm="align-c">
                    <div className="row gt20">
                        <div className="col-md-7" data-rgen-sm="mr-b-30">
                            <p className="mr-0 fs16"><span
                                data-novi-id="3">Look at the link to my resume on the website                 <strong>jobs.tut.by</strong></span>
                            </p>
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <a href="https://bit.ly/2Dgb4UO" target="_blank" className="btn btn-default solid block">See resume (Russian)</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Calltoaction;