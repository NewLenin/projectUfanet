import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';

import './App.css';


import ReactDOM from 'react-dom';

import FileBase64 from './react-file-base64.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  getFiles(files){
    this.setState({ files: files })
  }

  render() {
    return (
      <Router>

        <Home/>
        
      </Router>
    )
  }
}

export default App;