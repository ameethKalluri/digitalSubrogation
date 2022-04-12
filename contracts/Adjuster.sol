//make a claim for user
//review claim
pragma solidity >=0.4.24;
import"./Claim.sol";
import"./Policy.sol";
contract Adjuster{
    Claim public x;
    address policy_add;
    function add_policy(address y)public{
    policy_add=y;
    }
  uint public no_of_SubClaims_In=0;

    function create_claim(uint insured,uint policy_id,string memory date)public{
     Policy use1 = Policy(policy_add);
    if(use1.Policy_check(insured,policy_id))
    {
        x= new Claim(insured,policy_id,date,msg.sender);
    }
    }
    struct sub_claim{
        string name;
        string date;
        uint amount;
        address from;
        address to;
        string Police_Report_IPFS;
        string status;
        bool report_status;
        bool state;
        uint[] id;
    }
    mapping(uint =>sub_claim)public SubrogationT;
    function recieve_subrogation(string memory Name,string memory Date,uint Amount,address From,address To,string memory report)public{
     no_of_SubClaims_In++;
    SubrogationT[no_of_SubClaims_In].id.push(no_of_SubClaims_In);
    SubrogationT[no_of_SubClaims_In].name=Name;
    SubrogationT[no_of_SubClaims_In].date=Date;
    SubrogationT[no_of_SubClaims_In].amount=Amount;
    SubrogationT[no_of_SubClaims_In].from= From;
    SubrogationT[no_of_SubClaims_In].to=To;
    SubrogationT[no_of_SubClaims_In].Police_Report_IPFS=report;
    SubrogationT[no_of_SubClaims_In].state=false;
    SubrogationT[no_of_SubClaims_In].report_status=false;
    SubrogationT[no_of_SubClaims_In].status="claim Transferred to SIU";
    }
    function show_report(uint ID)external view returns(string memory ){
     return  SubrogationT[ID].Police_Report_IPFS;
    }
    function Report_checked(uint ID)external {
      SubrogationT[ID].report_status=true;  
    }
     function Report_check(uint ID)external view returns(bool){
      return SubrogationT[ID].report_status;  
    }
    function accept_subrogation(uint ID)external {
         SubrogationT[ID ].state=true;
         SubrogationT[ID].status="Accepted";
    }
    function claim_address()public view returns(Claim)
    {
       return x;
    }
    
}