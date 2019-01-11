import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './Offer.css';

const Offer = (props) => {
//
//   const onClickOffer = () => {
//     props.grabOfferTitleCallback(props.id)
//   }
const NumberFormat = require('react-number-format');

  return (

    <div className="offer">
      <li>
        <br/>
        <div className="offer__block">
          <div className="offer__info">
            <br/>
            Adie ID: {props.adie_id} <br/>
            Company ID: {props.company_id} <br/>
            Was negotiations possible? (true/false): {props.negotiations} <br/>
            Base Amt: <NumberFormat
                value={ props.base_amount}
                displayType={'text'}
                thousandSeparator={true} prefix={'$'} />
            <br/>
            Signing Bonus: <NumberFormat value={props.signing_bonus} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <br/>
            Relocation Package Amt: <NumberFormat value={props.relocation_package} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <br/>
            Health Insurance: <NumberFormat value={props.health_insurance} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <br/>
            # of vacation days: {props.vacation_days} <br/>
            Retirement/401K match: {props.retirement} <br/>
            # of stocks offered: {props.stocks} <br/>
            Intern hire or external hire? (Internal/External): {props.hire_type} <br/>
          </div>
        </div>
      </li>
    </div>
  )
}

// onClick={() => props.deleteCardCallback(props.id)}

Offer.propTypes = {
  id:PropTypes.number,
  adie_id:PropTypes.number,
  company_id:PropTypes.number,
  negotiations:PropTypes.node,
  base_amount:PropTypes.number,
  signing_bonus:PropTypes.number,
  relocation_package:PropTypes.number,
  health_insurance:PropTypes.number,
  vacation_days:PropTypes.number,
  stocks:PropTypes.number,
  retirement:PropTypes.string,
  hire_type:PropTypes.string,
  buttonClassname:PropTypes.string,
  grabOfferTitleCallback:PropTypes.func,
};

export default Offer;
