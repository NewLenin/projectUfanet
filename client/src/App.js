import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
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

        <Footer/>
      </Router>
    )
  }
}

export default App;