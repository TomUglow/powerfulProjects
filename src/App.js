import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/powerfulProjects' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route exact path='/services' exact component={Services} />
        <Route exact path='/projects' exact component={Projects} />
        <Route exact path='/contact-us' exact component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
