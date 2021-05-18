import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexDisplay: 0 };
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickDots = this.clickDots.bind(this);
    this.length = this.props.images.length;

  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.indexDisplay === (this.length - 1)) {
        this.setState({ indexDisplay: 0 });
      } else {
        this.setState({ indexDisplay: this.state.indexDisplay + 1 });
      }
    }, 5000);
  }

  clickRight() {
    if (this.state.indexDisplay === (this.length - 1)) {
      this.setState({ indexDisplay: 0 });
    } else {
      this.setState({ indexDisplay: this.state.indexDisplay + 1 });
    }
  }

  clickLeft() {
    if (this.state.indexDisplay === 0) {
      this.setState({ indexDisplay: this.length - 1 });
    } else {
      this.setState({ indexDisplay: this.state.indexDisplay - 1 });
    }
  }

  clickDots(i) {
    this.setState({ indexDisplay: i });
  }

  render() {
    const indexDisplay = this.state.indexDisplay;
    const index = this.props.images[indexDisplay];
    const dots = this.props.images.map((image, i) => {
      if (i === this.state.indexDisplay) {
        return <i key={i} onClick={() => this.clickDots(i)} className="fas fa-circle"></i>;
      } else { return <i key={i} onClick={() => this.clickDots(i)} className="far fa-circle"></i>; }
    });
    return (
      <div className="carousel">
        <div className="row">

        <i className="fas fa-chevron-left" onClick={this.handleLeft}></i>
        <div className="images-container">
          <img src={index}></img>
          <div className="row">
            {dots}
          </div>
        </div>
        <i className="fas fa-chevron-right" onClick={this.clickRight}></i>
      </div>
        </div>
    );
  }
}

export default Carousel;
