import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import MainNav from './components/main-nav';
import Content from './components/content';
const createStoreWithMiddleware = applyMiddleware()(createStore);
class Root extends Component {
    render() {
        return (React.createElement("div", { className: "container-fluid", id: "master-container" },
            React.createElement(MainNav, null),
            React.createElement(Content, null)));
    }
}
ReactDOM.render(React.createElement(Root, null), document.querySelector('div#root'));
/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/
// ReactDOM.render(<SearchBar/>, document.querySelector('.foo')); 
