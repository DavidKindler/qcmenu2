import React, { Component } from 'react';


interface MyProps {menu: any}
interface MyState {menuItems: any}

export default class Products extends Component<MyProps, MyState> {

  constructor (props, state){
    super(props)
    this.state = {
      menuItems: props.menu
    };
  }

 componentDidMount(props){
    let self = this;
    this.setState(function(){
          return {
            menuItems: self.props.menu
          }
        })
 }
  render() {
    // console.log ('state',this.state.menuItems, 'props',this.props.menu)
    return (
      <div>
          <div className="row"><h1>PRODUCTS PAGE </h1></div>
        </div>
    );
  }
}
