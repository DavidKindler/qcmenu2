import React from 'react';
const DynamicNestedItems = (props) => {
    const qcMenu = props.qcMenu;
    return (React.createElement("nav", { className: "site" },
        React.createElement("ul", null, mapStructure(qcMenu))));
};
const mapStructure = (nodes) => {
    var nodeProps = function (props) {
        var row = [];
        // console.log (props)
        for (var i in props) {
            if (typeof props[i] !== 'object')
                row.push(" " + i + "==>" + props[i]);
        }
        return row;
    };
    var listItem = function (node) {
        // console.log (node)
        return (React.createElement("li", { key: node.mlid },
            React.createElement("a", { href: `${node.path}` }, node.title),
            nodeProps(node)));
    };
    var tree = function (node) {
        return node.map(node => {
            return (React.createElement("ul", { key: node.mlid },
                listItem(node),
                node.has_children ? tree(node.children) : null));
        });
    };
    var subMenu = function (node) {
        console.log(node);
    };
    if (nodes) {
        return nodes.map(node => {
            // return ( <li onClick={subMenu(node)} key={node.mlid}>
            return (React.createElement("li", { onClick: () => subMenu(node), key: node.mlid, className: "list-anchor" },
                node.title,
                node.has_children ? tree(node.children) : null));
        });
    }
};
export default DynamicNestedItems;
