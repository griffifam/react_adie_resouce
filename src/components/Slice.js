import * as React from 'react';
import * as d3 from 'd3';


const Slice = props => {
  let { pie } = props;

  let arc = d3.arc()
  .innerRadius(0)
  .outerRadius(100);

  let interpolate = d3.interpolateRgb("red", "blue");

  return pie.map((slice, i) => {
    let sliceColor = interpolate(i / (pie.length - 1));
    return <path d={arc(slice)} fill={sliceColor} />;
  });
};

export default Slice;
