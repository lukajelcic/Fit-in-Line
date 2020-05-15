import React from 'react';
import { Link } from 'react-router-dom';

function AboutContent(props) {
    return (
        <div className="page-content">
            <div className="about-text">
                <h1 className="about-title" style={{fontWeight:'500'}}>{props.h1}</h1>
                <h2>{props.h2} </h2>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text6}</p>
                <p>Ukoliko imate pitanja ili nedoumice, uvek nas možete pozvati i dodatno se informisati na broj br.telefona - <span style={{fontWeight:'bold',color:'#cf7303'}}>066 34 36 06</span></p>
                <h4>{props.text8}</h4>
            </div>

        </div>
    )
}

export default AboutContent;