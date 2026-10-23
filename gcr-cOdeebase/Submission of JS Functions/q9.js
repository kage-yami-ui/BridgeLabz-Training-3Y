// Q9: Person -> Student inheritance using ES6 classes and extends/super()

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); 
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Shishant", "CSE - AI & DS");

student.showName();  
student.showBranch(); 

console.log(student instanceof Student); 
console.log(student instanceof Person);  

// The constructor-function version is demonstrated in Q5.
// Both approaches support inheritance and inherited methods.
