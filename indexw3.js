// Eric Kopy- u2483667
// Function to display employee information
function Employeeinfo(name, salary) {
    console.log("Employee Name: " + name);
    console.log("Employee Salary: £" + salary);
}

console.log("This is my first program"); // prints out the text in the brackets

// Call the Employeeinfo function
Employeeinfo("John Smith", 50000); // salary also included.


const EmpSkills = (skills) => {
    console.log("Expert in " + skills); // Writes "Expert in" the console log
}

EmpSkills("Java"); // Corrected casing for consistency

// Import the StudentInfo module
const StudentInfo = require('./StudentInfo'); // Ensure the correct relative path

// Import the Person module
const Person = require('./Person'); // Use relative path instead of absolute


console.log("Student Name: " + StudentInfo.getStudentName());
console.log("Campus Name: " + StudentInfo.getCampusName()); // Added to log campus name


const personDetails = new Person("Jane Smith", 25, "jane.smith@example.com");

console.log("Person Name: " + personDetails.getPersonInfo().Name);
console.log("Person Age: " + personDetails.getPersonInfo().Age);
console.log("Person Email: " + personDetails.getPersonInfo().Email);


// Task 4

os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
