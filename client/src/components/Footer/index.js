import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Footer extends Component {
  render() {
    return (
      <div className='{backf}'>
  <footer class="py-3 my-4">
    <p class="text-center text-muted">© 2022 Practicant, Inc</p>
  </footer>
</div>
    )
  }
}

export default Footer;