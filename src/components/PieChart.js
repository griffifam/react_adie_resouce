import * as React from 'react';
import * as d3 from 'd3';
import Slice from './Slice';
// import PropTypes from 'prop-types';

// const data = [10, 30, 10, 30, 40];
//


//const percent = age18_24.length / data.length;


export const SimplePieChart = (props) => {
  const height = 500;
  const width = 500;

  console.log("props", props.data);
  console.log("keys", Object.keys(props.data));
  console.log("values", Object.values(props.data));

  let pie = d3.pie()(
    Object.values(props.data));


  let label = Object.keys(props.data);

    console.log("this is label", label);

    return(
      <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
      <Slice pie={pie} label={label} />
      </g>
      </svg>
    );
  };
  //
  // class PieChart extends Component {
  //   constructor(props) {
  //     super(props);
  //
  //     this.state = {
  //       data: this.props.data,
  //     };
  //
  //     console.log("hello world");
  //     console.log(this.props.data);
  //   }
  //
  //   componentDidMount() {
  //
  //   }
  //
  //   componentDidUpdate() {
  //
  //   }
  //
  //   render() {
  //     return(
  //       <div>
  //       Lay some words in there~
  //       {this.props.data}
  //       </div>
  //     )
  //   }
  //
  // }
  //
  // PieChart.propTypes = {
  //   ages:PropTypes.array,
  //   genders:PropTypes.array,
  //   orientations:PropTypes.array,
  //   locationCities:PropTypes.array,
  //   locationStates:PropTypes.array,
  // };


  export default SimplePieChart;
