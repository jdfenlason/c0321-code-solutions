import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedTopic = event.target.getAttribute('topic');
    if (clickedTopic === this.state.isActive) {
      this.setState({ isActive: null });
    } else {
      this.setState({ isActive: clickedTopic });
    }
  }

  render() {
    const topics = this.props.languages.map(topic => {
      const contentClass = topic.name === this.state.isActive ? '' : 'hidden';
      return (
        <div key={topic.name} className='topic'>
          <div className='name' topic={topic.name} onClick={this.handleClick}>{topic.name}</div>
          <div className={`content ${contentClass}`}>{topic.content}</div>
        </div>
      );
    });
    return topics;
  }
}

export default Accordion;
