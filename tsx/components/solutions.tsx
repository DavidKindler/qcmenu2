import React, { Component } from 'react';

interface MyProps {menu: any}
interface MyState {menu: any}

export default class Solutions extends Component<MyProps, MyState> {

  constructor (props, state){
    super(props)
    this.state = {
      menu: props.menu
    };
  }

 componentDidMount(props){
    // this.setState(function(){
    //       return {
    //         menuName: props.menuName
    //       }
    //     })
 }
  render() {
    return (
      <div>
        <div className="row"><h1>SOLUTION PAGE </h1></div>
      </div>
    );
  }
}
