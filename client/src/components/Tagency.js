import React, { Component } from "react";
class Tagency extends Component{
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
    if( window.confirm("Initiliaze Claim?")){
      await contract2.methods.set_claim_add(event.target.address.value).send({ from: accounts2[0] }); 
    }  
  };
  
  fun2 = async(event)=>{
    event.preventDefault();
    const { accounts2, contract2 } = this.state;
    console.log(contract2);
    if( window.confirm("Initiliaze Adjuster?")){
      await contract2.methods.set_adjuster_add(event.target.address1.value).send({ from: accounts2[0] }); 
    }  
  };

  fun3 = async(event)=>{
    event.preventDefault();
    const { accounts2, contract2 } = this.state;
    console.log(contract2);
    if( window.confirm("Transfer Claim?")){
      await contract2.methods.transfer(event.target.ID.value).send({ from: accounts2[0] }); 
    }
    const response =await contract2.methods.SubClaims_Out().call();
    console.log(response);
    this.setState({ sub_out: response });
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
         <li><a href="#clmit">Claim Init</a></li>
         <li><a href="#Adjit">Adjuster Init</a></li>
         <li><a href="#CT">Claim Transfer</a></li>
       <li><a href='#con'>Contact</a></li>
       </ul>
     </nav></td>
     </tr>
     </table>

  </div>
  <p id='about' style={{fontFamily:'Cursive'}}>
    This webpage allows the agency of one insurance company to transfer subrogation claims to adjuster of other insurance companies. </p>
    <form onSubmit = {this.fun1}>
      <h1 align='center'id='clmit'>Claim Init</h1>
      <div className="form-group">
      <label><b>Address&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          <input type="Address" className="form-control" name="address" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
          <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
          >      
          <b>submit</b>
          </button>
          </div>
      </form>

 <form onSubmit = {this.fun2}>
      <h1 align='center'id='Adjit'>Adjuster Init</h1>
      <div className="form-group">
      <label><b>Address&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          <input type="Address" className="form-control" name="address1" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
          <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
          >      
          <b>submit</b>
          </button>
          </div>
      </form>

<form onSubmit = {this.fun3}>
<h1 align='center'id='CT'>Transfer Claim</h1>
<div className="form-group">
<label><b>Subrogation ID&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" className="form-control" name="ID" required="required"/>
    </div>
    <br></br>
    <div className="form-group">
    <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              style={{backgroundColor:"lightgray",color:'black'}}
    >      
    <b>submit</b>
    </button>
    </div>
    <div>The number of subrogation out claims is {this.state.sub_out}</div>
</form>

 

<section id="con">
<address>Developed by<a href="mailto:harsha.jellabannu@gmail.com">&nbsp;Harsha</a> and <a href="mailto:ameethkalluri369@gmail.com">Ameeth Kalluri</a></address>
</section>
          </div>
      );
  } 
}
export default Tagency;