import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <nav className="nav">
                    <ul>
                        <li><a href="#">Our features</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
                <section id="logo">
                    <img src="/images/logo.png"></img>
                </section>
            </div>
        );
    }
}

export default Content;