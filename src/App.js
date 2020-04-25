import React, { Component } from 'react';
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import login from './pages/login';
import AuthRoute from './util/AuthRoute';
import jwtToken from 'jwt-decode';
import PostBlog from './components/News/PostBlog';

import { Provider } from 'react-redux';
import store from './redux/store';


let isAuthenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtToken(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // window.location.href = '/login'
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }
}

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="App">
            <ScrollButton />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <AuthRoute exact path='/login' component={login} authenticated={isAuthenticated} />
              <Route exact path='/fit-blog' component={PostBlog} />
              <Route exact path='/nutrition' component={NutritionPage} />
              <Route exact path='/news' component={News} />
              <Route exact path='/training' component={Training} />
              <Route exact path='/about' component={About} />
              <Route exact path='/gallery' component={GalleryPage} />
            </Switch>
            <Reserve />

            <div className="footer">
              <Footer />
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

{/* <Router history={history}>
  <div className="App">
    <div className="info-bar">
      <Navbar
        navbarState={this.state.navbarOpen}
        handleNavbar={this.handleNavbar}
      />

    </div>
    <ScrollButton />
    <Switch>
      <Route path="/fit-blog">
        <PostBlog />
      </Route>

      <AuthRoute exact path='/login' component={login} authenticated={authenticated} />

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
        <Training />
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



  </div>
</Router > */}
