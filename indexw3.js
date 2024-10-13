// Eric Kopy- Arrow Functions
function Employeeinfo(name, salary) {
    console.log("Employee Name: " + name);
    console.log("Employee Salary: $" + salary);
}

console.log("This is my first program"); // prints out the text in the brackets.


Employeeinfo("John Smith", 50000);

// Define the EmpSkills function and call it
const EmpSkills = (skills) => {
    console.log("Expert in  " + skills); // Writes "Expert in" the console log.
}

EmpSkills("java"); 
