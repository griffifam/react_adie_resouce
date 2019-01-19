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
    });
  }

  listCompanies = (companyObjects) => {
    // console.log(`List of Companies = ${companyObjects}`);
    this.setState({
      companies: companyObjects,
    });
  }

  listOffers = (offerObjects) => {
    // console.log(`List of Offers = ${offerObjects}`);
    this.setState({
      offers: offerObjects,
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
    } else if (newData === 'companies') {
      if (newField === 'companySize') {
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
          "Internet Software & Services": 0,
          "Software": 0,
          "Information Technology Services": 0,
          "Electronic Equipment Instruments & Components": 0,
          "Machine Learning": 0,
          "Government & Social Services": 0,
          "Security": 0,
          "Artificial Intelligence": 0,
          "Other": 0,
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

          if (/internet|software|cloud|software services/.test(industry) ) {
            data["Internet Software & Services"]++
          } else if (/software/.test(industry) ) {
            data["Software"]++
          } else if (/information|technology/.test(industry) ) {
            data["Information Technology Services"]++
          } else if (/electronic|equipment|instruments|hardware|components/.test(industry) ) {
            data["Electronic Equipment Instruments & Components"]++
          } else if (/machine learning/.test(industry) ) {
            data["Machine Learning"]++
          } else if (/government|social services/.test(industry) ) {
            data["Government & Social Services"]++
          } else if (/security/.test(industry) ) {
            data["Security"]++
          } else if (/finance/.test(industry) ) {
            data["Finance"]++
          } else if (/artificial intelligence/.test(industry) ) {
            data["Artificial Intelligence"]++
          } else {
            data["Other"]++
          }
        });
      }
    }
    this.setState({
      pieDisplay: true,
    })
  }

  render() {
    console.log("how is this laid out",this.state.companies);

    let chartData = this.state.currentChart;

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
            showGraph={this.showGraph}
            /> }
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
