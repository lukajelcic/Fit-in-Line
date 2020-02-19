import React from 'react';

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
                        <span><img src="https://icon-icons.com/icons2/171/PNG/512/email_green_23345.png" alt="/"></img></span>
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
                        <span><img src="https://cdn.icon-icons.com/icons2/452/PNG/256/Phone_43546.png" alt="/"></img></span>
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
                        <span><img src="https://cdn.icon-icons.com/icons2/1261/PNG/512/1496676725-rounded-high-ultra-colour02-maps_84627.png" alt="/"></img></span>
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