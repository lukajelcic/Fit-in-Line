import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter.js';
import './About.css'
import Media from './Media'

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
                    <div className="team-cards">
                        <h3>Upoznajte nas tim </h3>
                        <div className="team">
                            <div className="coach">
                                <Media
                                    img="https://images-na.ssl-images-amazon.com/images/I/71iCPkb3VVL.jpg"
                                    name="Tanja Nikolic"
                                    description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica"
                                />
                            </div>

                            <div className="coach">
                                <Media
                                    img="https://s3-us-west-2.amazonaws.com/beachbody-blog/uploads/2019/11/10R-Coach-Window.960.jpg"
                                    name="Luka Lukic"
                                    description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="about-list">
                <div className="list">
                    <Link to="/nutrition"><h3 className="about-nutrition">{props.h3}</h3></Link>
                </div>
            </section>

            <hr></hr>

            <p className="cta-text">Ne držite nas samo za sebe, šerujte!</p>

            <Counter />

        </main>

    )
}

export default About;