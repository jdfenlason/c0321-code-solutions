import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.state = { password: '' };
    this.errorMessage = {
      errReq: 'A password is a required field',
      errLength: 'Password is too small',
      errIcon: 'fas fa-times',
      validIcon: 'fas fa-check',
      valid: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ password: '' });
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  validate() {
    if (this.state.password === '') {
      return this.errorMessage.errReq;
    } else {
      return this.errorMessage.errLength;
    }
  }

  render() {
    return (

 <form onSubmit= {this.handleSubmit}>
      <label htmlFor="password">Password</label>
      <div className="inputRow">

      <input type="password" id="password" value={this.state.props} onChange={this.handleChange}/>
      <i className = {this.state.password.length < 8 ? this.errorMessage.errIcon : this.errorMessage.validIcon}></i>

      </div>
      <p className = "error">
      {this.state.password.length < 8 ? this.validate() : this.errorMessage.valid}
      </p>
    </form>
    );

  }
}

export default ValidatedInput;
