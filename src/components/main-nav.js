import React, { Component } from 'react';
import axios from 'axios';
import DynamicNestedTree from './dynamic-nested-tree';
export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qcMenu: []
        };
        console.log(props);
        this.qcMenu('menu-ember');
    }
    qcMenu(menu) {
        let self = this;
        axios
            .get("https://desolate-stream-50260.herokuapp.com/proxy?url=https://www.qualcomm.com/api/menus", {})
            .then(function (result) {
            self.setState({
                qcMenu: result.data[0].items
            });
        });
    }
    render() {
        return (React.createElement(DynamicNestedTree, { qcMenu: this.state.qcMenu }));
    }
}
