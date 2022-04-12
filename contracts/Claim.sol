pragma solidity >=0.4.24;
contract Claim{
    uint public claim_id=0;
    struct claim_details{
     uint insured;
     uint policy;
     string date;
     address adjuster;
     string status;
     bool subrogation;
    }
    mapping(uint=>claim_details)claimT;
    struct sub_claim{
        string name;
        string date;
        uint amount;
        address from;
        address to;
        string Police_Report_IPFS;
        string status;
    }
    mapping(uint=>sub_claim)public SubT;
    constructor(uint idin,uint idpo,string memory date1,address X)public{
        claim_id++;
        claimT[claim_id].insured=idin;
        claimT[claim_id].policy=idpo;
        claimT[claim_id].date=date1;
        claimT[claim_id].adjuster=X;
        claimT[claim_id].status="Claim's Registered";
        claimT[claim_id].subrogation=false;
    }
    function set_Subrogation(uint x)external{
        claimT[x].subrogation=true;
    }
    function sub_claim_init(uint x,string calldata Date1,string calldata Name,address From,address fault,string calldata check)external{
        SubT[x].name=Name;
        SubT[x].date=Date1;
        SubT[x].from=From;
        SubT[x].to=fault;
        SubT[x].Police_Report_IPFS=check;
        SubT[x].status="Claim Initiated";
    }
    function set_amount(uint x,uint y)external{
       SubT[x].amount=y;
    }
    function detail1(uint x)public view returns(string memory){
       return SubT[x].name;
    }
    function detail2(uint x)public view returns(string memory){
       return SubT[x].date;
    }
    function detail3(uint x)public view returns(uint){
       return SubT[x].amount;
    }
    function detail4(uint x)public view returns(address){
       return SubT[x].from;
    }
    function detail5(uint x)public view returns(address){
       return SubT[x].to;
    }
     function detail6(uint x)public view returns(string memory){
       return SubT[x].Police_Report_IPFS;
    }
}