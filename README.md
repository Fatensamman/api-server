# Lab 2-401 course api-server

## links:
- [heroku link](https:/server-api-2.herokuapp.com/)

- [Github actions link](https://github.com/Fatensamman/api-server/actions)

- [pull request link](https:/github.com/Fatensamman/api-server/pull/1)

## End Points
#### clothes api
-  create clothes data route on post *https://server-api-2.herokuapp.com/api/v1/clothes/*
-  update clothes data route on put *https://server-api-2.herokuapp.com/api/v1/clothes/<id>*
-  saved clothes data route on get *https://server-api-2.herokuapp.com/api/v1/clothes/*
-  one recorded clothes data route on get *https://server-api-2.herokuapp.com/api/v1/clothes/<id>*
-  delete one recorded clothes data route on delete *https://server-api-2.herokuapp.com/api/v1/clothes/<id>*

#### food api
- create food data route on post *https://server-api-2.herokuapp.com/api/v1/food/*
-  update food data route on put *https://server-api-2.herokuapp.com/api/v1/food/<id>*
-  saved food data route on get *https://server-api-2.herokuapp.com/api/v1/food/*
-  one recorded food data route on get *https://server-api-2.herokuapp.com/api/v1/food/<id>*
-  delete one recorded food data route on delete *https://server-api-2.herokuapp.com/api/v1/food/<id>*


## setup  environment

### Install
- initialization using  `npm inint -y`
- install libraries like express dotenv cors morgan uuid
- install devDependencies like jest supertest eslint
- create files tree

### Test
- test 404 status  on a bad route
- The correct status codes and returned data for each REST route
     Create a record using POST
     Read a list of records using GET
     Read a record using GET
     Update a record using PUT
     Destroy a record using DELETE
 using `npm test `


 ## Documentation:
 ![UML](3.PNG)