import React, { Component } from 'react';
export default class Content extends Component {
    constructor(props, state) {
        super(props);
        this.state = {
            qcMenu: []
        };
    }
    render() {
        console.log('content qcmenu sate?', this.state.qcMenu);
        return (React.createElement("div", { className: "row" },
            React.createElement("h1", null, "TEST")));
    }
}
