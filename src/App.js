import React, { Component } from 'react';
import Infobar from './components/Infobar/Infobar';
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage';
import { Router, Switch, Route } from 'react-router';
import history from './components/history';
import TrainingsPage from './components/TrainingsPage/TrainingsPage';
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
              <News />
            </Route>
            <Route path="/training">
              <TrainingsPage />
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
