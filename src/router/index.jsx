import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'Main';
import Gallery from 'Gallery';
import Trailer from 'Trailer';
import DanceLaw from 'DanceLaw';
import Story from 'Story';
import Synopsis from 'Synopsis';
import LandingPage from 'LandingPage';
import Contact from 'Contact';

export default(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={LandingPage} />
      <Route path="synopsis" component={Synopsis} />
      <Route path="story" component={Story} />
      <Route path="gallery" component={Gallery} />
      <Route path="trailer" component={Trailer} />
      <Route path="contact" component={Contact} />
      <Route path="dancelaw" component={DanceLaw} />
    </Route>
  </Router>
);
