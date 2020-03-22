import React, { Component } from 'react';
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage';
import { Router, Switch, Route } from 'react-router';
import history from './components/history';
import Training from './components/TrainingsPage/Training';
import './components/TrainingTypes/TrainingType.css';
import About from './components/About/About';
import Reserve from './components/Reserve/Reserve';
import News from './components/News/News';
import ScrollButton from './components/Buttons/ScrollButton';
import GalleryPage from './components/Gallery/GalleryPage';
import Navbar from './components/Infobar/Navbar';
import NutritionPage from './components/Nutrition/NutritionPage';


class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          {/*NAVBAR*/}
          <div className="info-bar">
            <Navbar
              navbarState={this.state.navbarOpen}
              handleNavbar={this.handleNavbar}
            />

          </div>
          <ScrollButton />


          <Switch>

            <Route path="/nutrition">
              <NutritionPage />
            </Route>

            <Route path="/news">
              <News h1="Vesti"
                h2="Budite u toku"
                text="Pratite nas ukoliko zelite da budete redovno informisani o novistima koje se ticu fitnes zajednice"
              />
            </Route>

            <Route path="/training">
              <Training/>
            </Route>

            <Route path="/about">
              <About
                program="Program Ishrane"
              />
            </Route>

            <Route path="/gallery">
              <GalleryPage />
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
