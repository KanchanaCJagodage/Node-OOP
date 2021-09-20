// Parent class
class Person{

   
 constructor(name,city,school){
    
        this.name= name;
        this.city = city;
        this.school=school;
        
    };
   
 //Encapsulation   
 getGender(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }
    getDOB(){
        return this.dob;
    }
    setDOB(DOB){
        this.dob = DOB;
        }
    


 calculateAge(){
        return new Date().getFullYear()-this.getDOB();
   } ;

//Abstract Method 
 bio(){
    throw new Error("Abstract Method");
  };
   
};



module.exports= {
    Person:Person
};

