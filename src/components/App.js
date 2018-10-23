import React, { Component } from 'react';
import './App.css';

import SearchBar from '../containers/search_bar';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="container">
          <SearchBar />
      </div>
    );
  }
}

export default App;
