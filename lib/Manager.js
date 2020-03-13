const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNum){
        if (!officeNum || isNaN(officeNum)) {
            throw new Error("You are missing an Office Number!");
          };
        super(name,id,email);
        this.officeNum = officeNum;
        
    }
    getOfficeNum() {
            console.log(this.officeNum)
            return this.officeNum;
        };
    getRole() {
        this.role = "Manager";
        console.log(this.role);
    }
};
// const man = new Manager("Alex",2,"hello@mail.com",25)
// man.getName();
// man.getID();
// man.getEmail();
// man.getOfficeNum();
// man.getRole();
module.exports = Manager;
