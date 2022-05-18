import './App.css';
import React from 'react';
import Page from './Page';
import Form from './Form';

class Welcome extends React.Component {
  componentDidMount() {}

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <Clock />
      </>
    );
  }
}

/** flow
 * When call  Clock: constructor ->  render() -> componentDidMount change state --> component rerender  --> componentWillUnmount ^
 * only use this.setState() method to change the state
 * this.setState((state, props) => {
 *   counter: state.counter + props.increment
 * }) --->  should because component may be asynchronous
 *  setState() include an object, when changed state, update state auto merge other key value when have multiple key
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // lifecycle methodss means some special method that run some code when component mounts or unmounts

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  // render will be called every time updated
  // component is rendered to DOM called "mounting"
  // component is removed to DOM called "unmounting"
  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}</h2>;
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // need bind to call this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// other way to handle click
class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Basic" />
      <Toggle />
      <LoggingButton />
      <Page />
      <Form />
    </div>
  );
}

export default App;
