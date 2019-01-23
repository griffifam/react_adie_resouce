import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { MDBContainer, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAdieData: {
        age: '',
        gender: '',
        race: '',
        orientation: '',
        adieCurrentCity: '',
        adieCurrentState: '',
        adieTransplant: '',
      },
      newCompanyData: {
        companySize: 0,
        orgSize: 0,
        industry: '',
        city: '',
        state: '',
        adiesPresent: false,
        microaggressionsPresent: '',
      },
      newOfferData: {
        adieId: 0,
        companyId: 0,
        hireType: '',
        negotiation: false,
        vacay: 0,
        stock: 0,
        health: 0,
        retirementOpt: '',
        relocationOpt: 0,
        bonus: 0,
        baseAmt: 0,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, data) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    this.props.newDataCallback(this.state.newAdieData, this.state.newCompanyData, this.state.newOfferData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label> Adie Age:
          <input type="number" placeholder="21" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label> Adie Race:
          <select name="race">
            <option value="black">Black</option>
            <option value="latinx">Latinx</option>
            <option value="asian">Asian</option>
            <option value="pacific islander">Island Pacific</option>
            <option value="indigenous">Indigenous</option>
            <option value="white">White</option>
          </select>
        </label><span></span>
        <label> Adie Orientation:
          <select name="orientation">
            <option value="lesbian">Lesbian</option>
            <option value="gay">Gay</option>
            <option value="bisexual">Bisexual</option>
            <option value="asexual">Asexual</option>
            <option value="straight">Straight</option>
          </select>
        </label><span></span>
        <label> Adie Gender:
          <select name="gender">
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="two-spirited">Two-Spirited</option>
            <option value="transgender">Transgender</option>
            <option value="male">Male</option>
          </select>
        </label><br />
        <label> Are you a transplant:
          <select name="gender">
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="two-spirited">Two-Spirited</option>
            <option value="transgender">Transgender</option>
            <option value="male">Male</option>
          </select>
        </label><span> </span>
        <label>City in which you reside:
          <input type="text" placeholder="Anchorage" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label>State in which you reside:
          <input type="text" placeholder="Alaska" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        Company Data:
        <label>What is the size of the company:
          <input type="number" placeholder="1,250" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label>What is the size of the org/team:
          <input type="number" placeholder="36" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label>What city is company/office in:
          <input type="text" placeholder="Seattle" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label>What state is company/office in:
          <input type="text" placeholder="Washington" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label>What industry is company in:
          <input type="text" placeholder="internet services" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label><span></span>
        <label>Are any Adies present at company (that you know of)?:
        Yes <input type="radio"
       name="question"
       onChange={this.state.onRadioChange}
       value={this.state.newCompanyData.adiesPresent.value} /> {this.state.newCompanyData.adiesPresent.value}
       No <input type="radio"
       name="question"
       onChange={this.state.onRadioChange}
       value={this.state.newCompanyData.adiesPresent.value} /> {this.state.newCompanyData.adiesPresent.value}
       </label><span></span>




        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

NewForm.propTypes = {
  getNewFormData: PropTypes.func,
};

export default NewForm;
