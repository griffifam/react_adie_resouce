import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Adie from './Adie';
import './AdieLibrary.css';

import PieChart from './PieChart';

class AdieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adies: [],
      moreAdies: '',
      adieCount: 0,
    };
  }

  componentDidMount() {
    this.getAdies()
  }

  getAdies = () => {
    axios.get('http://localhost:8000/adielist/')
    .then((response) => {
      // this.adies = response.data;
      // console.log("did this work", this.adies);
      this.setState({
        adies: response.data,
        adieCount: response.data.length,
      });
      this.props.adieCountCallback(`Successfully loaded ${this.state.adieCount} adies`)
      response.data.map((adie) => {
        console.log("what is this", adie.age);
      })
      // this.props.adieAgePieCallback(response.data.age)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {

    const allAdies =
    this.state.adies.map((adie, i) => {
      return <Adie
        key={i}
        age={adie.age}
        gender={adie.gender}
        race={adie.race}
        orientation={adie.orientation}
        transplant={adie.transplant}
        location_city={adie.location_city}
        location_state={adie.location_state}
        grabAdieTitleCallback={this.props.grabAdieTitleCallback}
        />

    });

    return (
      <div className="adieLibrary">
        <div className="library">
          <ol className="allAdies">
            {allAdies}
          </ol>
        </div>
        <svg width="500" height="500" fill="green">
          <PieChart data={getAgeData(this.state.adies)} />
        </svg>
      </div>
    )
  }
}

function getAgeData(adies) {
  const data = {
    "18 - 24": 0,
    "25 - 32": 0,
    "33 - 39": 0,
    "40+": 0
  }

  adies.forEach(function(adie) {
    let age = adie.age;

    if (age >= 18 && age <= 24) {
      data["18 - 24"]++
    } else if (age >= 25 && age <= 32) {
      data["25 - 32"]++
    } else if (age >= 33 && age <= 39) {
      data["33 - 39"]++
    } else if (age >= 40) {
      data["40+"]++
    }
  });

  return data;

}

AdieLibrary.propTypes = {
  adieCountCallback:PropTypes.func,
  grabAdieTitleCallback:PropTypes.func,
};

export default AdieLibrary;
