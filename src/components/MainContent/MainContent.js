import React, { Component } from 'react';
import badge1 from '../../images/badge1.png'
import badge2 from '../../images/badge2.png'
import badge3 from '../../images/badge3.png'
import badge4 from '../../images/badge4.png'

import { Link } from 'react-router-dom';


import './MainContent.css'

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="text">
                    <h2>Dobrodošli u fitnes studio <span style={{color:'#cf7303'}}>FitInLine!</span></h2><br></br>
                    <p>Uz individualne trendinge i izbalansiranu ishranu možete dovesti vaše telo u željeno stanje, a mi smo tu da vam pomognemo. </p>
                    <p>Na stranici <span><Link style={{textDecoration:'none'}} to='/programs'>PROGRAMI</Link></span> možete videti različite programe i vrste treninga koje smo pripremili za vas. Na vama je da izaberete i zakažete svoj probni trening ili razgovor. Čekamo vas!</p>
                </div>
                <div className="badges">
                    <img src={badge1} alt=""></img>
                    <h5 >
                        NUTRITION<span> COACHING</span>
                    </h5>
                    <img src={badge2} alt=""></img>
                    <h5>
                        PERSONAL<span> TRAINING</span>
                    </h5>
                    <img src={badge3} alt=""></img>
                    <h5>
                        FAT<span> LOSS</span>
                    </h5>
                    <img src={badge4} alt=""></img>
                    <h5>
                        GUARANTEED<span> RESULTS</span>
                    </h5>
                </div>
            </div>
        );
    }
}

export default MainContent;