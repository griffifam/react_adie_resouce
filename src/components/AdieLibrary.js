import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Adie from './Adie';
import './AdieLibrary.css';


class AdieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adies: [],
      adieCount: 0,
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
      this.props.grabAdieCallback(this.state.adies)
      this.props.adieCountCallback(`Successfully loaded ${this.state.adieCount} adies`)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    const allAdies = this.state.adies.map((adie, i) => {
      return <Adie
        key={i}
        age={adie.age}
        gender={adie.gender}
        race={adie.race}
        orientation={adie.orientation}
        transplant={adie.transplant}
        location_city={adie.location_city}
        location_state={adie.location_state}
        />
    });

    return (
      <div className="adieLibrary">
        <button onClick={() => this.props.showGraph("adies", "age")}>
          Age
        </button>
        <button onClick={() => this.props.showGraph("adies", "race")}>
          Race
        </button>
        <button onClick={() => this.props.showGraph("adies", "gender")}>
          Gender
        </button>
        <button onClick={() => this.props.showGraph("adies", "orientation")}>
          Orientation
        </button>
        <div className="library">
          <ol className="allAdies">
            {allAdies}
          </ol>
        </div>
      </div>
    )

  }
}

AdieLibrary.propTypes = {
  adieCountCallback:PropTypes.func,
  grabAdieCallback:PropTypes.func,
};

export default AdieLibrary;
