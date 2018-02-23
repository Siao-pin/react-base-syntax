import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "Pavel"
    }
  }

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.usernameChangeHandler.bind(this)} value={this.state.username} />

        <UserOutput text="text1" username="Ivan" />
        <UserOutput text="bla-bla" username="Vladimir" />
        <UserOutput text="test" username={this.state.username} />

      </div>
    );
  }
}

export default App;
