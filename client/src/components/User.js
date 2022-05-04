import React, { Component } from "react";
class User extends Component{
    state = { accounts1: null, contract1: null, userId1: null,user_c : false };
    componentDidMount = async () => {
         const accounts1 =this.props.accounts;
         console.log(accounts1);
         const contract1 = this.props.contract;
         console.log(contract1);
         console.log(this.props);
         this.setState({ accounts1,contract1 });
         console.log(this.state);
   };
 
    fun1 = async (event) => {
        event.preventDefault();
        const { accounts1, contract1 } = this.state;
        if( window.confirm("Initiliaze User?")){
          await contract1.methods.User_Init(event.target.userName.value, event.target.userAddress.value,event.target.userAge.value).send({ from: accounts1[0] }); 
        }
        const response =await contract1.methods.get_user_id().call();
        console.log(response);
       this.setState({ userId1: response });
      };

      fun2 = async(event)=>{
        event.preventDefault();
        const { accounts1, contract1 } = this.state;
        if( window.confirm("Initiliaze Policy?")){
          await contract1.methods.setAdd_policy(event.target.ad.value).send({ from: accounts1[0] }); 
        }
      
      };
  fun3 = async(event)=>
  {
    event.preventDefault();
    const { accounts1, contract1 } = this.state;
    const response =await contract1.methods.show_userP(event.target.idx.value).call();
    console.log(response);
   this.setState({ user_c: response[1]});

  }
  fun4= async(event)=>
  {
    event.preventDefault();
    const { accounts1, contract1 } = this.state;
    if( window.confirm("Apply Policy?"))
    {
      await contract1.methods.apply_policy(event.target.use_idx.value,event.target.po_idx.value).send({ from: accounts1[0] });
    }

  }
      
    render(){
      if (!this.state.accounts1) {
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
           <li><a href="#Pinit">Policy_Initialization</a></li>
           <li><a href="#UI">User-Initialization</a></li>
           <li><a href="#Apply">Apply Policy</a></li>
         <li><a href='#con'>Contact</a></li>
         </ul>
       </nav></td>
       </tr>
       </table>
    </div>
    <p id='about' style={{fontFamily:'Cursive'}}>
      This website allows the user to interact with the insurance network by allowing the users to apply policies from a initialized insurance
company </p>
   <form onSubmit={this.fun2}>
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

   

      <form onSubmit = {this.fun1}>
      <h1 align='center'id='UI'>User Registration</h1>
      <div className="form-group">
      <label><b>Name&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          <input type="text" className="form-control" name="userName" required="required"/>
          </div>
          <div className="form-group">
      <label><b>Address&nbsp;</b></label>
          <input type="text" className="form-control" name="userAddress" required="required"/>
          </div>
          <div className="form-group">
      <label><b>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          <input type="text" className="form-control" name="userAge" required="required"/>
          </div>
          <br></br>
          <div className="form-group">
          <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
          >
                    
          <b>Register</b>
          </button>
          </div>
          <div>The ID is {this.state.userId1}</div>
      </form>
      <form onSubmit={this.fun4}>
  <h1 align='center' id='Apply'>Apply Policy</h1>
  <div className="form-group">
    <div> <label><b>User_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
   <input type="text" className="form-control" name="use_idx" required="required"/></div>
  
  <div><label><b>Policy_ID&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
   <input type="text" className="form-control" name="po_idx" required="required"/></div> 
   
   <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    style={{backgroundColor:"lightgray",color:'black'}}
                  >
                    <b>Apply</b>
                  </button>
          </div>
  </form>
<section id="con">
<address>Developed by<a href="mailto:harsha.jellabannu@gmail.com">&nbsp;Harsha</a> and <a href="mailto:ameethkalluri369@gmail.com">Ameeth Kalluri</a></address>
</section>
            </div>
        );
    } 
};
export default User;