import React from 'react';

class Card extends React.Component {
  render() {
    const { prompt, answer } = this.props.card;

    return (
      <div>
        <div><h4>{prompt}</h4></div>
        <div><h4>{answer}</h4></div>
      </div>
    )
  } 

}

export default Card;