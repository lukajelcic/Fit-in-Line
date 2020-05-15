import React, { Component } from 'react';
import types from '../TrainingTypes/types';
import '../TrainingTypes/TrainingType.css'
import DetailsHead from './DetailsHead';


function TrainingDetails({ match }) {
    const type = types.find(({ id }) => id == match.params.id)
    const type1 = [];
    const listItmes = type.list.map(el => {
        return (<li key={el.id}>{el.li}</li>)
    })
    return (
        <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
            <DetailsHead />
            <div className="container-fluid background"></div>
            <div className="page-content" style={{ width: '70%' }}>
                <div className="ntr-text">
                    <h1 style={{ fontWeight: '500' }}>{type.title}</h1>
                    <hr />
                    <div className="blog_image">
                        <img src={type.url} className="img-responsive post_img" alt="post image" />
                    </div>
                    <div className="blog_text">
                        <p style={{ width: '90%', padding: '5px' }}>{type.text}</p>
                    </div>
                    <h2 style={{ fontWeight: '600', padding: '5px' }}>{type.trng_h2}</h2>
                    <div>
                        <ul className="list-group">
                            {listItmes}
                        </ul>
                    </div>
                    <br />
                    <hr />
                    <div className="foot_text" style={{ padding: '5px' }}>
                        <h6 style={{ lineHeight: '1.5rem' }}>{type.footerText}</h6>
                    </div>
                </div>
            </div>
        </main>

    )
}
export default TrainingDetails;