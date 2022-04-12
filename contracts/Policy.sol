pragma solidity >=0.4.24;
contract Policy{
    uint public ins_id =0;
    uint public Policy_ID=0;
    struct Policy_Details{
        string name;
        uint premium;
        uint[] insured;
        uint no_of_insured;
    }
    mapping(uint => Policy_Details)PolicyT;
     struct Policy_Client
    {
        uint client_ID;
        uint policy_ID;
    }
    mapping(uint=>Policy_Client)PCT;
    function  Policy_Init(string memory Name,uint premium)public{
        Policy_ID++;
         PolicyT[Policy_ID].name=Name;
         PolicyT[Policy_ID].premium=premium;
         PolicyT[Policy_ID].no_of_insured=0;
    }
    function get_Policy_Id()public view returns(uint){
        return Policy_ID;
    }
    function get_Policy_Client_Id()public view returns(uint){
        return ins_id;
    }
    function get_Policy_Details(uint id)public view returns(string memory name,uint premium)
    {
       return(PolicyT[id].name,PolicyT[id].premium);
    }
      function Policy_Client_init(uint Client_ID,uint PolicyID)public{
        ins_id++;
        PCT[ins_id].client_ID=Client_ID;
        PCT[ins_id].policy_ID=PolicyID;
        PolicyT[PolicyID].no_of_insured++;
        PolicyT[PolicyID].insured.push(Client_ID);
    }
  function Policy_check(uint x,uint y)public view returns(bool)
  {
      for(uint i=0;i<PolicyT[y].no_of_insured;i++)
      {
     if(PolicyT[y].insured[i]==x)
          return true;
      }
      return false;
  }

}