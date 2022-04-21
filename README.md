# digitalSubrogation
Inorder to run the application go to clients folder and use the command npm start 

Github link for all the codes:https://github.com/ameethKalluri/digitalSubrogation/tree/master

We used 6 smart Contracts in total.They are SIU.sol,Adjuster.sol,Agency.sol,Claim.sol,Policy.sol,user.sol.

Detailed description of code and its functions:

-------------------------------------------------------------------------------------------------------------------------------------

Policy.sol:(Allows to create a new policy under a insurance company)

contract policy{

    struct Policy_Details{
    //Storing the details of the policy
    }
   
     struct Policy_Client
    {
     //structure storing the details of the policy and its respective clients.
    }
     function  Policy_Init(){
      //Initializing the policy details with a unique ID for every policy
    }
    function get_Policy_Details(uint id)public view returns()
    {
       //Returns the details of the policy by taking the input of policy ID
    }

    function Policy_Client_init(uint Client_ID,uint PolicyID){
    //Initializing  the details of the client who took a respective policy with a unique Insurance ID.
    }
    function Policy_check(uint x,uint y)
   {
   //checking whether the person with user ID x had the policy with the ID y.
    }
}

---------------------------------------------------------------------------------------------------------------------------------------

User.sol:(Used to initialize the user and also to apply any policies offered from the company)

import "New/policy.sol";
//Importing policy to use some specific functions from it.

contract user{
  
    function setAdd_policy(){
    Initializing the address of policy smart contract
    }

     struct User{
     storing the details of the user
     }

     function  User_Init(string memory Name,string memory address_,uint Age){
     //Storing the details of the client
     }
     function apply_policy(uint id1,uint id2)public{
     //Applying the policy through the function imported from policy smart contract and simultaneously updating the user structure
     }
  
      function show_userP()()
     {
        //Returns the details of the user based on the ID
      }
}
---------------------------------------------------------------------------------------------------------------------------------------

Adjuster.sol:

(make a subrogation claim for the insured and also to review the claim's from other insurance company.)


import"New/claim.sol";
//Inorder to deploy claim.sol directly after creating the claim

import"New/policy.sol";

contract adjuster{
  
    function add_policy()public{
     Initializing the address of policy smart contract
    }

    function create_claim()public{

    if()
    {
        //check whether the user is insured under particular policy or not
    }
    }
    struct sub_claim{
     //to store the details of the subrogation claim
    }

    function recieve_subrogation(){
    //Used to receive the subrogation claims from other insurance companies
    }
    function show_report(){
     //to show the subrogation document by using the ipfs which is used in SIU contract.
    }
    function Report_checked(){
      //To update the status of the report checking to completed or not.
    }
     function Report_check(){
     // show the result whether it is checked or not.
    }
    function accept_subrogation() {
       //This is used in the agency.sol to accept the claim or not.
    }
}
---------------------------------------------------------------------------------------------------------------------------------------

Claim.sol:(Gets deployed after creating the claim using adjuster.sol)


contract claim{

    struct claim_details{
    // To store the details of the created claim
    }

    struct sub_claim{
    //To store the details of the subrogation claim
    }

    constructor(){
      //constructor function to store the details in the struct created above and the initially the claim created is not set to subrogation 
    }
    function set_Subrogation(){
      //To set the claim to subrogation 
    }
    function sub_claim_init(){
     // to store the details of the subrogation once the claim is set to subrogation.
    }
    function set_amount(){
      //To set the amount to be paid for subrogation used by Agency.sol
    }
    function detail(){
      //We used 6 similar functions to get the details from the subrgation claim .
    }
  
}
---------------------------------------------------------------------------------------------------------------------------------------

SIU.sol:(The main function is to check the subrogation reports to set the created claim to subrogation and also to accept the subrogation claim to the company)

import "New/claim.sol";
import"New/adjuster.sol";
contract SIU{

    function set_sub()
    {
     //used to set the created claim from adjuster  under subrogation.
    }

    function check_report(){
     //used to check the report 
    }
    function accept_report() {
      //used to accept or reject the report
    }
}

---------------------------------------------------------------------------------------------------------------------------------------

Agency.sol:(Used to set the final amount of subrogation claim and transfer the claim to the adjuster of other insurance company,also have the ability to decide whether to accept or reject the received claim )


pragma solidity >=0.4.24;
import"New/claim.sol";
import"New/adjuster.sol";
contract agency{

    function set_amount(){
      //setting the amount of subrogation claim.
    }
    function transfer(){
    //used to transfer the claim to the adjuster of other insurance company 
    }
   function accept_Subrogation(){
  //to accept or reject the received subrogation claim.
   }
