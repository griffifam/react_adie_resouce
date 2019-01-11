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
      console.log(response);
      this.setState({
        adies: response.data,
        adieCount: response.data.length,
      });
      console.log(this.state.adies);
      this.props.adieCountCallback(`Successfully loaded ${this.state.adieCount} adies`)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }


  render() {
    const allAdies = this.state.adies.map((adie, i) => {
      console.log(adie);
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
      </div>
    )
  }
}

AdieLibrary.propTypes = {
  adieCountCallback:PropTypes.func,
  grabAdieTitleCallback:PropTypes.func,
};

export default AdieLibrary;
