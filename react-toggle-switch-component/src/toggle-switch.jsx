import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle === false) this.setState({ toggle: true });
    else this.setState({ toggle: false });
  }

  render() {
    return (
    <div className="container">
      <div
      onClick={(this.handleClick)}
      className = {this.state.toggle ? 'active' : '' }
      id="switch"
      >
        <div
              className={this.state.toggle ? 'active' : ''}
              id="circle"
            ></div>
        </div>
        <span>
          {this.state.toggle ? 'ON' : 'OFF'}
        </span>
      </div>
    );
  }
}
export default ToggleSwitch;
