import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { toggle } = this.state;
    (toggle) ? this.setState({ toggle: true }) : this.setState({ toggle: false });
  }

  render() {
    const { toggle } = this.state;
    return (
      <>
        <i
          className="fas fa-bars menu-icon"
          onClick={this.handleClick}
        >
        </i>
          <div
            className={toggle ? 'overlay active' : 'overlay'}
            onClick={this.handleClick}
          >
          </div>
          <div className={toggle ? 'menu active' : 'menu'}>
            <h2>Menu</h2>
            <ul>
              <li onClick={this.handleClick}>
                <a href="#">About</a>
              </li>
              <li onClick={this.handleClick}>
                <a href="#">Get Started</a>
              </li>
              <li onClick={this.handleClick}>
                <a href="#">Sign In</a>
              </li>
            </ul>
        </div>

      </>
    );
  }
}
export default AppDrawer;
