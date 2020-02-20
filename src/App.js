import React, { Component } from 'react';
import Infobar from './components/Infobar/Infobar';
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage';
import { Router, Switch, Route } from 'react-router';
import history from './components/history';
import TrainingsPage from './components/TrainingsPage/TrainingsPage';
import './components/TrainingTypes/TrainingType.css'
import About from './components/About/About';



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
