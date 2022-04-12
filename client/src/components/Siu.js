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
  <p id='about' style={{fontFamily:'Cursive'}}>
    This website allows the claim adjuster to create new subrogation claims and also to accept subrogation claims from other insurance companies </p>
<section id="con">
<address>Developed by<a href="mailto:harsha.jellabannu@gmail.com">&nbsp;Harsha</a> and <a href="mailto:ameethkalluri369@gmail.com">Ameeth Kalluri</a></address>
</section>
          </div>
      );
  } 
}
export default Siu;