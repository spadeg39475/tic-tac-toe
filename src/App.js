import React, {Component} from 'react';
import Board from './Board';

import './App.css';

class App extends Component{
  render(){
    return (
        <div className='main'>
            <h1 className='title'>Tic Tac Toe</h1>
            <Board />
        </div>
    )
  }

}

export default App;





