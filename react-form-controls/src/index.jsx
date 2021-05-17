import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('THe state is:', this.state);
  }

  render() {
    return (

      <form onSubmit= {this.handleSubmit}>
        <label htmlFor="email">
        Email
        </label>
        <input type="email" id="email" onChange={this.handleChange}value= {this.state.email} />
      <button>SIGN UP</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsLetterForm />,
  document.querySelector('#root')
);
