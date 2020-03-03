import React, { Component } from 'react';
import Infobar from './components/Infobar/Infobar';
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage';
import { Router, Switch, Route } from 'react-router';
import history from './components/history';
import Training from './components/TrainingsPage/Training';
import './components/TrainingTypes/TrainingType.css'
import About from './components/About/About';
import Reserve from './components/Reserve/Reserve';
import News from './components/News/News'
import TrainingBtn from './components/Buttons/TrainingBtn'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          {/*NAVBAR*/}
          <div className="info-bar">
            <Infobar />
          </div>
          <TrainingBtn />


          <Switch>
            <Route path="/news">
              <News h1="Vesti"
                    h2="Budite u toku"
                    text="Pratite nas ukoliko zelite da budete redovno informisani o novistima koje se ticu fitnes zajednice" 
              />
            </Route>

            <Route path="/training">
              <Training h1="Treninzi za svakog"
                        h2="Mnoštvo različitih fitness treninga!" 
                        text1 ="Ethnogym je fitnes centar koji vas uvodi u jedan novi način treniranja. Odlična atmosfera na grupnim treninzima i u teretani je ono što čini Ethnogym prepoznatljivim!
                        Danas je Ethnogym tim sastavljen od najboljih specijalista za fitnes u svakom segmentu grupnih treninga, a na raspolaganju vam stoje i sertifikovani personalni treneri za individualni rad ili rad u manjim grupama (Funkcionalni trening)."
                        text2="Zato, ne oklevajte i slobodno nam se pridružite, rešenje za Vas je ETHNOGYM, odličan način da provedete svoje vreme i ujedno održite ili popravite svoje zdravlje!"
              />
            </Route>

            <Route path="/about">
              <About
               h1="Fitness i Ishrana"
               h2="Fitness i teretana Fit in Line se nalazi na lokaciji Janka Veselinovica"
               h3="Program Ishrane"
               h4="Pridružite nam se i doživite fantastično iskustvo!"
               item1="Les Mills"
               item2="Zumba"
               item3="Pilates"
               item4="Yoga"
               item5="Cardio"
               item6="E-core"
               text1="Ethnogym je specijalista u Beogradu za grupne fitnes programe sa više od 200 fitnes časova mesečno i 15 različitih vrsta programa. Od Les Mills programa do yoge, pilatesa, zumbe, cardio boxa…"
               text2="Ethnogym fitnes klub je kreiran tako da svojim članovima pruži osećaj i prednosti sporta.Naša filozofija je bazirana na humanističkim i sportskim vrednostima a naša ekipa profesionalaca je uvek spremna da vas dočeka, sasluša i pruži podršku. To je ekipa uz koju ćete se i zabaviti i dobiti željene rezultate."
               text3="Uz prvoklasnu opremu, efikasne fitnes programe, društvenu atmosferu i instruktore koji su inspirisani fitnesom i orijentisani da vam pruže sportski osećaj, bićete podstaknuti da dostignete željenu fizičku formu.Mi jesmo specijalisti za grupne fitnes programe, ali pored toga održavamo i nezaboravne žurke i fitness događaje!Ethnogym is a community, the fitness community."
               />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
            
          </Switch>

          <Reserve />

          {/*FOOTER */}
          <div className="footer">
            <Footer />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
