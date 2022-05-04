import React, { Component } from 'react';
//import "./css/initial.css"

class Policy extends Component {
    state = { accounts: null, contract: null,PID:0,PCID:null,PName:null,PPremium:null };

    componentDidMount = async () => {
     // try {
        // Get network provider and web3 instance.
        /*const web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = policyContract.networks[networkId];
        const instance = new web3.eth.Contract(
          policyContract.abi, deployedNetwork && deployedNetwork.address,
        );
       // instance.options.address = " [my contract address on Localhost 8545 ]"
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        //this.setState({accounts: this.props.accounts, contract: this.props.contract});*/
        console.log(1);
        const accounts = this.props.accounts;
        console.log(accounts);
        const contract = this.props.contract;
        console.log(contract);
        console.log(this.props);
        this.setState({ accounts,contract });
        console.log(this.state);
      //} 
      /*catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);*/
      //}
  
  };

  handleSetAdmin = async (event) => {
    event.preventDefault();
    //console.log(this.state.contract);
    const { accounts, contract } = this.state;
    //console.log(contract);
    if( window.confirm("Create Policy?")){
      await contract.methods.Policy_Init(event.target.name.value, event.target.premium.value).send({ from: accounts[0] }); 
    }

    const response =await contract.methods.get_Policy_Id().call();
    console.log(response);
   this.setState({ PID: response });
    /*if(k==1)
    {
        if(await contract.methods.userExists(accounts[0]).call())
        browserHistory.push("/evowner");
        else
        browserHistory.push("/csowner");
        window.location.reload();
    }
    else
    window.location.reload();*/
};


fun2 = async (event) => {
  event.preventDefault();
  //console.log(this.state.contract)
  const { accounts, contract } = this.state;
  if( window.confirm("Create Policy Client?")){
    await contract.methods.Policy_Client_init(event.target.clientId.value, event.target.policyId.value).send({ from: accounts[0] }); 
  }
  const response =await contract.methods.get_Policy_Client_Id().call();
 console.log(response);
 this.setState({ PCID: response });
};

fun3 = async (event) => {
  event.preventDefault();
  console.log(this.state.contract)
  const { accounts, contract } = this.state;
 const response =await contract.methods.get_Policy_Details(event.target.policyId.value).call();
 console.log(response);
 this.setState({ PName: response.name,PPremium:response.premium });
}



  render() {
    if (!this.state.accounts) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
<div >
    <div style={{backgroundColor:'darkgrey'}}>
      <table  style={{color:'black'}}><tr><td><div class="img">
      <img src="images/Pic2.png" alt="IITP" width='100px' padding=' 0 100px 20px 10px'/>
       </div></td>
       <td> <nav>
         <ul>
           <li><a href="#about">About</a></li>
           <li><a href="#PC">Policy-Creation</a></li>
           <li><a href="#GPD">Policy-Details</a></li>
         <li><a href='#con'>Contact</a></li>
         </ul>
       </nav></td>
       </tr>
       </table>
    </div>
  <div className="Policy-Creation" >
      <form onSubmit = {this.handleSetAdmin}>
      
      
      <p id='about' style={{fontFamily:'Cursive'}}>This website allows the insurance companies to handle the policy related services such as creation of policy,retrieving the details
        of the policy and also Initialization of client with policy.This page is developed by using Reactjs and truffle framework with local blockchain network.
      </p>
   

      <h1 align='center'id='PC' > Create Policy</h1>
          <div className="form-group">
      <label ><b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          <input type="text" className="form-control" name="name" required="required"/>
          </div>
          <div className="form-group">
      <label ><b>Premium&nbsp;</b></label>
          <input type="text" className="form-control" name="premium" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg" style={{backgroundColor:"lightgray",color:'black'}}
                  ><b>
                    Create</b>
                  </button>
                </div>
                <div>The ID is {this.state.PID}</div>
      </form>

      <form onSubmit = {this.fun3}>
      <h1 align='center'id='GPD'>Get Policy Details</h1>
      <div className="form-group">
      <label><b>Policy ID &nbsp;</b></label>
          <input type="text" className="form-control" name="policyId" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
                  ><b>
                    Get Policy Details</b>
                  </button>
                </div>
                <div>The Policy Name is {this.state.PName}</div>
                <div>The Premium amount is {this.state.PPremium}</div>
      </form>
     
  </div>
  <br></br>
  <section id="con">
  <address>Developed by<a href="mailto:harsha.jellabannu@gmail.com">&nbsp;Harsha</a> and <a href="mailto:ameethkalluri369@gmail.com">Ameeth Kalluri</a></address>
  </section>
  </div>
    );
  }
}
export default Policy;