let MongoClient =require('mongodb').MongoClient;

let url="mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo =db.db('mydb');

var myobj =[{
    "firstName": "John",
    "lastName": "Doe",
    "salary": "25000",
    "department": "HR",
    "lastCompany": "X",
    "lastSalary": "10000",
    "overallExp": "2",
    "contactInfo": "1234567890",
    "yearGrad": "2016",
    "gradStream": "CSE"
},{
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
},{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "roh",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
},{
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
},{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
},{
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
},{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
}]
   dbo.collection('employee').insertMany(myobj,function(err,res){
    if(err) throw err;
    console.log(res.insertedCount);
    db.close();
   })
   dbo.collection('employee').find({}).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
   })

   var mysort = { "firstName": "Jame"};
   dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
 
})
var myquery = { "salary": "35000" };
  var newvalues = {$set: {"salary": "35000"} };
  dbo.collection("employee").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");

  });
  
})   
