import React, {Component} from 'react';

class Backdrop extends Component{
    render(){
      return(
        <div className='backdrop' style={this.props.isShow ? {display: 'flex'} : {display:'none'}}>
          <div className='result'>{this.props.result}</div>
          <div className='reset' onClick={this.props.reset}>Reset</div>
        </div>
      )
    }
}

export default Backdrop;