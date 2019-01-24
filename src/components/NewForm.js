import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

// import { MDBContainer, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAdieData: {
        age: 0,
        gender: '',
        race: '',
        orientation: '',
        location_city: '',
        location_state: '',
        transplant: true,
      },
      newCompanyData: {
        company_size: 0,
        org_size: 0,
        industry: '',
        location_city: '',
        location_state: '',
        adies_present: false,
        level_of_microaggressions: '',
      },
      newOfferData: {
        hire_type: '',
        negotiation: false,
        vacation_days: 0,
        stocks: 0,
        health_insurance: 0,
        retirement_package: '',
        relocation_package: 0,
        signing_bonus: 0,
        base_amount: 0,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removepie();
  }

  onAgeChange = (event) => {
    this.setState({
      newAdieData: {
        ...this.state.newAdieData,
        age: event.target.value,
      },
    });
  }

  onGenderChange = (event) => {
    this.setState({
      newAdieData: {
        ...this.state.newAdieData,
        gender: event.target.value,
      },
    });
    console.log("Age changed to", this.state.newAdieData["age"]);
  }

  onRaceChange = (event) => {
    this.setState({
      newAdieData: {
        ...this.state.newAdieData,
        race: event.target.value,
      },
    });
    console.log("Gender changed to", this.state.newAdieData["gender"]);
  }

  onOrientationChange = (event) => {
    this.setState({
      newAdieData: {
        ...this.state.newAdieData,
        orientation: event.target.value,
      },
    });
    console.log("Race changed to", this.state.newAdieData["race"]);
  }

  onAdieCityChange = (event) => {
    this.setState({
      newAdieData: {
        ...this.state.newAdieData,
        location_city: event.target.value,
      },
    });
    console.log("Orientation changed to", this.state.newAdieData["orientation"]);
  }

  onAdieStateChange = (event) => {
    this.setState({
      newAdieData: {
        ...this.state.newAdieData,
        location_state: event.target.value,
      },
    });
    console.log("city changed to", this.state.newAdieData["location_city"])
  }

  onTransplantChange = (event) => {
    if (event.target.value === "true") {
      this.setState({
        newAdieData: {
          ...this.state.newAdieData,
          transplant: true,
        },
      });
    } else if (event.target.value === "false") {
      this.setState({
        newAdieData: {
          ...this.state.newAdieData,
          transplant: false,
        },
      });
    }
    console.log("State changed to", this.state.newAdieData["location_state"]);
  }

  onCompanySizeChange = (event) => {
    this.setState({
      newCompanyData: {
        ...this.state.newCompanyData,
        company_size: event.target.value,
      },
    });
    console.log("State changed to", this.state.newAdieData["transplant"]);
  }

  onOrgSizeChange = (event) => {
    this.setState({
      newCompanyData: {
        ...this.state.newCompanyData,
        org_size: event.target.value,
      },
    });
    console.log("State changed to", this.state.newAdieData["transplant"]);
  }

  onCompanyCityChange = (event) => {
    this.setState({
      newCompanyData: {
        ...this.state.newCompanyData,
        location_city: event.target.value,
      },
    });
    console.log("Org size changed to", this.state.newCompanyData["org_size"]);
  }

  onCompanyStateChange = (event) => {
    this.setState({
      newCompanyData: {
        ...this.state.newCompanyData,
        location_state: event.target.value,
      },
    });
    console.log("City changed to", this.state.newCompanyData["location_city"]);
  }

  onIndustryChange = (event) => {
    this.setState({
      newCompanyData: {
        ...this.state.newCompanyData,
        industry: event.target.value,
      },
    });
    console.log("State changed to", this.state.newCompanyData["location_state"]);
  }

  onAdiesPresentChange = (event) => {
    if (event.target.value === "true") {
      this.setState({
        newCompanyData: {
          ...this.state.newCompanyData,
          adiesPresent: true,
        },
      });
    } else {
      this.setState({
        newCompanyData: {
          ...this.state.newCompanyData,
          adiesPresent: false,
        },
      });
    }
    console.log("Location changed to", this.state.newCompanyData["industry"]);
  }

  onMicroChange = (event) => {
    this.setState({
      newCompanyData: {
        ...this.state.newCompanyData,
        level_of_microaggressions: event.target.value,
      },
    });
    console.log("Adies present changed to", this.state.newCompanyData["adiesPresent"]);
  }

  onNegotiateChange = (event) => {
    if (event.target.value === "true") {
      this.setState({
        newOfferData: {
          ...this.state.newOfferData,
          negotiation: true,
        },
      });
    } else {
      this.setState({
        newOfferData: {
          ...this.state.newOfferData,
          negotiation: false,
        },
      });
    }
    console.log("Age changed to", this.state.newCompanyData["level_of_microaggressions"]);
  }

  onHireChange = (event) => {
    if (event.target.value === "internal") {
      this.setState({
        newOfferData: {
          ...this.state.newOfferData,
          hire_type: "internal",
        },
      });
    } else {
      this.setState({
        newOfferData: {
          ...this.state.newOfferData,
          hire_type: "external",
        },
      });
    }
    console.log("Age changed to", this.state.newOfferData["negotiation"]);
  }

  onBaseChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        base_amount: event.target.value,
      },
    });
    console.log("Age changed to", this.state.newOfferData["base_amount"]);
  }

  onBonusChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        signing_bonus: event.target.value,
      },
    });
    console.log("base_amount changed to", this.state.newOfferData["base_amount"]);
    console.log("signing_bonus changed to", this.state.newOfferData["signing_bonus"]);
  }

  onRetirementChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        retirement_package: event.target.value,
      },
    });
    console.log("retirement_package changed to", this.state.newOfferData["retirement_package"]);
  }

  onRelocationChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        relocation_package: event.target.value,
      },
    });
    console.log("relocation_package changed to", this.state.newOfferData["relocation_package"]);
  }

  onVacationChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        vacation_days: event.target.value,
      },
    });
    console.log("vacation_days changed to", this.state.newOfferData["vacation_days"]);
  }

  onHealthChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        health_insurance: event.target.value,
      },
    });
    console.log("health_insurance changed to", this.state.newOfferData["health_insurance"]);
  }

  onStockChange = (event) => {
    this.setState({
      newOfferData: {
        ...this.state.newOfferData,
        stocks: event.target.value,
      },
    });
    console.log("stocks changed to", this.state.newOfferData["stocks"]);
  }

  handleSubmit(event) {
    console.log("a transplant? changed to", this.state.newAdieData["transplant"]);
    this.props.newDataCallback(this.state.newAdieData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h3>Adie Data</h3>
        <label> Adie Age:
          <input name="age" type="number" placeholder="21" onChange={this.onAgeChange}
            />
        </label><br></br>

        <label> Adie Race:
          <select name="race" onChange={this.onRaceChange}>
            <option value="black">Black</option>
            <option value="latinx">Latinx</option>
            <option value="asian">Asian</option>
            <option value="pacific islander">Island Pacific</option>
            <option value="indigenous">Indigenous</option>
            <option value="white">White</option>
          </select>
        </label><br></br>

        <label> Adie Orientation:
          <select name="orientation" onChange={this.onOrientationChange}>
            <option value="lesbian">Lesbian</option>
            <option value="gay">Gay</option>
            <option value="bisexual">Bisexual</option>
            <option value="asexual">Asexual</option>
            <option value="straight">Straight</option>
          </select>
        </label><br></br>

        <label> Adie Gender:
          <select name="gender" onChange={this.onGenderChange}>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="two-spirited">Two-Spirited</option>
            <option value="transgender">Transgender</option>
            <option value="male">Male</option>
          </select>
        </label><br />

        <label> Are you a transplant:
          Yes
          <input type="radio"
            name="transplant"
            value="true"
            onChange={this.onTransplantChange}
            />
          No
          <input type="radio"
            name="transplant"
            value="false"
            onChange={this.onTransplantChange}
            />
        </label><br></br>

        <label>City in which you reside:
          <input name="location_city" type="text" placeholder="Anchorage" onChange={this.onAdieCityChange}
            />
        </label><br></br>

        <label>State in which you reside:
          <input name="location_state" type="text" placeholder="Alaska" onChange={this.onAdieStateChange}
            />
        </label><br></br>

        <h3>Company Data</h3>
        <label>What is the size of the company:
          <input name="company_size" type="number" placeholder="1,250" onChange={this.onCompanySizeChange}
            />
        </label><br></br>

        <label>What is the size of the org/team:
          <input name="org_size" type="number" placeholder="36" onChange={this.onOrgSizeChange}
            />
        </label><br></br>

        <label>What city is company/office in:
          <input name="location_city" type="text" placeholder="Seattle" onChange={this.onCompanyCityChange}
            />
        </label><br></br>

        <label>What state is company/office in:
          <input name="location_state" type="text" placeholder="Washington" onChange={this.onCompanyStateChange}
            />
        </label><br></br>

        <label>What industry is company in:
          <input name="industry" type="text" placeholder="internet services" onChange={this.onIndustryChange}
            />
        </label><br></br>

        <label>Are any Adies present at company (that you know of)?:
          Yes
          <input type="radio" value="true" name="adiesPresent" onChange={this.onAdiesPresentChange}
            />
          No
          <input type="radio" value="false" name="adiesPresent"
            onChange={this.onAdiesPresentChange}
            />
        </label><br></br>

        <label>What mircroexpressions did you experience (if any)?:
          <input name="this.state.newCompanyData.level_of_microaggressions" type="text" placeholder="Gaslighting" value={this.state.newCompanyData['level_of_microaggressions']} onChange={this.onMicroChange} />
        </label><br></br>

        <h3>Offer Data</h3>
        <label>Hire Type (internal/external)?:
          Internal
          <input type="radio" name="hire_type" onChange={this.onHireChange} value="internal"
            />
          External
          <input type="radio" name="hire_type"
            onChange={this.onHireChange}
            value="external"
            />
        </label><br></br>

        <label>Did you Negotiate?:
          Yes
          <input type="radio" name="negotiation" onChange={this.onNegotiateChange}
            value="true"
            />
          No
          <input type="radio" name="negotiation"
            onChange={this.onNegotiateChange}
            value="false"
            />
        </label><br></br>

        <label>Base Salary:
          $
          <input name="base_amount" type="number" placeholder="95,000"
            onChange={this.onBaseChange}
            />
        </label><br></br>

        <label>Signing Bonus Amount:
          $
          <input name="signing_bonus" type="number" placeholder="15,000"
            onChange={this.onBonusChange}
            />
        </label><br></br>

        <label>Relocation Package (if relocated):
          $
          <input name='relocation_package' type="number"
            placeholder="30,000"
            onChange={this.onRelocationChange}
            />
        </label><br></br>

        <label>Retirement:
          <input name='retirement_package' type="text" placeholder="Match 50%" onChange={this.onRetirementChange}
            />
        </label><br></br>

        <label>Health Insurance Plan:
          $
          <input name='health_insurance' type="number" placeholder="9,000"
            onChange={this.onHealthChange}
            />
        </label><br></br>

        <label># of Vaction Days per year:
          <input name='vacation_days' type="number" placeholder="21" onChange={this.onVacationChange}
            />
        </label><br></br>

        <label># of Stock offered:
          <input name='stocks' type="number" placeholder="50"
            onChange={this.onStockChange}
            />
        </label><br></br>

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

NewForm.propTypes = {
  getNewFormData: PropTypes.func,
};

export default NewForm;
