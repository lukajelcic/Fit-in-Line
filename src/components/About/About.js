import React from 'react';
import Counter from './Counter.js';
import './About.css'

function About(props) {
    return (

        <main className="about-page">
            <div className="background"></div>
            <article className="about-article">
                <div className="page-head">
                    <header className="header-text">
                        <h1>{props.h1}</h1>
                        <h2>{props.h2}</h2>
                        <div className="about-text">
                            <p>{props.text1 + props.text2}</p>
                            <p>{props.text3}</p>
                        </div>
                    </header>
                </div>
            </article>

            <section className="about-list">
                <div className="list">
                    <a href="/"><h3 className="about-nutrition">{props.h3}</h3></a>
                </div>
            </section>

            <hr></hr>

            <p className="cta-text">Ne držite nas samo za sebe, šerujte!</p>

            <Counter />

        </main>

    )
}

export default About;