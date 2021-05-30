import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import Domestic from './components/pages/Domestic';
import Commercial from './components/pages/Commercial';
import Industrial from './components/pages/Industrial';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/domestic' exact component={Domestic} />
        <Route path='/commercial' exact component={Commercial} />
        <Route path='/industrial' exact component={Industrial} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
