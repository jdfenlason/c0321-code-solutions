import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ clicks: state.clicks + 1 }));
  }

  render() {
    let buttonClass;
    if (this.state.clicks >= 15) buttonClass = 'nuclear';
    else if (this.state.clicks >= 12) buttonClass = 'hot';
    else if (this.state.clicks >= 9) buttonClass = 'warm';
    else if (this.state.clicks >= 6) buttonClass = 'tepid';
    else if (this.state.clicks >= 3) buttonClass = 'cold';
    else if (this.state.clicks < 3) buttonClass = 'freezing';
    return (
      <button onClick={(this.handleClick)} className={buttonClass}>
      Hot Button
      </button>

    );
  }
}
export default HotButton;
