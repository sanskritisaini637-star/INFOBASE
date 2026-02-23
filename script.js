function adminLogin(){
    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;

    if(user=="admin" && pass=="1234"){
        window.location="admin-dashboard.html";
    } else {
        alert("Invalid Admin Login");
    }
}

function studentLogin(){
    let roll = document.getElementById("roll").value;
    let pass = document.getElementById("studPass").value;

    if(roll=="101" && pass=="1234"){
        window.location="student-dashboard.html";
    } else {
        alert("Invalid Student Login");
    }
}
// Student Array
let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if(name=="" || roll=="" || course==""){
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        course: course
    };

    students.push(student);

    // Add row to table
    let table = document.getElementById("studentTable");

    let newRow = table.insertRow(-1);

    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = roll;
    newRow.insertCell(2).innerHTML = course;

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";

    alert("Student Added Successfully");
}
function togglePassword() {
    let pass = document.getElementById("adminPass");

    if(pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function adminLogin(){
    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;
    let error = document.getElementById("error-msg");

    if(user === "admin" && pass === "1234"){
        window.location="admin-dashboard.html";
    } else {
        error.innerText = "❌ Invalid Username or Password";
    }
}
function togglePassword() {
    let pass = document.getElementById("adminPass");

    if(pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
