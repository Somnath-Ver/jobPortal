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
