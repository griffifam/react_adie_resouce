import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Company from './Company';

import { Table, Button } from 'reactstrap';

import './CompanyLibrary.css';

class CompanyLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      companyCount: 0,
    };
  }

  componentDidMount() {
    this.getCompanies()
  }

  getCompanies = () => {
    axios.get('http://localhost:8000/companylist/')
    .then((response) => {
      console.log(response);
      this.setState({
        companies: response.data,
        companyCount: response.data.length,
      });
      this.props.grabCompanyCallback(this.state.companies)
      this.props.companyCountCallback(`Successfully loaded ${this.state.companyCount} companies`)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }


  render() {
    const allCompanies = this.state.companies.map((company, i) => {
      // console.log(company);
      return <Company
        key={i}
        company_size={company.company_size}
        org_size={company.org_size}
        location_city={company.location_city}
        location_state={company.location_state}
        industry={company.industry}
        adies_present={company.adies_present}
        level_of_microaggressions={company.level_of_microaggressions}
        grabCompanyTitleCallback={this.props.grabCompanyTitleCallback}
        />
    });


    return (
      <div className="companyLibrary">
        <div className="buttons">
        <Button outline color="primary" onClick={() => this.props.showGraph("companies", "orgSize")}>Oganization Size</Button>
        <Button outline color="primary" onClick={() => this.props.showGraph("companies", "location")}>Location</Button>
        <Button outline color="primary" onClick={() => this.props.showGraph("companies", "industry")}>Industry</Button>
        </div>
        <div className="library">
          <Table className="adietable">
            <thead>
              <tr>
                <th>#</th>
                <th>Company Size</th>
                <th>Org/Team Size</th>
                <th>Any Adies Present</th>
                <th>Current City</th>
                <th>Current State</th>
                <th>Company Industry</th>
                <th>Microaggressions</th>
              </tr>
            </thead>
            <tbody>
                {this.state.companies.map((company, i) => {
                  let age = company.age;
                  let presence = company.adies_present ? "Yes" : "No";

                  return (
                    <tr className="this">
                      <th scope="row">{i}</th>
                      <td>{company.company_size}</td>
                      <td>{company.org_size}</td>
                      <td>{presence}</td>
                      <td>{company.location_city}</td>
                      <td>{company.location_state}</td>
                      <td>{company.industry}</td>
                      <td>{company.level_of_microaggressions}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}


CompanyLibrary.propTypes = {
  companyCountCallback:PropTypes.func,
  grabCompanyTitleCallback:PropTypes.func,
};

export default CompanyLibrary;
