import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent.js';
import SecondComponent from './SecondComponent.js';
import ThirdComponent from './ThirdComponent.js';
import FourthComponent from './FourthComponent.js';
import FivethComponent from './FivethComponent.js';
import SixthComponent from './SixthComponent.js';
import LanguageComponent from './LanguageComponent';

const PrintHello = ComposedComponent => class extends Component {
	onClick() {
		console.log('Hello');
	}
	render() {
		return <ComposedComponent {...this.props} onClick={this.onClick}/>
	}
}

const ExtendedComponent1 = PrintHello(ThirdComponent);
const ExtendedComponent2 = PrintHello(FourthComponent);

class App extends Component {
  render() {
    const languages = ['JavaScript','Python','Java','Elm','TypeScript','C#','F#'];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
		  <LanguageComponent header="Language List" languages={languages} />
		  <SixthComponent />
		  <FivethComponent />
		  <FivethComponent name="FivethComponent" />
		  <ExtendedComponent2 name="ExtendedComponent2" />
		  <ExtendedComponent1 name="ExtendedComponent1" />
		  <SecondComponent name="SecondComponent" />
		  <FirstComponent name="FirstComponent" />
        </header>
      </div>
    );
  }
}

export default App;
