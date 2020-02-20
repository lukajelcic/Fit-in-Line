import React from 'react';

import './About.css'

function About() {
    return (
        <div className="about-wrap">
            <article className="article-wrap">
                <div className="text-and-image">
                    <h1>Fitnes i Ishrana</h1>
                    <div className="about-text">
                        <h3>Fitness i teretana Fit in Line se nalazi na lokaciji Janka Veselinovica</h3>

                        <section className="about-paragrph">
                            <p>Ethnogym je specijalista u Beogradu za grupne fitnes programe sa više od 200 fitnes časova mesečno i 15 različitih vrsta programa. Od Les Mills programa do yoge, pilatesa, zumbe, cardio boxa…</p>
                            <p>Ethnogym fitnes klub je kreiran tako da svojim članovima pruži osećaj i prednosti sporta.</p>
                            <p>Naša filozofija je bazirana na humanističkim i sportskim vrednostima a naša ekipa profesionalaca je uvek spremna da vas dočeka, sasluša i pruži podršku. To je ekipa uz koju ćete se i zabaviti i dobiti željene rezultate.</p>
                            <p>Uz prvoklasnu opremu, efikasne fitnes programe, društvenu atmosferu i instruktore koji su inspirisani fitnesom i orijentisani da vam pruže sportski osećaj, bićete podstaknuti da dostignete željenu fizičku formu.</p>
                            <p>Mi jesmo specijalisti za grupne fitnes programe, ali pored toga održavamo i nezaboravne žurke i fitness događaje!Ethnogym is a community, the fitness community.</p>
                        </section>

                        <h2>Program Ishrane i treninzi:</h2>

                        <section className="about-paragrph">
                            <ul>
                                <li>Les Mills</li>
                                <li>Zumba</li>
                                <li>Pilates</li>
                                <li>Yoga</li>
                                <li>Cardio</li>
                                <li>E-core</li>
                            </ul>
                        </section>

                        <h4>Pridružite nam se i doživite fantastično iskustvo!</h4>
                    </div>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <p className="cta-text">Ne držite nas samo za sebe, šerujte!</p>
                    <div className="counter">
                        <p>
                            <strong>0</strong>
                            <i>puta podeljeno</i>
                        </p>
                        <div className="icons-div">
                            <a href="https://www.facebook.com/fit.inline.1" className="fa fa-facebook" id="face"> </a>
                            <a href="https://www.instagram.com/fit_inline/?hl=sr" className="fa fa-twitter"> </a>
                            <a href="https://www.instagram.com/fit_inline/?hl=sr" className="fa fa-google"> </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default About;