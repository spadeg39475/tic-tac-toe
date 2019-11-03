import React, {Component} from 'react';
import Block from './Block';
import Backdrop from './Backdrop';

class Board extends Component {
    constructor(props){
      super(props);
      
      this.state= {
          turn: 1,
          blocks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          winner: null,
          showBackdrop: false
      }
    }
    
    componentDidUpdate(){
        if(this.state.winner !== null && !this.state.showBackdrop){
            this.setState({showBackdrop:true})
        }
    }

    render(){
      let blocks = [];
      for(let i=0; i<this.state.blocks.length; i++){
        blocks.push(<Block 
                      index = {i} 
                      block = {this.state.blocks[i]}
                      update = {this.updateBlock}
                      key={i}
                    />);
      }
      
    let turn = '';
    this.state.turn === 1 ? turn = 'O' : turn = 'X'; 
    
    return(
        <React.Fragment>
            <Backdrop result={this.state.winner} reset={this.reset} isShow={this.state.showBackdrop}/>
            <div className='turn'>Now is <span>{turn}</span>'s turn</div>
            <div className='board'>{blocks}</div>  
        </React.Fragment>
        
    )

      
    }
  
    updateBlock = (index)=>{
        this.setState((preState)=>{
            let current = preState.blocks[index];
            if(current === 0 && preState.winner === null){
                preState.blocks[index] = preState.turn;
                let winner = this.checkWinner();
                return {
                  turn: -preState.turn,
                  blocks: preState.blocks,
                  winner: winner
                }
            }
        })
    }
  
    checkWinner = ()=>{
      let verifyList = '123, 456, 789, 147, 258, 369, 159, 357';
      let result = verifyList.split(',')
                    .map((text) => {
                        let add = this.state.blocks
                                  .filter((d,i)=>text.indexOf(i+1)!==-1)
                                  .reduce((a,b)=>a+b)
                         
                        return add;
                    })
      result = result.filter((el)=>Math.abs(el) === 3)
     
      if(result.length > 0){
        console.log(result[0] === 3 ? 'O win' : 'X win');
        return result[0] === 3 ? 'O win' : 'X win';
      }else if(this.state.blocks.indexOf(0) === -1){
        console.log('draw');
        return 'Draw';
      }else{
        return null;
      }
    }
  
    reset = ()=>{
      this.setState({
          turn: 1,
          blocks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          winner: null,
          showBackdrop: false
      })
    }
  }
  
  export default Board;