import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
    console.log("hello world");
    console.log(this.state.data);
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }
  render() {
    return(
      <div>
      Lay some words in there~
      </div>
    )
  }

}

PieChart.propTypes = {
  ages:PropTypes.array,
  genders:PropTypes.array,
  orientations:PropTypes.array,
  locationCities:PropTypes.array,
  locationStates:PropTypes.array,
};


export default PieChart;
