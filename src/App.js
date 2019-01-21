import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import AdieLibrary from './components/AdieLibrary.js';
import CompanyLibrary from './components/CompanyLibrary.js';
import OfferLibrary from './components/OfferLibrary.js';
import PieChart from './components/PieChart.js';
// import StatusBar from './components/StatusBar.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: "",
      adies: [],
      companies: [],
      offers: [],
      currentChart: {
        dataset: "",
        field: "",
      },
      pieDisplay: false,
    };
  }

  changeMessage = (newMessage) => {
    this.setState({
      message: newMessage,
    });
  }

  listAdies = (adieObjects) => {
    // console.log(`List of Adies = ${adieObjects}`);
    this.setState({
      adies: adieObjects,
      pieDisplay: false,
    });
  }

  listCompanies = (companyObjects) => {
    // console.log(`List of Companies = ${companyObjects}`);
    this.setState({
      companies: companyObjects,
      pieDisplay: false,
    });
  }

  listOffers = (offerObjects) => {
    // console.log(`List of Offers = ${offerObjects}`);
    this.setState({
      offers: offerObjects,
      pieDisplay: false,
    });
  }

  showGraph = (newData, newField) => {
    if (newData === 'adies') {

      if (newField === 'age') {
        const data = {
          "18 - 24": 0,
          "25 - 32": 0,
          "33 - 39": 0,
          "40+": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.adies.forEach(function(adie) {
          let age = adie.age;

          if (age >= 18 && age <= 24) {
            data["18 - 24"]++
          } else if (age >= 25 && age <= 32) {
            data["25 - 32"]++
          } else if (age >= 33 && age <= 39) {
            data["33 - 39"]++
          } else if (age >= 40) {
            data["40+"]++
          }
        });
      } else if (newField === "race") {
        const data = {
          "Black": 0,
          "Latinx": 0,
          "Asian": 0,
          "White": 0,
          "Indigenous": 0,
          "Pacific Islander": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.adies.forEach(function(adie) {
          let race = adie.race.toLowerCase();

          if (race === "black" || race === "african american" || race === "african-american") {
            data["Black"]++
          } else if (race === "latinx" || race === "hispanic" || race === "latino") {
            data["Latinx"]++
          } else if (race === "asian") {
            data["Asian"]++
          } else if (race === "white" || race === "caucasian") {
            data["White"]++
          } else if (race === "native american" || race === "native-american" || race === "american native" || race === "alaska native") {
            data["Indigenous"]++
          } else if (race === "island pacific" || race === "hawaiian native") {
            data["Pacific Islander"]++
          } else {
            data["other"]++
          }
        });
      } else if (newField === "gender") {
        const data = {
          "female": 0,
          "non-binary": 0,
          "male": 0,
          "other": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.adies.forEach(function(adie) {
          let gender = adie.gender.toLowerCase();

          if (gender === "female") {
            data["female"]++
          } else if (gender === "non-binary") {
            data["non-binary"]++
          } else if (gender === "male") {
            data["male"]++
          } else if (gender === "two-spirited") {
            data["two-spirted"]++
          } else if (gender === "transgender" || gender === "trans") {
            data["trans"]++
          } else {
            data["other"]++
          }
        });
      } else if (newField === "orientation") {
        const data = {
          "straight": 0,
          "queer": 0,
          "asexual": 0,
          "other": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.adies.forEach(function(adie) {
          let orientation = adie.orientation.toLowerCase();

          if (orientation === "straight" || orientation === "heterosexual") {
            data["straight"]++
          } else if (orientation === "asexual") {
            data["asexual"]++
          } else {
            data["queer"]++
          }
        })
      }

      this.setState({
        pieDisplay: true,
      })

    } else if (newData === 'companies') {

      if (newField === 'orgSize') {
        const data = {
          "1 - 100": 0,
          "101 - 500": 0,
          "501 - 1000": 0,
          "1000+": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.companies.forEach(function(company) {
          let orgSize = company.org_size;

          if (orgSize >= 1 && orgSize <= 100) {
            data["1 - 100"]++
          } else if (orgSize >= 101 && orgSize <= 500) {
            data["101 - 500"]++
          } else if (orgSize >= 501 && orgSize <= 1000) {
            data["501 - 1000"]++
          } else if (orgSize >= 1000) {
            data["1000+"]++
          }
        });
      } else if (newField === 'industry') {
        const data = {
          "internet software cloud software services": 0,
          "software": 0,
          "information technology": 0,
          "electronic equipment instruments & components": 0,
          "machine learning": 0,
          "government & social services": 0,
          "security": 0,
          "artificial intelligence": 0,
          "other": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.companies.forEach(function(company) {
          let industry = company.industry.toLowerCase();
          // const labels = Object.keys(data);
          const labels = [
            "internet software cloud software services",
            "software",
            "information technology",
            "electronic equipment instruments & components",
            "machine learning",
            "government",
            "security",
            "finance",
            "artificial intelligence"
          ];
          //try to figure out how to regex this into specific categories

          labels.forEach(function(label) {
            if ( label.includes(industry) ) {
              data[`${label}`]++
            }
          });
        });
      } else if (newField === 'location') {
        const data = {
          "Seattle, Washington": 0,
          "Redmond, Washington": 0,
          "Kirkland, Washington": 0,
          "San Francisco, California": 0,
          "San Jose, California": 0,
          "Austin, Texas": 0,
          "Denver, Colorado": 0,
          "Chicago, Illinois": 0,
          "Atlanta, Georgia": 0,
          "Boston, Massachussetts": 0,
          "New York, New York": 0,
          "Other": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.companies.forEach(function(company) {
          const location =  `${company.location_city}, ${company.location_state}`;
          const labels = Object.keys(data);

          labels.forEach(function(label) {
            if (label.match(location) ){
              data["Seattle, Washington"]++
            } else if (label.match(location) ) {
              data["Redmond, Washington"]++
            } else if (label.match(location) ) {
              data["Kirkland, Washington"]++
            } else if (label.match(location) ) {
              data["San Francisco, California"]++
            } else if (label.match(location) ) {
              data["San Jose, California"]++
            } else if (label.match(location) ) {
              data["Austin, Texas"]++
            } else if (label.match(location) ) {
              data["Denver, Colorado"]++
            } else if (label.match(location) ) {
              data["Chicago, Illinois"]++
            } else if (label.match(location) ) {
              data["Atlanta, Georgia"]++
            } else if (label.match(location) ) {
              data["Boston, Massachussetts"]++
            } else if (label.match(location) ) {
              data["New York, New York"]++
            } else {
              data["Other"]++
            }
          })
        });
      }

      this.setState({
        pieDisplay: true,
      })

    } else if (newData === 'offers') {

      if (newField === 'hire_type') {
        const data = {
          "internal": 0,
          "external": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.offers.forEach(function(offer) {
          const hireType = offer.hire_type.toLowerCase();

          if (hireType === "internal" ) {
            data["internal"]++
          } else {
            data["external"]++
          }
        });
      } else if (newField === 'negotiations') {
        const data = {
          "Yes": 0,
          "No": 0
        };

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })

        this.state.offers.forEach(function(offer) {
          const negotiation = offer.negotiations;

          if (negotiation === true) {
            data["Yes"]++
          } else {
            data["No"]++
          }
        });
      } else if (newField === "adie_id") {
        const data = {};
        let counter = 0;

        this.state.offers.forEach(function(offer) {
          const adie = offer.adie_id
          if (adie > 0) {
            counter ++
            data[`${adie}`] = counter
          }
        });

        const currentChart = {
          dataset: data,
          field: newField,
        };

        this.setState({
          currentChart,
        })
      }

      this.setState({
        pieDisplay: true,
      })
    }
  }

  render() {

    let chartData = this.state.currentChart;
    let offer = this.state.offers[0];
    console.log("what is the value of negotiations", offer);

    return (

      <div className="App">
        <header className="App-header">
          <div className="nav-item1">
            <Link to="/adies" className="adie">Adie Library</Link>
          </div>
          <div className="nav-item2">
            <Link to="/companies" className="company">Company Library</Link>
          </div>
          <div className="nav-item3">
            <Link to="/offers" className="offer">Offer Library</Link>
          </div>
        </header>
        <div className="components-body">
          <Route exact path="/adies"
            render={ (props) => <AdieLibrary {...props}
            adieCountCallback={this.changeMessage}
            grabAdieCallback={this.listAdies}
            showGraph={this.showGraph} /> }
            />
          <Route exact path="/companies"
            render={ (props) => <CompanyLibrary {...props}
            companyCountCallback={this.changeMessage}
            grabCompanyCallback={this.listCompanies}
            showGraph={this.showGraph} /> }
            />
          <Route exact path="/offers"
            render={ (props) => <OfferLibrary {...props}
            offerCountCallback={this.changeMessage}
            grabOfferCallback={this.listOffers}
            showGraph={this.showGraph} /> }
            />
        </div>
        <div className="pie" style={{display: this.state.pieDisplay ? 'block' : 'none' }}>
          <svg width="500" height="500" fill="green">
            <PieChart data={chartData.dataset} />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
