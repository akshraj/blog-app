import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blogs from '../src/container/Blogs/Blogs';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Blogs />
      </BrowserRouter>
    );
  }
}

export default App;
