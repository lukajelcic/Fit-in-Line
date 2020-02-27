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



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">

          {/*NAVBAR*/}
          <div className="info-bar">
            <Infobar />
          </div>

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
              <About />
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
