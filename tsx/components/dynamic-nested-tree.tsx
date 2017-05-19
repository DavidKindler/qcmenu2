import React from 'react';

const DynamicNestedItems = (props) => {
  const qcMenu = props.qcMenu
  return (
    <nav className="site">
      <ul>
        {mapStructure(qcMenu)}
      </ul>
    </nav>
  );
};


const mapStructure = (nodes) => {
    
    var nodeProps = function(props){
      var row = []
      // console.log (props)
      for (var i in props) {
        if (typeof props[i] !== 'object')
          row.push(" "+i+"==>"+props[i])
      }
      return row;
    }

    var subMenu = function(node) {
      console.log (node)
    }
    if (nodes) {
      return nodes.map(node => {
        // return ( <li onClick={subMenu(node)} key={node.mlid}>
        return ( <li onClick={() => subMenu(node)} key={node.mlid} className="list-anchor">
          <strong>{node.title}</strong>
          {/*{nodeProps(node)}*/}
        </li>
        );
      })
    }
}

export default DynamicNestedItems;