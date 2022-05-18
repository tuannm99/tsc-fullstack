import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { string: '2' };
  }

  componentDidMount() {
    console.log('Home didMount');
  }

  componentDidUpdate() {
    console.log('Home didUpdate');
  }

  render() {
    return <div className="container">home page {this.state.string}</div>;
  }
}

export default Home;
