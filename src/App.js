import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/validation';
import Char from './Char/char';

class App extends Component {
  state = {
    inputValueLength: null,
    inputValue: ''
  };

  getLength = event => {
    this.setState({
      inputValueLength: event.target.value.length,
      inputValue: event.target.value
    });
  };

  deleteLetter = idx => {
    let array = [...this.state.inputValue.split('')];
    array.splice(idx, 1);
    this.setState({ inputValue: array.join('') });
  };

  render() {
    let chars = this.state.inputValue
      .split('')
      .map((letter, idx) => (
        <Char
          key={idx}
          letter={letter}
          delete={this.deleteLetter.bind(this, idx)}
        />
      ));

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input
          type="text"
          onChange={event => this.getLength(event)}
          value={this.state.inputValue}
        />
        <div>
          <Validation textLength={this.state.inputValueLength} />
        </div>
        <div>{chars}</div>
      </div>
    );
  }
}

export default App;
