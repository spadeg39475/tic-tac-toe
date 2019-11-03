import React, {createContext, Component}from 'react';

export const GameContext = createContext();

class GameContextProvider extends Component {
    
    state = {
        winner: null,
    }
    
    handleWinner = (result) => {
        this.setState({winner: result})
    } 

    render() {
        return (
            <GameContext.Provider value={{...this.state, handleWinner: this.handleWinner}}>
                {this.props.children}
            </GameContext.Provider>
        ) 
    }
}

export default GameContextProvider;