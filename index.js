//By Eric Kopy- u2483667

// Import required modules
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//  StudentInfo.html file.
app.get('/studentinfo', function (req, res) {
    res.sendFile('studentinfo.html', { root: __dirname });
});

// Handle the POST request from the form.
app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var age = req.body.myAge;
    var gender = req.body.gender;
    var qualifications = req.body.Qual; // This will be an array if multiple checkboxes are checked

    console.log("Received data:", req.body);

    // Formats the qualifications to a string
    var qualificationsStr = Array.isArray(qualifications) ? qualifications.join(', ') : qualifications || 'None';

    res.send({
        status: true,
        message: 'Form Details',
        data: {
            name: name,
            age: age,
            gender: gender,
            qualifications: qualificationsStr,
        }
    });
});

// Start the server
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
