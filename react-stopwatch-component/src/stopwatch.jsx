import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isOn: false
    };
    this.handleStopwatch = this.handleStopwatch.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleStopwatch() {
    if (!this.state.isOn) {
      this.intervalId = setInterval(() => {
        this.setState(state => {
          return {
            counter: state.counter + 1,
            isOn: true
          };
        });
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.setState(state => {
        return {
          counter: state.counter,
          isOn: false
        };
      });
    }
  }

  reset() {
    if (this.state.isOn === false) {
      this.setState({
        counter: 0,
        isOn: false
      });
    }
  }

  render() {
    let watchClass;
    if (this.state.isOn) watchClass = 'fas fa-pause';
    else watchClass = 'fas fa-play';
    return (
      <div className="container">
        <div onClick={this.reset} className="timer">
          <span>{ this.state.counter }</span>
        </div>
        <i onClick={this.handleStopwatch} className={watchClass}></i>
      </div>

    );
  }

}

export default Stopwatch;
