const express = require('express');
const mongoose = require('mongoose');
let app = express();

// connect server to mongo server => local db
mongoose.connect("mongodb://0.0.0.0:27017/App",)
.then(() => console.log('DB now is connected'))
.catch( (err) => {console.error(err); });
const studentschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : String,
    address : String,
    age : Number,
    Bio : String,
 
});
// convert schema to node (class)
 
let studentmodel = new mongoose.model("Students", studentschema);

let userIbrahim = new studentmodel({
    name : "ibrahimBaroky",
    email : "ibrahimBaroky@gmail.com",
    password : "710801%%#mc",
    phone : "01554264002",
    age : 23
 
}).save();



let useranas = new studentmodel({
    name : "anasismail",
    email : "anasismail@gmail.com",
    password : "0988$##@",
    phone : "0123223937848",
    age :30 
 
}).save();

let userIsmail = new studentmodel({
    name : "ismailbaroky",
    email : "ismailbaroky@gmail.com",
    password : "0285578ujfij",
    phone : "01099387093",
    age:40 ,
    bio :"doctor" 
 
}).save();

const coursesschema = new mongoose.Schema({
    id : String,
    name : String,
    description: String,
    studentsEnteredThisCourse : String
 
});
 
let coursesmodel = new mongoose.model("Courses",coursesschema ); 



let course1 = new coursesmodel({
    name : "is",
    id: "1",
    description: "information system",
    studentsEnteredThisCourse: "30"
}).save();



let course2 = new coursesmodel({
    name : "ir",
    id: "2",
    description: "basics IR",
    studentsEnteredThisCourse: "50"
}).save();



let course3 = new coursesmodel({
    name : "OODB",
    id: "3",
    description: "basics database oriented",
    studentsEnteredThisCourse: "20"
}).save();


app.get("/Students", async (req, res) => {
    let allstudents = await studentmodel.find();
    res.status(200);
    console.log(allstudents.length);
    res.json(allstudents);
  });
 
  app.get("/Courses", async (req, res) => {
    let allCourses = await coursesmodel.find();
    res.status(200);
    console.log(allCourses.length);
    res.json(allCourses);
  });




app.listen(3000,function () {
    console.log('server now is opend')
})