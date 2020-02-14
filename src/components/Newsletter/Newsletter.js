import React, { Component } from 'react';

import './Newsletter.css';

class Newsletter extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
                <div className="newsletter">
                    <div className="newsletter-title">
                        <h2 className="section-title">
                            <span>Prijavi se za fit in line novosti</span>
                        </h2>
                        <p>Mi postujemo vasu privatnost i cuvamo vas info</p>
                    </div>
                </div>
        )
    }
}

export default Newsletter;