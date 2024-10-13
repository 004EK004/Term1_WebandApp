// Eric Kopy- u2483667
const dateOfBirth = "12/12/1980"; // Date of Birth

// Defining the getStudentName function
const getStudentName = () => {
    return "write your name here"; // Returns the student name
}

// Defining the getCampusName function
const getCampusName = () => {
    return "UEL Campus"; // Returns the campus name, this is visible in the terminal as well.
}

// Exporting functions & variables outside the module
exports.getStudentName = getStudentName; // Changed to match the function name.
exports.getCampusName = getCampusName;   // Changed to match the function name.
exports.dob = dateOfBirth; // DOB- Variable Name

// Exporting a function with parameters for grading
exports.StudentGrade = (marks) => { // uses arrow function
    if (marks > 50 && marks < 80) {
        return "B grade";
    } else {
        return "A grade"; // Assuming "A grade" for marks >= 80
    }
}
