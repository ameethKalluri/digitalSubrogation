pragma solidity >=0.4.24;
import "./Policy.sol";
contract User{
    uint public user_id=0;
     address policy_add;
    function setAdd_policy(address X)public{
    policy_add=X;
    }
    struct User_i{
  
        string Name;
        string address_;
        uint Age;
        bool Policy_Holder;
        uint[] policies;
        uint[] ins;
    }
    mapping(uint=>User_i) userT;
     function  User_Init(string memory Name,string memory address_,uint Age)public{
        user_id++;
        userT[user_id].Name=Name;
        userT[user_id].address_=address_;
        userT[user_id].Age=Age;
        userT[user_id].Policy_Holder=false;
    }
    function apply_policy(uint id1,uint id2)public{
      Policy use = Policy(policy_add);
      use.Policy_Client_init(id1,id2);
      userT[id1].Policy_Holder=true;
      userT[id1].policies.push(id2);
     // uint x=use.show_ins;
     // userT[id1].ins.push(x);
    }
  
       function show_userP(uint userID)public view returns(string memory,bool)
    {
        return (userT[userID].Name,userT[userID].Policy_Holder);
    }
    function get_user_id() public view returns(uint)
    {
        return user_id;
    }
}