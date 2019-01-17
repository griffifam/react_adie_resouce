import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';
import AdieLibrary from './components/AdieLibrary.js';
import CompanyLibrary from './components/CompanyLibrary.js';
import OfferLibrary from './components/OfferLibrary.js';
// import PieChart from './components/';
// import StatusBar from './components/StatusBar.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      adieList: [],
      companyList: [],
      offerList: [],
      data: [],
    };
  }

  changeMessage = (newMessage) => {
    this.setState({
      message: newMessage,
    });
  }

  listAdies = (adieObjects) => {
    console.log(`List of Adies = ${adieObjects}`);
    this.setState({
      adieList: adieObjects,
    });
  }

  listAdies = (adieObjects) => {
    console.log(`List of Adies = ${adieObjects}`);
    this.setState({
      adieList: adieObjects,
    });
  }

  listCompanies = (companyObjects) => {
    console.log(`List of Companies = ${companyObjects}`);
    this.setState({
      companyList: companyObjects,
    });
  }

  listOffers = (offerObjects) => {
    console.log(`List of Offers = ${offerObjects}`);
    this.setState({
      offerList: offerObjects,
    });
  }

  getAgeData = (adies) => {
    const data = {
      "18 - 24": 0,
      "25 - 32": 0,
      "33 - 39": 0,
      "40+": 0
    }

    adies.forEach(function(adie) {
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

    return data;

  }
  //
  //
  // getGenderData = (adies) => {
  //   const data = {
  //     "female": 0,
  //     "non-binary": 0,
  //     "male": 0,
  //     "other": 0
  //   }
  //
  //   adies.forEach(function(adie) {
  //     let gender = adie.gender;
  //
  //     if (gender === "FEMALE".toLowerCase()) {
  //       data["female"]++
  //     } else if (gender === "NON-BINARY".toLowerCase()) {
  //       data["non-binary"]++
  //     } else if (gender === "MALE".toLowerCase()) {
  //       data["male"]++
  //     } else if (gender === "TWO-SPIRITED".toLowerCase()) {
  //       data["two-spirted"]++
  //     } else if (gender === "TRANSGENDER".toLowerCase() || gender === "TRANS".toLowerCase()) {
  //       data["trans"]++
  //     } else {
  //       data["other"]++
  //     }
  //   });
  //
  //   return data;
  //
  // }
  //
  //
  // getOrientationData = (adies) => {
  //   const data = {
  //     "straight": 0,
  //     "queer": 0,
  //     "asexual": 0,
  //     "other": 0
  //   }
  //
  //   adies.forEach(function(adie) {
  //     let orientation = adie.orientation;
  //
  //     if (orientation === "STRAIGHT".toLowerCase() || orientation === "HETEROSEXUAL".toLowerCase() ) {
  //       data["straight"]++
  //     } else if (orientation === "ASEXUAL".toLowerCase()) {
  //       data["asexual"]++
  //     } else {
  //       data["queer"]++
  //     }
  //   });
  //
  //   return data;
  //
  // }
  //
  // getRaceData = (adies) => {
  //   const data = {
  //     "Black": 0,
  //     "Latinx": 0,
  //     "Asian": 0,
  //     "White": 0,
  //     "Indigenous": 0,
  //     "Pacific Islander": 0
  //   }
  //
  //   adies.forEach(function(adie) {
  //     let race = adie.race;
  //
  //     if (race === "BLACK".toLowerCase() || race === "AFRICAN AMERICAN".toLowerCase() || race === "AFRICAN-AMERICAN".toLowerCase() ) {
  //       data["Black"]++
  //     } else if (race === "LATINX".toLowerCase() || race === "HISPANIC".toLowerCase() || race === "LATINO".toLowerCase()) {
  //       data["Latinx"]++
  //     } else if (race === "ASIAN".toLowerCase()) {
  //       data["Asian"]++
  //     } else if (race === "WHITE".toLowerCase() || race === "CAUCASIAN".toLowerCase()) {
  //       data["White"]++
  //     } else if (race === "NATIVE AMERICAN".toLowerCase() || race === "NATIVE-AMERICAN".toLowerCase() || race === "AMERICAN NATIVE".toLowerCase() || race === "ALASKA NATIVE".toLowerCase()) {
  //       data["Indigenous"]++
  //     } else if (race === "ISLAND PACIFIC".toLowerCase() || race === "HAWAIIAN NATIVE".toLowerCase()) {
  //       data["Pacific Islander"]++
  //     } else {
  //       data["other"]++
  //     }
  //   });
  //
  //   return data;
  //
  // }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>

        
        <main>
          <div className="nav-item1">
            <Link to="/adies" className="adie">Adie Library</Link>
          </div>
          <div className="nav-item2">
            <Link to="/companies" className="company">Company Library</Link>
          </div>
          <div className="nav-item3">
            <Link to="/offers" className="offer">Offer Library</Link>
          </div>
          <Route exact path="/adies"
            render={ (props) => <AdieLibrary {...props}
            adieCountCallback={this.changeMessage}
            grabAdieCallback={this.listAdies}
                /> }
            />
          //adieAgePieCallback={this.getAgeData}
          <Route exact path="/companies"
            render={ (props) => <CompanyLibrary {...props}
            companyCountCallback={this.changeMessage}
            grabCompanyCallback={this.listCompanies} /> }
            />
          <Route exact path="/offers"
            render={ (props) => <OfferLibrary {...props}
            offerCountCallback={this.changeMessage}
            grabOfferCallback={this.listOffers} /> }
            />
        </main>
        </div>
        // <div>
        //   <svg width="500" height="500" fill="green">
        //     <PieChart addAdieDataCallback={getAgeData(this.state.adies)} addCompanyDataCallback={getAgeData(this.state.adies)}
        //         addOfferDataCallback={getAgeData(this.state.adies)} />
        //   </svg>
        // </div>
    );
  }
}

export default App;
