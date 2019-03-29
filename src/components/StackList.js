import React from 'react';
import stacks from '../data/stacks.json';

class StackList extends React.Component {
  render() {
    return (
      <div>
        {
          stacks.map(stack => {
            return (
              <h4 key={stack.id}>{stack.title}</h4>
            )
          })
        }
      </div>
    )
  }
}

export default StackList;