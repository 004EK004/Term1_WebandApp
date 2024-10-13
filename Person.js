// Defining the Student class
class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method to get person info
    getPersonInfo() {
        return {
            Name: this.name,
            Age: this.age,
            Email: this.email
        };
    }
}

// Exporting the Student class
module.exports = Student;