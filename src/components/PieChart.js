import * as React from 'react';
import * as d3 from 'd3';
import Slice from './Slice';
// import PropTypes from 'prop-types';

const data = [10, 30, 10, 30, 40];


export const SimplePieChart = (props) => {
  const height = 400;
  const width = 400;

  console.log("did I get it", props.data);

  let pie = d3.pie()(data);

  return(
    <svg height={height} width={width}>
    <g transform={`translate(${width / 2},${height / 2})`}>
    <Slice pie={pie} />
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
