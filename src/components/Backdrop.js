import React, {Component} from 'react';
import {GameContext} from '../context/GameContext';

class Backdrop extends Component{
    static contextType = GameContext;

    render(){
      const {winner} = this.context;
      
      return(
        <div className='backdrop' style={this.props.isShow ? {display: 'flex'} : {display:'none'}}>
          <div className='result'>{winner}</div>
          <div className='reset' onClick={this.props.reset}>Reset</div>
        </div>
      )
    }
}

export default Backdrop;