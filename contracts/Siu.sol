//refer to subrogation
//verifying the details
pragma solidity >=0.4.24;
import "./Claim.sol";
import"./Adjuster.sol";
contract SIU{
    address claim_add;
    function set_claim(address x)public
    {
     claim_add=x;
    }
    address adjuster_add;
    function set_adjuster(address y)public{
     adjuster_add=y;
    }
    address from=msg.sender;
    function set_sub(uint ID,string memory date,string memory name,address fault,string memory report)public
    {
     Claim use= Claim(claim_add);
     use.set_Subrogation(ID);
     use.sub_claim_init(ID,name,date,from,fault,report);
    }
//returns
    function check_report(uint ID)public view returns(string memory){
     Adjuster use1 = Adjuster(adjuster_add);
      return (use1.show_report(ID));
    }
    function accept_report(uint ID)public {
      Adjuster use1 = Adjuster(adjuster_add);
      use1.Report_checked(ID);
    }
}