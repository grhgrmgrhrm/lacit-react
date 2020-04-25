import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="pd-tb-mini bg-dark" data-rgen-sm="pd-tb-small">
                <div className="container small typo-light align-c" data-rgen-sm="align-c">
                    <a href="https://github.com/grhgrmgrhrm" target="_blank" className="sq30 fs16 mr-r-4 rd-2 bg-glass-light-01 iconbox btn-white"><i
                    className=" fa-github fa"></i>
                    </a>
                    <a href="https://t.me/grhgrmgrhrm" target="_blank" className="sq30 fs16 mr-r-4 rd-2 bg-glass-light-01 iconbox btn-white"><i
                    className=" fa-telegram fa"></i>
                    </a>
                    <hr className="light"></hr>
                    <p className="mr-0"><a href="https://bit.ly/2Dgb4UO" target="_blank">Raman Shastapalau </a>
                        <span className="copyright-year">2011-2018</span>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;