import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Company from './Company';

import './CompanyLibrary.css';

class CompanyLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      moreCompanies: '',
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
      console.log(this.state.companies);
      console.log(`number of companies = ${this.state.companies}`)
      this.props.companyCountCallback(`Successfully loaded ${this.state.companyCount} companies`)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }


  render() {
    const allCompanies = this.state.companies.map((company, i) => {
      console.log(company);
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
        <div className="library">
          <ol className="allCompanies">
            {allCompanies}
          </ol>
        </div>
      </div>
    )
  }
}

CompanyLibrary.propTypes = {
  companyCountCallback:PropTypes.func,
  grabCompanyTitleCallback:PropTypes.func,
};

export default CompanyLibrary;
