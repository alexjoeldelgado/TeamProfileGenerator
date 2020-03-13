const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        if (!school) {
            throw new Error("You are missing a school!");
          };
        super(name,id,email);
        this.school = school;
        
    }
    getSchool() {
            console.log(this.school)
            return this.school;
        };
    getRole() {
        this.role = "Intern";
        console.log(this.role);
    }
};
// const int = new Intern("Alex",25,"hello@mail.com","UCF")
// int.getName();
// int.getID();
// int.getEmail();
// int.getSchool();
// int.getRole();
module.exports = Intern;
