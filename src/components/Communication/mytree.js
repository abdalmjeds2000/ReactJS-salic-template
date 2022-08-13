import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

export default class extends Component {

  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.chart = new OrgChart (this.divRef.current , {
      
      editForm: {
        buttons: {
          edit: null,
          pdf: null,
          share: null
        },
        // elements: null
      },
      nodes: this.props.nodes,

      nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
      },
      collapse: {
        level: 2,
        allChildren: true
      }, 
      
    });
  }

  render() {
    return (
      <div id="tree" ref={this.divRef}></div>
    );
  }
}
