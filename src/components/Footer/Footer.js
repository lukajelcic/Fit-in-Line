import React from 'react';
import email from '../../images/email.png';
import phone from '../../images/phone.png';
import address from '../../images/address.png';


import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-heading">
                <h3>Let`s Get Started!!</h3>
                <p>Contact us today to kick-start your fitness and fat loss&nbsp;goals.</p>
            </div>
            <div className="footer-content">
                <div className="email">
                    <div className="icon-email">
                        <span><img src={email} alt="/"></img></span>
                    </div>
                    <div className="title-email">
                        <h5>Email Address</h5>
                    </div>
                    <div className="description-email">
                        <p>lukajelcic23@gmail.com</p>
                    </div>
                </div>
                <div className="phone">
                    <div className="icon-phone">
                        <span><img src={phone} alt="/"></img></span>
                    </div>
                    <div className="title-phone">
                        <h5>Call Me</h5>
                    </div>
                    <div className="description-phone">
                        <p>069 518 98 54</p>
                    </div>
                </div>
                <div className="address">
                    <div className="icon-address">
                        <span><img src={address} alt="/"></img></span>
                    </div>
                    <div className="title-address">
                        <h5>Location</h5>
                    </div>
                    <div className="description-address">
                        <p>Janka Veselinovica 60</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;