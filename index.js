let http = require('http');
let persons= require('./class_files/Person.js');
let students= require('./class_files/Student.js');
let teachers = require('./class_files/Teacher.js');
let teacher= teachers.Teacher;
let person = persons.Person;
let student = students.Student;





const s1 = new student("Samila Jagodage","Badulla","Vihara Maha Devi","Science");
s1.setDOB(1996);
s1.setGender("female");
s1.setID("001");




const t1 = new teacher("Jayani Gunarathne","Badulla","Vihara Maha Devi","Science",1998,20000);
t1.setDOB(1978);
t1.setGender("female");
t1.setTeacherId("t01");


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>Student</h1>");
    res.write(s1.bio());
    res.write("<br>");
    res.write("<h1>Teacher</h1>")
    res.write(t1.bio());
    
    res.end();
}).listen(500);