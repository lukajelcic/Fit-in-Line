import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter.js';
import './About.css'
import Media from './Media'
import AboutHead from './AboutHead.js';
import AboutContent from './AboutContent.js';

function About(props) {
    return (
        <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
            <div className="background"></div>
            <AboutHead />
            <AboutContent
                h1="O NAMA"
                h2="Fitness i teretana Fit in Line se nalazi na lokaciji Janka Veselinovica"
                h3="Program Ishrane"
                h4="Pridružite nam se i doživite fantastično iskustvo!"
                text1="Ethnogym je specijalista u Beogradu za grupne fitnes programe sa više od 200 fitnes časova mesečno i 15 različitih vrsta programa. Od Les Mills programa do yoge, pilatesa, zumbe, cardio boxa…"
                text2="Ethnogym fitnes klub je kreiran tako da svojim članovima pruži osećaj i prednosti sporta.Naša filozofija je bazirana na humanističkim i sportskim vrednostima a naša ekipa profesionalaca je uvek spremna da vas dočeka, sasluša i pruži podršku. To je ekipa uz koju ćete se i zabaviti i dobiti željene rezultate."
                text3="Uz prvoklasnu opremu, efikasne fitnes programe, društvenu atmosferu i instruktore koji su inspirisani fitnesom i orijentisani da vam pruže sportski osećaj, bićete podstaknuti da dostignete željenu fizičku formu.Mi jesmo specijalisti za grupne fitnes programe, ali pored toga održavamo i nezaboravne žurke i fitness događaje!Ethnogym is a community, the fitness community."
            />
            <div>
                <h3 className="coach-title">upoznajte <span>NAS TIM</span></h3>
                <div className="coach-content" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="coach">
                        <Media
                            img="https://nsc.ie/wp-content/uploads/2015/08/PT-10-300x189.jpg"
                            role="Trener"
                            name="Tanja Nikolic"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    </div>

                    <div className="coach">
                        <Media
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Two_people_in_a_gym_using_BOSU_balls.jpg/1200px-Two_people_in_a_gym_using_BOSU_balls.jpg"
                            role="Trener"
                            name="Luka Jelcic"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    </div>

                    <div className="coach">
                        <Media
                            img="https://o2fitnessclubs.com/wp-content/uploads/2018/05/1X1A1536-Edit-e1526250979627.jpg"
                            role="Trener"
                            name="Una Nikolic"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    </div>
                </div>
            </div>

            <section className="about-list">
                <div className="list">
                    <Link to="/nutrition"><h3 className="about-nutrition">{props.program}</h3></Link>
                </div>
            </section>


            <hr></hr>

            <p className="cta-text">Ne držite nas samo za sebe, šerujte!</p>

            <Counter />
        </main>
    )
}

export default About;
