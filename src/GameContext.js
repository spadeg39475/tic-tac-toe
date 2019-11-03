import React from 'react';

const GameContext = React.createContext({
    winner: null,
    handleWinner: () => {}
})

export class GameProvider extends React.Component {
    handleWinner = (result) => {
        this.setState({winner: result})
    }

    state = {
        winner: null,
        handleWinner: this.handleWinner
    }

    render() {
        return (
            <GameContext.Provider value={this.state}>
                {this.props.children}
            </GameContext.Provider>
        ) 
    }
}

export const GameConsumer = GameContext.Consumer