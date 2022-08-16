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
      // template: "diva",
      // template: "polina",
      // template: "belinda",
      template: "ana",
      // miniMap: true,
      editForm: {
        buttons: {
          edit: null,
          pdf: null,
          share: null
        },
        // elements: null
      },
      toolbar: {
        layout: true,
        zoom: true,
        fit: true,
        expandAll: false,
        fullScreen: true
      },
      min: true,
      scaleMax: 2,
      scaleMin: 0.1,
      scaleInitial: 0.7,
      nodes: this.props.nodes,
      nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
      },
      zoom: {speed: 100, smooth: 5},
      collapse: {
        level: 3,
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