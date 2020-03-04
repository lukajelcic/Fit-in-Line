import React from 'react';
import RegButton from '../Buttons/RegButton'

import './Reserve.css'

function Reserve(){
    return(
        <section className="reserve" id="rsv">
            <div className="reserve-head-text">
                <h6>Zakazite besplatan trening!</h6>
                <p>Fit in Line Teretana Kragujevac - Fitness community makes you healthy</p>
                <RegButton  name="Rezervisi Trening"/>
            </div>
        </section>
    )
}

export default Reserve;