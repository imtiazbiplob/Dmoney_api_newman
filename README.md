 
# API Test Automation Project

## How to run this project
- Open with Postman / Command Shell
- Run Command:  
```console 
newman run API_Test_Automation.postman_collection.json -e StudentDetails.postman_environment.json 
```
- Run Command for Report: 
```console 
newman run API_Test_Automation.postman_collection.json -e API_Test_Automation.postman_environment.json -r cli,htmlextra
``` 

## Technology used:
- Postman
- Newman

## Prerequisite:
- Jdk
- Node Js
- Newman
- Html Report Library

## Newman and Report Installation Process:
- Newman Install Command:
```console
npm install -g newman
```
- Newman Html Report Install Command:
```console
npm install -g newman-reporter-html
```
- Newman htmlextra Report Install Command:
```console
npm install -g newman-reporter-htmlextra
```

## API Documentation:
- [https://docs.google.com/document/d/1YyzPMbEu6eEMFrvp-WHiJW-SvDTJvikqx1QGyyFgRXw/edit?usp=sharing](https://documenter.getpostman.com/view/43043875/2sB2x5FsAN)

## Test case list:

## TC001:  Admin can login successfully using valid credentials.
Steps: 
1.Navigate to login page
2.Enter Email: admin@roadtocareer.net
3.Enter Password: 1234
4.Click Login 

Expected Result:  Admin is successfully logged in and redirected to the dashboard.

## TC002:  Verify Admin can successfully create an Agent account.
Steps: 
1.Login as Admin
2.Go to “Create Agent” page
3.Enter required Agent details
4.Submit the form 

Expected Result:  Agent account is created successfully 

 ## TC003 : Verify Admin can successfully create one Customer accounts.
Steps: 
1.Login as Admin
2.Go to “Create Customer” page
3.Enter random valid Customer info
4.Submit 

Expected Result:  Customer is created successfully 


## TC004:  Verify Admin can successfully create 2nd Customer accounts.
Steps: 
1.Repeat TC003 for a second random Customer 
Expected Result:  Customer 2 is created successfully 

## TC005:  Verify Admin can successfully create a Merchant account.
Steps: 
1.Login as Admin
2.Go to “Create Merchant” page
3.Enter required merchant details
4.Submit the form 

Expected Result:  Merchant account is created successfully.

## TC006:  Verify System Account can successfully deposit money within the allowed range to the Agent.
Steps: 
1.Login with system@roadtocareer.net
2.Go to “Deposit”
3.Select Agent as receiver
4.Enter amount (e.g., 5000 TK, within allowed range 10-1000 tk)
5.Submit 
Expected Result:  Deposit is successful, Agent’s balance increases by 5000 TK 


## TC007:  Agent checks balance after deposit 
Steps: 
1.Login as Agent
2.Navigate to balance section 
Expected Result:  Agent’s balance correctly reflects the deposited amount 

 
## TC008: Verify Agent can successfully deposit money to Customer 1.
Steps: 
1.Login as Agent
2.Go to "Transfer Money"
3.Select Customer 1 as receiver
4.Enter amount (e.g., 1000 TK)
5.Submit 
Expected Result:  Money is successfully transferred from Agent to Customer 1 

## TC009:  Verify Agent's balance is correctly updated after depositing money to Customer 1.
Steps: 
1.Login as Customer 1
2.View balance 

Expected Result:  Balance reflects the amount received from Agent.




## TC010 : Verify Customer 1 can successfully send money to Customer 2.
Steps: 

1.Login as Customer 1
2.Go to “Send Money”
3.Select Customer 2 as receiver
4.Enter amount (e.g., 500 TK)
5.Submit 
Expected Result:  Money is transferred successfully to Customer 2 

## TC011: Verify Customer 2 balance is correctly updated after depositing money to Customer 1
Steps: 
1.Login as Customer 2
2.View balance 
Expected Result:  Balance reflects amount received from Customer 1 

## TC012 :  Verify Customer 2 can withdraw money to Agent 
Steps: 
1.Login as Customer 2
2.Go to “Withdraw”
3.Select Agent as recipient
4.Enter amount within 10 TK – 10,000 TK
5.Submit 
Expected Result:  Withdrawal is successful, Customer 2's balance decreases, Agent’s increases. 

## TC013 :  Customer 2 checks balance and transaction by trnxId 
Steps: 
1.Login as Customer 2
2.View balance
3.Search transaction statement using trnxId 
Expected Result:  Balance is updated, and transaction is listed with matching trnxId 

TC014: Verify Customer 2 makes payment to Merchant 
Steps: 
1.Login as Customer 2
2.Go to “Make Payment”
3.Select Merchant
4.Enter payment amount
5.Submit 
Expected Result:  Payment is successful, balance deducted from Customer 2 

## TC015:  Merchant checks balance after payment 
Steps: 
1.Login as Merchant
2.View balance 

Expected Result:  Merchant’s balance reflects the payment amount from Customer 2 



## Newman Report Summary:
### Report Dashboard
(https://github.com/imtiazbiplob/Dmoney_api_newman/blob/main/newman_report_dashboard.png)
### API Requests
![Newman Report Summary](https://github.com/mamuneee78/API_Test_Automation_Project/blob/main/API%20Requests.png)

### Request Details
![Newman Report Summary](https://github.com/mamuneee78/API_Test_Automation_Project/blob/main/Request%20details.png)

### Failure Reason
![Newman Report Summary](https://github.com/mamuneee78/API_Test_Automation_Project/blob/main/Failure%20reason.png)

# Thank You

