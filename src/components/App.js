import React, {Component} from 'react';
import Board from './Board';
import GameContextProvider from '../context/GameContext'

// import './App.css';

class App extends Component{
  render(){
    return (
        <GameContextProvider>
            <div className='main'>
                <h1 className='title'>Tic Tac Toe</h1>
                <Board />
            </div>
        </GameContextProvider>
    )
  }
}

export default App;





