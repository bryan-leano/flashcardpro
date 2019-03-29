import React from 'react';
import StackList from './StackList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <hr/>
        <StackList />
      </div>
    )
  }
}

export default App;