import React, {
  Component
} from 'react';
// import DynamicNestedTree from './dynamic-nested-tree';
// import MenuPanel from './menu-panel';
import MenuList from './menu-list';
import MenuPanel from './menu-panel';
import API from '../utils/api';

interface MyProps {menu: any; openPanel: any;}
interface MyState {
  menuItems: any[],
  menuPanel: any,
  openPanel: any,
  panelMenu: any[],
  panelOpen: boolean
}
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class MainNav extends Component < MyProps, MyState > {

  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      menuPanel : null,
      panelMenu: [],
      openPanel: null,
      panelOpen: false
    };
    this.openPanel = this.openPanel.bind(this)
  }


  openPanel(panel){
    // console.log (this.state, panel)
      let panelState: boolean = panel.length > 1
      // this.state.openPanel();

      this.setState(function () {
              return {
                  panelOpen: panelState,
                  // activePanel: panelState,
                  panelMenu: this.state.menuItems.find(function(menu){if (menu.title===panel) return menu })
              }
      });
  }
  
  componentWillReceiveProps(props){
      this.setState(function () {
        return {
            menuItems : props.menu.items,
            openPanel: props.panelOpen,
            panelOpen: props.panelOpen
        }
        });
    }

  render() {
    let menu_panel = null;
    let panelMenu = this.state.panelMenu;
    let panelOpen = this.state.panelOpen;
    if (panelOpen) {
      menu_panel = <MenuPanel activePanel={true} menuItems = {panelMenu}/>;
    } else {
      menu_panel =<MenuPanel activePanel={false} menuItems = {[]}/>;
    }
    return ( 
      <div>
        {menu_panel} 
        {/*<MenuPanel activePanel={panelOpen} menuItems={panelMenu} />}*/}
        <nav className="site">
            <MenuList 
            menuItems = {this.state.menuItems}
            selectPanel = {this.openPanel}
            /> 
        </nav>
      </div>
    );
  }
}