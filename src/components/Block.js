import React, {Component} from 'react';


class Block extends Component{
  
    click=()=>{
      this.props.update(this.props.index);
    }
    
    render(){
      return(
        
          <div 
            className={`block 
            ${this.props.block === 1 ? "circle" 
            : this.props.block === -1 ? "cross" 
            : null}`}
  
            onClick={this.click}
          >
          
          </div>  
      )
    }
}

export default Block;