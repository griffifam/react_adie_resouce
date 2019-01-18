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
      pieDisplay: false,
      data: [],
    };
  }

  componentDidMount() {
    this.getAdies()
  }

  getAdies = () => {
    axios.get('http://localhost:8000/adielist/')
    .then((response) => {
      this.setState({
        adies: response.data,
        adieCount: response.data.length,
      });
      this.props.adieCountCallback(`Successfully loaded ${this.state.adieCount} adies`)
      // this.props.adieAgePieCallback(response.data.age)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  getAgeData = () => {
    const data = {
      "18 - 24": 0,
      "25 - 32": 0,
      "33 - 39": 0,
      "40+": 0
    }

    this.state.adies.forEach(function(adie) {
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

    this.props.pieCallback(data);

    this.setState({
      pieDisplay: true,
      data: data,
    });
  }

  getGenderData = () => {
    const data = {
      "female": 0,
      "non-binary": 0,
      "male": 0,
      "other": 0
    }

    this.state.adies.forEach(function(adie) {
      let gender = adie.gender;

      if (gender === "FEMALE".toLowerCase()) {
        data["female"]++
      } else if (gender === "NON-BINARY".toLowerCase()) {
        data["non-binary"]++
      } else if (gender === "MALE".toLowerCase()) {
        data["male"]++
      } else if (gender === "TWO-SPIRITED".toLowerCase()) {
        data["two-spirted"]++
      } else if (gender === "TRANSGENDER".toLowerCase() || gender === "TRANS".toLowerCase()) {
        data["trans"]++
      } else {
        data["other"]++
      }
    });

    this.props.pieCallback(data);

    this.setState({
      pieDisplay: true,
      data: data,
    });

  }

  getOrientationData = () => {
    const data = {
      "straight": 0,
      "queer": 0,
      "asexual": 0,
      "other": 0
    }

    this.state.adies.forEach(function(adie) {
      let orientation = adie.orientation.toLowerCase();

      if (orientation === "STRAIGHT".toLowerCase() || orientation === "HETEROSEXUAL".toLowerCase() ) {
        data["straight"]++
      } else if (orientation === "ASEXUAL".toLowerCase()) {
        data["asexual"]++
      } else {
        data["queer"]++
      }
    });

    this.props.pieCallback(data);

    this.setState({
      pieDisplay: true,
      data: data,
    });

  }

  getRaceData = () => {
    const data = {
      "Black": 0,
      "Latinx": 0,
      "Asian": 0,
      "White": 0,
      "Indigenous": 0,
      "Pacific Islander": 0
    }

    this.state.adies.forEach(function(adie) {
      let race = adie.race.toLowerCase();

      if (race === "BLACK".toLowerCase() || race === "AFRICAN AMERICAN".toLowerCase() || race === "AFRICAN-AMERICAN".toLowerCase() ) {
        data["Black"]++
      } else if (race === "LATINX".toLowerCase() || race === "HISPANIC".toLowerCase() || race === "LATINO".toLowerCase()) {
        data["Latinx"]++
      } else if (race === "ASIAN".toLowerCase()) {
        data["Asian"]++
      } else if (race === "WHITE".toLowerCase() || race === "CAUCASIAN".toLowerCase()) {
        data["White"]++
      } else if (race === "NATIVE AMERICAN".toLowerCase() || race === "NATIVE-AMERICAN".toLowerCase() || race === "AMERICAN NATIVE".toLowerCase() || race === "ALASKA NATIVE".toLowerCase()) {
        data["Indigenous"]++
      } else if (race === "ISLAND PACIFIC".toLowerCase() || race === "HAWAIIAN NATIVE".toLowerCase()) {
        data["Pacific Islander"]++
      } else {
        data["other"]++
      }
    });

    this.props.pieCallback(data);

    this.setState({
      pieDisplay: true,
      data: data,
    });

  }


  render() {

    // let style = !this.state.pieDisplay ? "show" : "none" ;

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
        <button onClick={this.getAgeData}>Age</button>
        <button onClick={this.getGenderData}>Gender</button>
        <button onClick={this.getRaceData}>Race</button>
        <button onClick={this.getOrientationData}>Orientation</button>
        <div className="library">
          <ol className="allAdies">
            {allAdies}
          </ol>
        </div>
        <div className="pie" >
          <svg width="500" height="500" fill="green">
            <PieChart data={this.state.data} />
          </svg>
        </div>
      </div>
    )
  }
}

AdieLibrary.propTypes = {
  adieCountCallback:PropTypes.func,
  grabAdieTitleCallback:PropTypes.func,
};

export default AdieLibrary;
