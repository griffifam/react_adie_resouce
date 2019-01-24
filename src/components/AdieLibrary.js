import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Adie from './Adie';
import './AdieLibrary.css';

import { Table, Button } from 'reactstrap';


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
        <Button outline color="primary" onClick={() => this.props.showGraph("adies", "age")}>
          Age
        </Button>
        <Button outline color="primary" onClick={() => this.props.showGraph("adies", "race")}>
          Race
        </Button>
        <Button outline color="primary" onClick={() => this.props.showGraph("adies", "gender")}>
          Gender
        </Button>
        <Button outline color="primary" onClick={() => this.props.showGraph("adies", "orientation")}>
          Orientation
        </Button>
        <div className="library">
          <Table className="adietable">
            <thead>
              <tr>
                <th>#</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Race</th>
                <th>Orientation</th>
                <th>City</th>
                <th>State</th>
                <th>Transplant?</th>
              </tr>
            </thead>
            <tbody>
                {this.state.adies.map((adie, i) => {
                  let age = adie.age;
                  let transplant = adie.transplant ? "Yes" : "No";

                  return (
                    <tr>
                      <th scope="row">{i}</th>
                      <td>{age}</td>
                      <td>{adie.gender}</td>
                      <td>{adie.race}</td>
                      <td>{adie.orientation}</td>
                      <td>{adie.location_city}</td>
                      <td>{adie.location_state}</td>
                      <td>{transplant}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
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
