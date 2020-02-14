import React, { Component } from 'react';

import './Infobar.css';

class Infobar extends Component {
    render() {
        return (
            <header className="infobar">
                <nav className="infobar-navigation">
                    <div></div>
                    <div className="infobar-logo"><a href="/">Fit In Line</a></div>
                    <div className="spacer"></div>
                    <div className="infobar-top-items">
                        <ul>
                            <li>+381 34 40 57 367</li>
                            <li>Radnim danima: 7-22h, Vikendom: 9-21h</li>
                            <li>Janka Veselinovica 60, Kragujevac</li>
                        </ul>
                    </div>
                    <div className="social">
                        <a href="/" className="fa fa-instagram"> </a>
                        <a href="/" className="fa fa-facebook"> </a>
                    </div>
                    <div className="menubar">
                        <ul>
                            <li><a href="/">O Nama</a></li>
                            <li><a href="/">Treninzi</a></li>
                            <li><a href="/">Plan Ishrane<small> blog</small></a></li>
                            <li><a href="/">Galerija</a></li>
                            <li><a href="/">Cenovnik</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Infobar;