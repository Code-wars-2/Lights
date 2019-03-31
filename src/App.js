import React, { Component } from 'react';
import { Icon } from 'antd';
import Bulb from './Assets/bulb-small.svg'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bulbState:false
    }
  }
  toggleBulb = () => {
    this.setState({
      bulbState: !this.state.bulbState
    })
  }
  render() {
    return (
      <div className="container">
        <Icon type="bulb" theme="filled" className={"bulb-"+ this.state.bulbState} onMouseEnter={this.toggleBulb} onMouseLeave={this.toggleBulb}/>
        <div className={"inner-light-"+ this.state.bulbState}/>
      </div>
    );
  }
}

export default App;
