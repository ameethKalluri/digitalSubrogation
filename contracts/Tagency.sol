pragma solidity >=0.4.24;
import"./Claim.sol";
import"./Adjuster.sol";
contract Tagency{
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
    function transfer(uint x)public{
   
        Claim use1 = Claim(claim_add);
        Adjuster use = Adjuster(use1.detail5(x));
        string memory a;string memory b;
        uint j;
        address i;address o;
        a=use1.detail1(x);
        b=use1.detail2(x);
        j=use1.detail3(x);
        i=use1.detail4(x);
        o=use1.detail5(x);
        string memory p=use1.detail6(x);
         use.recieve_subrogation(a,b,j,i,o,p);
         no_of_SubClaims_Out++;
    }
 function accept_Subrogation(uint ID)public{

      Adjuster use = Adjuster(adjuster_add);
      if(use.Report_check(ID))
      {
         use.accept_subrogation(ID);
      }
    }
    function SubClaims_Out()public view returns(uint)
    {
        return no_of_SubClaims_Out;
    }
}