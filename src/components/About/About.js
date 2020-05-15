import React, { Component } from 'react';
import Counter from './Counter.js';
import './About.css'
import AboutHead from './AboutHead.js';
import AboutContent from './AboutContent.js';

class About extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
                <div className="container-fluid background"></div>
                <AboutHead />
                <AboutContent
                    h1="O NAMA"
                    h2="Fitness studio FitInLine osnovan je u Kragujevcu 2011.godine. Osnivač je Tanja Nikolić diplomirani profesor fizičke kulture i savetnik za pravilnu ishranu i suplementaciju."
                    h3="Program Ishrane"
                    text2="Koncept rada zasnovan je na individualnom pristupu gde trener planira i prati rad vežbača u svakom trenutku. Takav, individualan pristup je jedini ispravan i adekvatan način da od svakog treninga dobijete maksimum."
                    text3="Personalni trening je idealna opcija za sve koji žele da se tokom svakog vežbanja trener maksimalno posveti njima, nadgleda i prati napredak svakog pojedinca. Trener je tu da osmisli treninge i ceo proces kako bi se dostigao glavni cilj vežbača bilo da je to poboljšanje ili održavanje opšteg fizičkog stanja i kondicije, korigovanje težine illi program oporavka i rehabilitacije."
                    text4="Fitness studio FitInLine pored različitih tipova individualnih treninga nudi i nutricionistički plan ishrane. Plan ishrane se pravi nakon merenja i razgovora, u skladu sa individualnim ciljevima pojedinca. Trenutno u ponudi imamo program FitFast (link ka stranici), koji kao naefikasniji program daje i najbrže rezultate, a  predstavlja kombinaciju treninga i plana ishrane."
                    text6="Radno vreme je fleksibilno i radi shodno potrebama korisnika."
                    text7="Ukoliko imate pitanja ili nedoumice, uvek nas možete pozvati i dodatno se informisati na broj -> br.telefona"
                    text8="Mi smo tu zbog vas!"
                />
                <hr />
            </main>
        )
    }
}

export default About;
