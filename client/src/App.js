import React, { Component } from "react";

import policyContract from "./contracts/Policy.json";
import userContract from "./contracts/User.json";
import adjusterContract from "./contracts/Adjuster.json";
//import Policy from "./components/Policy";
import Adjuster from "./components/Adjuster";
import Policy from "./components/Policy";
import getWeb3 from "./getWeb3";
import {Routes,Route} from 'react-router-dom';
import InitialPage from "./components/InitialPage";
import User from "./components/User";
import "./App.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

class App extends Component {
state = { deployedNetwork:null,web3: null, accounts: null, contract: null,contract1:null,deployedNetwork2:null,accounts1: null,contract2:null,deployedNetwork3:null,accounts2: null};

 componentDidMount = async () => {
   try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const accounts1 = await web3.eth.getAccounts();
      const accounts2 = await web3.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = policyContract.networks[networkId];
      const deployedNetwork2 = userContract.networks[networkId];
      const deployedNetwork3 = adjusterContract.networks[networkId];
      
      //const deployedNetworkUser =userContract.networks[networkId];
      const instance = new web3.eth.Contract(
        policyContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const instance1 = new web3.eth.Contract(
        userContract.abi, deployedNetwork2 && deployedNetwork2.address,
      );
      const instance2 = new web3.eth.Contract(
        adjusterContract.abi, deployedNetwork3 && deployedNetwork3.address,
      )
      await this.setState({ web3, accounts, accounts1,accounts2,contract: instance,contract1:instance1,deployedNetwork:networkId,deployedNetwork2:networkId ,contract2:instance2,deployedNetwork3:networkId});
       console.log(this.state.contract);
       console.log(this.state.contract1);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
    render() {
     if(this.state.contract!=null  ){
      return (
        <div>
            <Routes>
       <Route path ='/policy' element ={<Policy accounts = {this.state.accounts} contract = {this.state.contract}/>}/>
       <Route path ='/' element ={<InitialPage/>}/>
       <Route path ='/user' element ={<User accounts = {this.state.accounts1} contract = {this.state.contract1}/>}/>
       <Route path ='/adjuster' element ={<Adjuster accounts = {this.state.accounts2} contract = {this.state.contract2}/>}/>
     </Routes>
        </div>
     
      );
     }
     else{
      return(
        <div></div>
      );
    }
      
 
  }
  }
export default App;