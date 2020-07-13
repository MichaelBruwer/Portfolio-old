import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  ABOUT_PAGE,
  CONTACT_PAGE,
  SKILLS_PAGE,
  TESTIMONIALS_PAGE,
} from './Comps/Layout/Links';

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

        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path={ABOUT_PAGE} component={About} />
            <Route exact path={CONTACT_PAGE} component={ContactMe} />
            <Route exact path={TESTIMONIALS_PAGE} component={Testimonials} />
            <Route exact path={SKILLS_PAGE} component={skills} />
            <Route component={NotFound} />
          </Switch>
        </Router>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
