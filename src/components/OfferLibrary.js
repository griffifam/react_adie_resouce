import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Offer from './Offer';

import { Table, Button } from 'reactstrap';

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
      console.log("it pops up here", this.state.offers);
      console.log(`number of offers = ${this.state.offers.length}`)
      this.props.grabOfferCallback(this.state.offers)
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
        <div className="buttons">
          <Button outline color="primary" onClick={() => this.props.showGraph("offers", "hire_type")}>Hire Type</Button>
          <Button outline color="primary" onClick={() => this.props.showGraph("offers", "negotiations")}>Negotiations</Button>
          <Button outline color="primary" onClick={() => this.props.showGraph("offers", "adie_id")}># of Adies</Button>
        </div>
        <div className="library">
          <Table className="offertable">
            <thead>
              <tr>
                <th>#</th>
                <th>Adie ID</th>
                <th>Company ID</th>
                <th>Negotiation?</th>
                <th>Base Salary</th>
                <th>Signing Bonus</th>
                <th>Relocation</th>
                <th>Health</th>
                <th>Retirement</th>
                <th>Vacation Days</th>
                <th>Hire Type</th>
                <th>Stocks</th>
              </tr>
            </thead>
            <tbody>
              {this.state.offers.map((offer, i) => {
                let age = offer.age;
                let negotiation = offer.negotiations ? "Yes" : "No";

                return (
                  <tr className="this">
                    <th scope="row">{i}</th>
                    <td>{offer.adie_id}</td>
                    <td>{offer.company_id}</td>
                    <td>{negotiation}</td>
                    <td>{offer.base_amount}</td>
                    <td>{offer.signing_bonus}</td>
                    <td>{offer.relocation_package}</td>
                    <td>{offer.health_insurance}</td>
                    <td>{offer.retirement}</td>
                    <td>{offer.vacation_days}</td>
                    <td>{offer.hire_type}</td>
                    <td>{offer.stocks}</td>
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

OfferLibrary.propTypes = {
  offerCountCallback:PropTypes.func,
  grabOfferTitleCallback:PropTypes.func,
};

export default OfferLibrary;
