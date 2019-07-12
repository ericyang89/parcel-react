import React,{Component} from "react";
import { render } from "react-dom";

// const App = () => <div>this is react111</div>;
class App extends Component{
  handle=()=>{
    
  }
  render(){
    return<div>
      <button onClick={this.handle}>btn</button>
    </div>
  }
}

render(<App />, document.getElementById("app"));
