import React from 'react';
import PropTypes from 'prop-types';

import './Company.css';

const Company = (props) => {
//
//   const onClickCompany = () => {
//     props.grabCompanyTitleCallback(props.id)
//   }


  return (
    <div className="company">
      <li>
      <br/>
        <div className="company__block">
          <div className="company__info">
            Company size: {props.company_size} <br/>
            Number of teammates in organization: {props.org_size} <br/>
            Company Location: {props.location_city}, {props.location_state} <br/>
            Company industry: {props.industry} <br/>
            Are Adies Present? (true/false): {props.adies_present} <br/>
            Experience any microaggressions?: {props.level_of_microaggressions}
          </div>
        </div>
      </li>
    </div>
  )
}

// onClick={() => props.deleteCardCallback(props.id)}

Company.propTypes = {
  id:PropTypes.number,
  company_size:PropTypes.number,
  org_size:PropTypes.number,
  location_city:PropTypes.string,
  location_state:PropTypes.string,
  industry:PropTypes.string,
  adies_present:PropTypes.node,
  level_of_microaggressions:PropTypes.string,
  buttonClassname:PropTypes.string,
  grabCompanyTitleCallback:PropTypes.func,
};

export default Company;
