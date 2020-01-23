import React, { Component } from 'react'
import './App.css'
import Validation from './Validation/Validation.js'
import Char from './Char/Char.js'

class App extends Component {
  state = {
    userInput: ''
  }
  textLengthHandler = event => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = index => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const splicedText = text.join('')
    this.setState({ userInput: splicedText })
  }

  render () {
    const charList = this.state.userInput
      .split('')
      .map((char, index) => (
        <Char
          character={char}
          key={char + Math.floor(Math.random() * 1000000)}
          handleClick={() => this.deleteCharHandler(index)}
        />
      ))

    let textLength = this.state.userInput.length

    return (
      <div className='App'>
        <input
          type='text'
          onChange={this.textLengthHandler}
          value={this.state.userInput}
          style={{padding: "5px"}}
        ></input>
        <p>
          {this.state.userInput} <br /> Text length:{textLength}
        </p>
        <br />
        <Validation textLength={textLength} />
        {charList}
      </div>
    )
  }
}

export default App
