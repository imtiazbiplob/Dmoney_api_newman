API Test Automation Project
How to run this project
Open with Postman / Command Shell
Run Command:
newman run API_Test_Automation.postman_collection.json -e StudentDetails.postman_environment.json 
Run Command for Report:
newman run API_Test_Automation.postman_collection.json -e API_Test_Automation.postman_environment.json -r cli,htmlextra
Technology used:
Postman
Newman
Prerequisite:
Jdk
Node Js
Newman
Html Report Library
Newman and Report Installation Process:
Newman Install Command:
npm install -g newman
Newman Html Report Install Command:
npm install -g newman-reporter-html
Newman htmlextra Report Install Command:
npm install -g newman-reporter-htmlextra
API Documentation:
https://docs.google.com/document/d/1YyzPMbEu6eEMFrvp-WHiJW-SvDTJvikqx1QGyyFgRXw/edit?usp=sharing
Test case list:
Token Generate
In this request need to generate token as per documentaion and need to validate the following field values:

Token data

Status code validation

Response Time Validation

Create(Booking)
Create Data Sets Using the Dynamic Random Variables In this test case need to validate the following field

Response time validation

Status Code validation

FetchBookingData
In the test case you need to validate the following field values:

First Name

Last Name

totalprice

depositpaid

Content-Type value test

checkin

checkout

Response Time validation

Connection header present

Content-Type header present

UpdateBookingInfo
In the test case need to validate the following field values:

checkin

checkout

totalprice

Status code validation

Status code validation

FetchUpdatedData
In the test case you need to validate the following field values:

First Name

Last Name

totalprice

depositpaid

Content-Type value test

checkin

checkout

Response Time validation

Connection header present

Content-Type header present

Delete Booking Details
In the test case you need to validate the following field values:

Only Message

Newman Report Summary:
Report Dashboard
