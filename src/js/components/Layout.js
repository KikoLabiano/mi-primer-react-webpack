import React from "react";
import Header from "./Header";

export default class Layout extends React.Component{
  constructor(){
    super();
    this.name = "MARCIAL";
  }

  getValue(a,b){
    return a+b;
  }
  render(){
    let list = [
      <Header />,
      <Header />
    ]
    return (
      <div>
        {list}
        <div>¡YEEEEEEEEEEEEHA {this.name}! TENGO {this.getValue(2,5)} COBETES</div>
        <Header/>
      </div>
    );
  }
}
