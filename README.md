# digitalSubrogation
Inorder to run the application go to clients folder and use the command npm start 

We used 6 smart Contracts in total.They are SIU.sol,Adjuster.sol,Agency.sol,Claim.sol,Policy.sol,user.sol.

Policy.sol:(Allows to create a new policy under a insurance company)


User.sol:(Used to initialize the user and also to apply any policies offered from the company)


Adjuster.sol:(make a subrogation claim for the insured and also to review the claim's from other insurance company.)


Claim.sol:(Gets deployed after creating the claim using adjuster.sol)


SIU.sol:(The main function is to check the subrogation reports to set the created claim to subrogation and also to accept the subrogation claim to the company)


Agency.sol:(Used to set the final amount of subrogation claim and transfer the claim to the adjuster of other insurance company,also have the ability to decide whether to accept or reject the received claim )
