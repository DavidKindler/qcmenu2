import React, { Component } from 'react';

interface MyProps {}
interface MyState {menuName: string}

export default class Home extends Component<MyProps, MyState> {

  constructor (props, state){
    super(props)
    this.state = {
      menuName: null
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
         <div className="row"><h1>HOME PAGE </h1></div>
    );
  }
}
