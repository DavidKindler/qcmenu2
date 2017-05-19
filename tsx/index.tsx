import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import MainNav from './components/main-nav';
import Footer from './components/footer';
// import reducers from './reducers/index';
import Products from './components/products';
import Home from './components/home';
import Solutions from './components/solutions';
import Inventions from './components/inventions';
import News from './components/news';
import Company from './components/company';

import API from './utils/api';
import MenuPanel from './components/menu-panel';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const createStoreWithMiddleware = applyMiddleware()(createStore);
interface MyProps {}
interface MyState {
  menus: any[],
  menuName: string,
  panelOpen: boolean
}

class Root extends Component<MyProps, MyState> {
   constructor(){
    super();
     this.state = {
      menus: [],
      menuName: null,
      panelOpen: false
    };
    // this.componentDidMount = this.componentDidMount.bind(this)
   }

  componentDidMount() {
    let self = this;
    API.getMenuItems().then(function (menus) {
       self.setState(function () {
        return {
          menus: menus,
          panelOpen: false
        }
      })
    });
  }

  getSelectedMenu(menuName){
    let self = this;
    return this.state.menus.find(function(menu){
      if (menu.name === menuName) {
        return menu
      }
    })
  }

  getChildMenu(parentMenuName,childMenuName) {
    let self=this;
    let parentMenu = this.getSelectedMenu(parentMenuName);
    if (parentMenu) {
      return parentMenu.items.find(function(menu){
        if(menu.title=== childMenuName) {
          return menu
        }
      })
    }
  }

  activePanel(){
    console.log('activate panel',this.state)
  }
  render(){ 
    let self=this;
    const solutionProps = {
      menu: this.getChildMenu('menu-ember','solutions') 
    }
    const inventionProps = {
      menu: this.getChildMenu('menu-ember','inventions') 
    }
    const newsProps = {
      menu: this.getChildMenu('menu-ember','news') 
    }
    // console.log ('productsProps', this.getChildMenu('menu-ember','Products'))
    return (
      <Router>
        <div  id="master-container">
          <MainNav menu={this.getSelectedMenu('menu-ember')} openPanel={this.activePanel} />
          <div className="container-fluid">
            <Route exact path="/" component={Home}  />
            <Route exact path="/products" render={props => ( <Products menu={this.getChildMenu('menu-ember','Products')} />  )}/>
            <Route exact path="/solutions" render={props => ( <Solutions menu={solutionProps} />  )}/>
            <Route exact path="/invention" render={props => ( <Inventions menu={inventionProps} />  )}/>
            <Route exact path="/news" render={props => ( <News menu={newsProps} />  )}/>
            <Route exact path="/company" component={Company} />
            <Footer menu={this.getSelectedMenu('menu-footer')} />
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('div#root'));

/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/

// ReactDOM.render(<SearchBar/>, document.querySelector('.foo'));