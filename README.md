# jobPortal

Login
url http://localhost:8086/login
request
{"email":"sidharthsahu@icloud.com","password":"test"}

response

pass case
{
	"error": "0",
	"userid": "c2lkaGFydGhzYWh1QGljbG91ZC5jb20=",
	"role": "admin"
}

fail case
{
	"error": "1",
	"errorMsg": "User Not Found or invalid Details"
}

Register
url http://localhost:8086/register

request
{
  "email": "test@icloud.com",
  "password": "test",
  "name": "some name",
  "role": "user or admin"
}

response

pass case
{
	"status": "1",
	"error": "0",
	"userid": "dGVzdEBpY2xvdWQuY29t"
}

fail case
{
	"error": "1",
	"errorMsg": "User already exist"
}

Job create 
url  http://localhost:8086/createjob

request 
{
  "userid": "c2lkaGFydGhzYWh1QGljbG91ZC5jb20=",
  "title": "Android software engineer",
  "desc": "test desc",
  "expe": "1yr to 3 year",
  "location": "Hyderabad",
  "profile": "Btech Computer science",
  "skill": "java,android"
}

response
{
	"status": "1",
	"error": "0",
	"jobcode": "vz1530639004277"
}


get job list

request

{
  "userid": "c2lkaGFydGhzYWh1QGljbG91ZC5jb20=",
  "skill": "",
  "page": 1
}

response

[
  {
    "_id": "5b3bdbf3d3978315483b64a7",
    "jobcode": "vz1530649587499",
    "createdby": "c2lkaGFydGhzYWh1QGljbG91ZC5jb20=",
    "jobtitle": "Android software engineer",
    "desc": "test desc",
    "expe": "1yr to 3 year",
    "location": "Hyderabad",
    "profile": "Btech Computer science",
    "skill": "java,android",
    "createdat": "2018-07-03",
    "isexpired": false,
    "applied": true,
    "totalapplied": 1
  },
  {
    "_id": "5b3bdc1bd3978315483b64a8",
    "jobcode": "vz1530649627695",
    "createdby": "c2lkaGFydGhzYWh1QGljbG91ZC5jb20=",
    "jobtitle": "Java developer",
    "desc": "test desc",
    "expe": "1yr to 3 year",
    "location": "Hyderabad",
    "profile": "Btech Computer science",
    "skill": "java",
    "createdat": "2018-07-03",
    "isexpired": false,
    "totalapplied": 0,
    "applied": false
  }
]

apply job

request
{
  "userid": "c2lkaGFydGhzYWh1QGljbG91ZC5jb20=",
  "jobid": "vz1530649587499"
}

response

{
	"error": "0",
	"message": "successfully applied"
}


