//final amount
//make a new claim for subrogation
pragma solidity >=0.4.24;
import"./Claim.sol";
import"./Adjuster.sol";
contract Agency{
    address claim_add;
    address adjuster_add;
    uint public no_of_SubClaims_Out=0;
    function set_claim_add(address x)public
    {
        claim_add=x;
    }
  function set_adjuster_add(address y)public
    {
        adjuster_add=y;
    }
    function set_amount(uint ID,uint amount)public{
        Claim use = Claim(claim_add);
        use.set_amount(ID,amount);
    }
    function accept_Subrogation(uint ID)public{

      Adjuster use = Adjuster(adjuster_add);
      if(use.Report_check(ID))
      {
         use.accept_subrogation(ID);
      }
    }
    function SubClaims_Out()public view returns(uint){
        return no_of_SubClaims_Out;
    }
}