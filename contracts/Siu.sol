//refer to subrogation
//verifying the details
pragma solidity >=0.4.24;
import "New/claim.sol";
import"New/adjuster.sol";
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
    function set_sub(uint ID,string memory date,string memory name,address fault,string report)public
    {
     claim use= claim(claim_add);
     use.set_Subrogation(ID);
     use.sub_claim_init(ID,name,date,from,fault,report);
    }
//returns
    function check_report(uint ID)public view returns(string){
     adjuster use = adjuster(adjuster_add);
      return (use.show_report(ID));
    }
    function accept_report(uint ID)public {
      adjuster use = adjuster(adjuster_add);
      use.Report_checked(ID);
    }
}