import React, { Component } from 'react';

interface MyProps {menu:any}
interface MyState {menu: any}

export default class News extends Component<MyProps, MyState> {

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
    console.log (this.state, this.props)
    return (
         <div className="row"><h1>NEWS PAGE </h1></div>
    );
  }
}
