let per= require('./Person.js');
// Inheritance
class Student extends per.Person{
    constructor(name,DOB,gender,city,school,stream){
        super(name,DOB,gender,city,school);
        this.stream=stream;
        
    }
// Encapsulation
    getId(){
        return this.id;
    }
    setID(id){
        this.id=id;
    }

    schoolYear(){
        if (this.calculateAge()==18){
            return `is in the Second Year of A/L`;
        }
        else if(this.calculateAge()<18 && this.calculateAge()>16){
            return `is in the First Year of O/L`;
        }
        else if(this.calculateAge()>18){
            return `has already left the School`;
        }
        else{
            return `is a primary student`;
        }
    }
// Pollymorphism
    bio(){  
        let gen = "";
        if(this.getGender()=="female"){
            gen ="She";
        
        }
        else{
            gen =  "He";
            
        }
       return `${this.name} is born in ${this.getDOB()}.
       <br> ${gen} lives in ${this.city}.
       <br> ${gen} is ${this.calculateAge()} years old.
       <br> ${gen} studies in ${this.school} and ${gen} ${this.schoolYear()}.
       <br> Student ID of ${this.name} is ${this.getId()}.`;
   };

    
} 

module.exports = {
    Student:Student
}