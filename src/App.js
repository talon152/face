import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
         <Logo />
         {/*<ImageLinkForm/>
         <FaceRegognition/>}*/}
      </div>
    );
  }
}

export default App;
