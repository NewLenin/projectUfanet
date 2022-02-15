import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <Header/>

        <main className="flex-shrink-0 back">
          <div> 

            <Switch>

              
              <Route exact path="/" component={Home} />

            </Switch>
          </div>
        </main>


      </Router>
    )
  }
}

export default App;