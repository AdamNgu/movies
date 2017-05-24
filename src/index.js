import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

import MoviesIndex from './components/movies_index'
import MoviesNew from './components/movies_new';
import MoviesShow from './components/movies_show';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/movies/new" component={MoviesNew} />
          <Route path="/movies/:id" component={MoviesShow} />
          <Route path="/" component={MoviesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  , document.querySelector('.container'));
