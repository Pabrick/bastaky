import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
