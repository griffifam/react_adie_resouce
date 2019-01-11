import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Offer from './Offer';

import './OfferLibrary.css';

class OfferLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      moreOffers: '',
      offerCount: 0,
    };
  }

  componentDidMount() {
    this.getOffers()
  }

  getOffers = () => {
    axios.get('http://localhost:8000/offerlist/')
    .then((response) => {
      console.log(response);
      this.setState({
        offers: response.data,
        offerCount: response.data.length,
      });
      console.log(this.state.offers);
      console.log(`number of offers = ${this.state.offers}`)
      this.props.offerCountCallback(`Successfully loaded ${this.state.offerCount} offers`)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }


  render() {
    const allOffers = this.state.offers.map((offer, i) => {
      console.log(offer);
      return <Offer
        key={i}
        adie_id={offer.adie_id}
        company_id={offer.company_id}
        negotiations={offer.negotiations}
        base_amount={offer.base_amount}
        signing_bonus={offer.signing_bonus}
        health_insurance={offer.health_insurance}
        vacation_days={offer.vacation_days}
        retirement={offer.retirement}
        stocks={offer.stocks}
        hire_type={offer.hire_type}
        grabOfferTitleCallback={this.props.grabOfferTitleCallback}
        />

    });


    return (
      <div className="offerLibrary">
        <div className="library">
          <ol className="allOffers">
            {allOffers}
          </ol>
        </div>
      </div>
    )
  }
}

OfferLibrary.propTypes = {
  offerCountCallback:PropTypes.func,
  grabOfferTitleCallback:PropTypes.func,
};

export default OfferLibrary;
