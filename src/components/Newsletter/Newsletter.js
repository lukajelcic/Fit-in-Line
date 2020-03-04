import React from 'react';

import './newsletter.css'

class Newsletter extends React.Component{
    render(){
        return(
            <section className="newsletter-section">

                <div className="newsletter-wrap">
                    <div className="newsletter-heading">
                        <h6 className="newsletter-title">Prijavi se za newsletter</h6>
                        <p className="newsletter-txt">Prijavite se i budite u toku sa novim Ethnogym akcijama, pričama, popustima, žurkama.</p>
                    </div>

                    <div className="newsletter-form">
                        <form className="validate" action="" method="post">
                            <div id="signup-scroll">
                                <div className="field-group">
                                    <input type="email" placeholder="E-mail" name="eMail" className="required-email"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Newsletter;