import * as React from 'react';
import * as d3 from 'd3';


const Slice = props => {
  let { pie } = props;

  console.log("whats props", props);

  let arc = d3.arc()
  .innerRadius(0)
  .outerRadius(250);

  let interpolate = d3.interpolateRgb("red", "blue");

  return pie.map((slice, i) => {
    console.log(slice);
    let sliceColor = interpolate(i / (pie.length - 1));

    let makeSlice = slice.value ? <text transform={`translate(${arc.centroid(slice)})`}
        dy=".35em"
        textAnchor="middle"
        fill="white">

    {props.label[i]}
    </text> : <text></text> ;

    return (
      <g>
      <path key={i} d={arc(slice)} fill={sliceColor} />
      {makeSlice}
      </g>
    );
  });
};

export default Slice;
