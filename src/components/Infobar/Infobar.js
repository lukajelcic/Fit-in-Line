import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                            <li><img src="https://image.flaticon.com/icons/svg/977/977258.svg" alt="/"></img>+381 34 40 57 367</li>
                            <li><img src="https://image.flaticon.com/icons/svg/148/148933.svg" alt="/"></img>Radnim danima: 7-22h, Vikendom: 9-21h</li>
                            <li><img src="https://image.flaticon.com/icons/svg/1034/1034231.svg" alt="/"></img>Janka Veselinovica 60, Kragujevac</li>
                        </ul>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/fit_inline/?hl=sr" className="fa fa-instagram"> </a>
                        <a href="https://www.facebook.com/fit.inline.1" className="fa fa-facebook"> </a>
                    </div>
                    <div className="menubar">
                        <ul>
                            <li><Link to="/about">O Nama</Link></li>
                            <li><Link to="/news">Vesti</Link></li>
                            <li><a href="/">Ishrana</a></li>
                            <li><Link to="/training">Treninzi</Link></li>
                            <li><a href="/">Gelerija</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Infobar;