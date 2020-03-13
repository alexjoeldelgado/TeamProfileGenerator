// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      if (!name) {
        throw new Error("You are missing a name.");
      }
      if (!id) {
        throw new Error("You are missing an id number.");
      }
      if (!email) {
        throw new Error("You are missing an email.");
      }
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName(){
        console.log(this.name)
        return this.name;
    }
    getID(){
        console.log(this.id)
        return this.id;
    }
    getEmail(){
        console.log(this.email)
        return this.email;
    }
    getRole(){
        console.log("Employee")
        return "Employee";
    }
}
// const alex = new Employee("Alex",1001,"alex@mail.com")
// alex.getName();
// alex.getID();
// alex.getEmail();
// alex.getRole();
module.exports = Employee;
