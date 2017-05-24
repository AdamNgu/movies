import React, { Component } from 'react';
import MoviesNew from '../containers/movies_new';
import MoviesIndex from '../containers/movies_index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MoviesNew/>
        <MoviesIndex/>
      </div>
    );
  }
}
