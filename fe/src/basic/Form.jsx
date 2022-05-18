import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert('Aname was submitted ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <input type="submit" value="SubmitForm" />
        </form>
        <EssayForm />
        <FlavorForm />
      </div>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Please write an essay about' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert('An essay submmited: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Essay:
          <textarea
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
