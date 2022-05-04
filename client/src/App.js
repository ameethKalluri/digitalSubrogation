import React, { Component } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import policyContract from "./contracts/Policy.json";
import userContract from "./contracts/User.json";
import adjusterContract from "./contracts/Adjuster.json";
import siuContract from "./contracts/SIU.json";
import agencyContract from "./contracts/Agency.json";
import tagencyContract from "./contracts/Tagency.json";
import Tagency from "./components/Tagency";
import Adjuster from "./components/Adjuster";
import Policy from "./components/Policy";
import getWeb3 from "./getWeb3";
import {Routes,Route} from 'react-router-dom';
import InitialPage from "./components/InitialPage";
import User from "./components/User";
import "./App.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import Siu from "./components/Siu";
import Agency from "./components/Agency";

class App extends Component {
state = { deployedNetwork:null,web3: null, accounts: null, contract: null,contract1:null,deployedNetwork2:null,accounts1: null,contract2:null,deployedNetwork3:null,accounts2: null,contract3:null,deployedNetwork4:null,accounts3: null,contract4:null,deployedNetwork5:null,accounts4: null};

 componentDidMount = async () => {
   try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const accounts1 = await web3.eth.getAccounts();
      const accounts2 = await web3.eth.getAccounts();
      const accounts3 = await web3.eth.getAccounts();
      const accounts4 = await web3.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = policyContract.networks[networkId];
      const deployedNetwork2 = userContract.networks[networkId];
      const deployedNetwork3 = adjusterContract.networks[networkId];
      const deployedNetwork4 = siuContract.networks[networkId];
      const deployedNetwork5 = tagencyContract.networks[networkId];
      //const deployedNetworkUser =userContract.networks[networkId];
      const instance = new web3.eth.Contract(
        policyContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const instance1 = new web3.eth.Contract(
        userContract.abi, deployedNetwork2 && deployedNetwork2.address,
      );
      const instance2 = new web3.eth.Contract(
        adjusterContract.abi, deployedNetwork3 && deployedNetwork3.address,
      );
      const instance3 = new web3.eth.Contract(
        siuContract.abi, deployedNetwork4 && deployedNetwork4.address,
      );
      const instance4 = new web3.eth.Contract(
        tagencyContract.abi, deployedNetwork5 && deployedNetwork5.address,
      );
      await this.setState({ web3, accounts, accounts1,accounts2,accounts3,accounts4,contract: instance,contract1:instance1,deployedNetwork:networkId,deployedNetwork2:networkId ,contract2:instance2,deployedNetwork3:networkId,contract3:instance3,deployedNetwork4:networkId,contract4:instance4,deployedNetwork5:networkId});
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
       <Route path ='/siu' element ={<Siu accounts = {this.state.accounts3} contract = {this.state.contract3}/>}/>
       <Route path ='/agency' element ={<Tagency accounts = {this.state.accounts4} contract = {this.state.contract4}/>}/>
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