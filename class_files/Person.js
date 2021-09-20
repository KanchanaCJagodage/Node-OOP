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
       <br> ${gen} is ${this.calculateAge()} years old. `;
   };
   
};



module.exports= {
    Person:Person
};

