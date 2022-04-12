import React, { Component } from "react";
class Siu extends Component{
    state = { accounts2: null, contract2: null, claim_ad:null };
    componentDidMount = async () => {
         const accounts2 =this.props.accounts;
         console.log(accounts2);
         const contract2 = this.props.contract;
         console.log(contract2);
         console.log(this.props);
         this.setState({ accounts2,contract2 });
         console.log(this.state);
   };

   fun1 = async(event)=>{
    event.preventDefault();
    const { accounts2, contract2 } = this.state;
    console.log(contract2);
    if( window.confirm("Initiliaze Policy?")){
      await contract2.methods.add_policy(event.target.ad.value).send({ from: accounts2[0] }); 
    }  
  };
   fun2 = async (event) => {
    event.preventDefault();
    //console.log(this.state.contract)
    const { accounts2, contract2 } = this.state;
    if( window.confirm("Create Claim?")){
      await contract2.methods.create_claim(event.target.insuredId.value, event.target.policyId.value,event.target.Date.value).send({ from: accounts2[0] }); 
    }
    const response =await contract2.methods.claim_address().call();
    console.log(response);
    this.setState({ claim_ad: response });
  };
  
   render(){
    if (!this.state.accounts2) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
      return (
          <div>
              <div style={{backgroundColor:'darkgrey'}}>
    <table  style={{color:'black'}}><tr><td><div class="img">
    <img src="images/Pic2.png" alt="IITP" width='100px' padding=' 0 100px 20px 10px'/>
     </div></td>
     <td> <nav>
       <ul>
         <li><a href="#about">About</a></li>
         <li><a href="#Pinit">Claim_Creation</a></li>
        
       <li><a href='#con'>Contact</a></li>
       </ul>
     </nav></td>
     </tr>
     </table>
  </div>
  <p id='about' style={{fontFamily:'Cursive'}}>
    This website allows the claim adjuster to create new subrogation claims and also to accept subrogation claims from other insurance companies </p>
    
    <form onSubmit={this.fun1}>
   <h1 align='center'  id='Pinit'>Policy Initialization</h1>
   <div className="form-group">
   <label><b>Address&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
   <input type="address" className="form-control" name="ad" required="required"/>
   <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
                  >
                    
                    <b>Register</b>
                  </button>
                  
          </div>
   </form>

    <form onSubmit = {this.fun2}>
      <h1 align='center'id='GPD'>Claim Creation</h1>
      <div className="form-group">
      <label><b>Insured ID&nbsp;</b></label>
          <input type="text" className="form-control" name="insuredId" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
      <label><b>Policy ID&nbsp;</b></label>
          <input type="text" className="form-control" name="policyId" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
      <label><b>Date&nbsp;</b></label>
          <input type="text" className="form-control" name="Date" required="required"/>
          </div>
          <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
                  ><b>
                    submit</b>
                  </button>
                </div>  
      </form>
<div>
The claim is {this.state.claim_ad}
</div>
<section id="con">
<address>Developed by<a href="mailto:harsha.jellabannu@gmail.com">&nbsp;Harsha</a> and <a href="mailto:ameethkalluri369@gmail.com">Ameeth Kalluri</a></address>
</section>
          </div>
      );
  } 
}
export default Siu;