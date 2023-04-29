import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  activateToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    const { toggle } = this.state;

    return (
      <div>
        <Navbar />
        Hello Toggle

        {toggle && <div>Coucou</div>}

        <button onClick={this.activateToggle}>Click ici</button>
      </div>
    );
  }
}

export default Toggle;
