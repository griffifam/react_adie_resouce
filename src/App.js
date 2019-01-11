import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AdieLibrary from './components/AdieLibrary.js';
import CompanyLibrary from './components/CompanyLibrary.js';
import OfferLibrary from './components/OfferLibrary.js';
// import StatusBar from './components/StatusBar.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      adieList: [],
      companyList: [],
      offerList: [],
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
          grabAdieCallback={this.listAdies} /> }
          />
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
      </div>
    );
  }
}

export default App;
