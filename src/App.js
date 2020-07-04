import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Comps/Layout/Navbar';
import Footer from './Comps/Layout/Footer';
import Home from './Comps/Pages/Home.js';
import About from './Comps/Pages/About.js';
import skills from './Comps/Pages/skills.js';
import Testimonials from './Comps/Pages/Testimonials.js';
import NotFound from './Comps/Pages/NotFound.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ContactMe from './Comps/Pages/ContactMe';

const App = () => {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      <div className='App  '>
        <Navbar />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/ContactMe' component={ContactMe} />
              <Route exact path='/Testimonials' component={Testimonials} />
              <Route exact path='/skills' component={skills} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
