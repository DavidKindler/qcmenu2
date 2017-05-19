import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
interface MyProps {activePanel: any; menuItems: any; }
interface MyState {panelOpen: boolean; menuItems: any, activePanel: boolean}

class MenuPanel extends Component<MyProps,MyState> {
    constructor (props, state){
        super(props)
        this.state = {
            panelOpen: false,
            menuItems: [],
            activePanel: false
        }
    }

    componentWillReceiveProps(props){
      this.setState(function () {
        return {
            menuItems : props.menuItems.children,
            panelOpen: props.activePanel,
            activePanel: props.activePanel
        }
        });
    }
        
    render() {
        let menuItems = this.state.menuItems;
        let panelOpen = this.state.activePanel;
        let self = this;
        let menu_items = function(): any{
            if (menuItems)
            return menuItems.map((menuItem)=> {
                    return (
                    <li key={menuItem.mlid}  >
                      <Link to={"/"+menuItem.path}> {menuItem.title}</Link>
                    </li>
                    )
                })  
        };
        let panelComp = function(){
            if (panelOpen) {
                return (
                    <div id="menu-panel-one" className= "open" >
                        {menu_items()}
                    </div>
                )
            } else {
                return (
                    <div id="menu-panel-one" />
                )
            }
        };
        return panelComp() 
    }
}

export default MenuPanel;