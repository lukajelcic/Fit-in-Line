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
                text1="Fitness studio FitInLine osnovan je u Kragujevcu 2011.godine. Osnivač je Tanja Nikolić diplomirani profesor fizičke kulture i savetnik za pravilnu ishranu i suplementaciju."
                text2="Koncept rada zasnovan je na individualnom pristupu gde trener planira i prati rad vežbača u svakom trenutku. Takav, individualan pristup je jedini ispravan i adekvatan način da od svakog treninga dobijete maksimum."
                text3="Personalni trening je idealna opcija za sve koji žele da se tokom svakog vežbanja trener maksimalno posveti njima, nadgleda i prati napredak svakog pojedinca. Trener je tu da osmisli treninge i ceo proces kako bi se dostigao glavni cilj vežbača bilo da je to poboljšanje ili održavanje opšteg fizičkog stanja i kondicije, korigovanje težine illi program oporavka i rehabilitacije."
                text4="Fitness studio FitInLine pored različitih tipova individualnih treninga nudi i nutricionistički plan ishrane. Plan ishrane se pravi nakon merenja i razgovora, u skladu sa individualnim ciljevima pojedinca."
                text5="Trenutno u ponudi imamo program FitFast (link ka stranici), koji kao naefikasniji program daje i najbrže rezultate, a  predstavlja kombinaciju treninga i plana ishrane."
                text6="Radno vreme je fleksibilno i radi shodno potrebama korisnika."
                text7="Ukoliko imate pitanja ili nedoumice, uvek nas možete pozvati i dodatno se informisati na broj -> br.telefona"
                text8="Mi smo tu zbog vas!"
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
                    <Link to="/nutrition/#nutri"><h3 className="about-nutrition">{props.program}</h3></Link>
                </div>
            </section>


            <hr></hr>

            <p className="cta-text">Ne držite nas samo za sebe, šerujte!</p>

            <Counter />
        </main>
    )
}

export default About;
