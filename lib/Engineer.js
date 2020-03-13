const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,githubUsername){
        if (!githubUsername) {
            throw new Error("You are missing a GitHub Username!");
          };
        super(name,id,email);
        this.githubUsername = githubUsername;
        
    }
    getGithub() {
            console.log(this.githubUsername)
            return this.githubUsername;
        };
    getRole() {
        this.role = "Engineer"
        console.log(this.role);
    }
};
// const eng = new Engineer("Alex",25,"hello@mail.com","testValue")
// eng.getName();
// eng.getID();
// eng.getEmail();
// eng.getGithub();
// eng.getRole();
module.exports = Engineer