import * as React from 'react';
import * as d3 from 'd3';
import Slice from './Slice';
import PropTypes from 'prop-types';

// const data = [10, 30, 10, 30, 40];
//


//const percent = age18_24.length / data.length;

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }


  render() {

    console.log("what are props", this.props);
    console.log("whats in props.data", this.props.data);

    const height = 500;
    const width = 500;

    console.log("Age props", this.props.data);
    console.log("keys", Object.keys(this.props.data));
    console.log("values", Object.values(this.props.data));

    let pie = d3.pie()(
      Object.values(this.props.data)
    );


    let label = Object.keys(this.props.data);

    console.log("this is label", label);

    return(
      <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
      <Slice pie={pie} label={label} />
      </g>
      </svg>
    );
  }
}


PieChart.propTypes = {
  data: PropTypes.array,
}

export default PieChart;
