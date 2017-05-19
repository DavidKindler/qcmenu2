import React, { Component } from 'react';
import MenuList from './menu-list';

interface MyProps {menu: any}
interface MyState {
  menuItems: any[],
}

export default class MainNav extends Component < MyProps, MyState > {

  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
    };
  }

  footerFunc(){
    // some footer function here
  }
  componentWillReceiveProps(props){
      this.setState(function () {
        return {
            menuItems : props.menu.items
        }
        });
    }

  render() {
    return ( 
      <div className="row" id="footer">
          <MenuList 
            menuItems = {this.state.menuItems}
            selectPanel = {this.footerFunc}
            /> 
       </div>
    );
  }
}