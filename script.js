u// ---------------- ADMIN LOGIN ----------------
function adminLogin(){

let user = document.getElementById("adminUser").value;
let pass = document.getElementById("adminPass").value;

if(user === "admin" && pass === "1234"){
window.location = "admin-dashboard.html";
}
else{
alert("Invalid Admin Login");
}

}


// ---------------- SHOW / HIDE PASSWORD ----------------
function togglePassword(){

let pass = document.getElementById("adminPass");
pass.type = (pass.type === "password") ? "text" : "password";

}


// ---------------- STUDENTS DATA ----------------
let students = [

{roll:"25001", name:"Aarav Sharma", password:"Aarav@001", math:78, cs:84, prog:90},

{roll:"25002", name:"Diya Verma", password:"Diya@002", math:65, cs:70, prog:75},

{roll:"25003", name:"Rohan Gupta", password:"Rohan@003", math:88, cs:92, prog:85},

{roll:"25004", name:"Ananya Singh", password:"Ananya@004", math:72, cs:80, prog:78},

{roll:"25005", name:"Kabir Mehta", password:"Kabir@005", math:60, cs:68, prog:70}

];


// ---------------- STUDENT LOGIN ----------------
function studentLogin(){

let roll = document.getElementById("roll").value;
let pass = document.getElementById("studPass").value;

let student = students.find(s => s.roll === roll && s.password === pass);

if(student){
localStorage.setItem("currentStudent", JSON.stringify(student));
window.location = "student-dashboard.html";
}
else{
alert("Invalid Roll No or Password");
}

}


// ---------------- LOAD STUDENT DASHBOARD ----------------
function loadStudent(){

let student = JSON.parse(localStorage.getItem("currentStudent"));

if(student){
document.getElementById("studentName").innerText = student.name;
document.getElementById("studentRoll").innerText = student.roll;
}

}


// ---------------- LOAD RESULT ----------------
function loadResult(){

let student = JSON.parse(localStorage.getItem("currentStudent"));

if(!student){
document.getElementById("finalResult").innerText = "No Result Found";
return;
}

// Show basic info
document.getElementById("studentName").innerText = student.name;
document.getElementById("studentRoll").innerText = student.roll;

// Marks
let math = student.math;
let cs = student.cs;
let prog = student.prog;

// Display marks
document.getElementById("mathMarks").innerText = math;
document.getElementById("csMarks").innerText = cs;
document.getElementById("progMarks").innerText = prog;

// Total
let total = math + cs + prog;
document.getElementById("totalMarks").innerText = total;

// Percentage
let percentage = (total / 300) * 100;
document.getElementById("percentage").innerText = percentage.toFixed(2);

// Grade
let grade = "";
if(percentage >= 90) grade = "A+";
else if(percentage >= 75) grade = "A";
else if(percentage >= 60) grade = "B";
else if(percentage >= 50) grade = "C";
else grade = "Fail";

document.getElementById("grade").innerText = grade;

// CGPA
let cgpa = (percentage / 9.5).toFixed(2);
document.getElementById("cgpa").innerText = cgpa;

// Result
if(percentage >= 40){
document.getElementById("finalResult").innerText = "PASS";
}
else{
document.getElementById("finalResult").innerText = "FAIL";
document.getElementById("finalResult").style.color = "red";
}

}


// ---------------- LOAD STUDENTS TABLE ----------------
function loadStudentsTable(){

let table = document.getElementById("studentTable");

students.forEach(s => {

let row = table.insertRow();

row.insertCell(0).innerHTML = s.roll;
row.insertCell(1).innerHTML = s.name;
row.insertCell(2).innerHTML = s.password;
row.insertCell(3).innerHTML = s.math;
row.insertCell(4).innerHTML = s.cs;
row.insertCell(5).innerHTML = s.prog;

});

}


// ---------------- ADD NEW STUDENT ----------------
function addStudent(){

let roll = document.getElementById("roll").value;
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;
let math = document.getElementById("math").value;
let cs = document.getElementById("cs").value;
let prog = document.getElementById("prog").value;

if(roll=="" || name=="" || password=="" || math=="" || cs=="" || prog==""){
alert("Please fill all fields");
return;
}

let student = {
roll: roll,
name: name,
password: password,
math: parseInt(math),
cs: parseInt(cs),
prog: parseInt(prog)
};

students.push(student);

// Add to table
let table = document.getElementById("studentTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = roll;
row.insertCell(1).innerHTML = name;
row.insertCell(2).innerHTML = password;
row.insertCell(3).innerHTML = math;
row.insertCell(4).innerHTML = cs;
row.insertCell(5).innerHTML = prog;

// Clear inputs
document.getElementById("roll").value="";
document.getElementById("name").value="";
document.getElementById("password").value="";
document.getElementById("math").value="";
document.getElementById("cs").value="";
document.getElementById("prog").value="";

alert("Student Added Successfully");

}


// ---------------- COURSES ----------------
let courses = [];

function addCourse(){

let name = document.getElementById("courseName").value;
let code = document.getElementById("courseCode").value;
let teacher = document.getElementById("teacherName").value;
let duration = document.getElementById("duration").value;

if(name=="" || code=="" || teacher=="" || duration==""){
alert("Fill all fields");
return;
}

let course = {name, code, teacher, duration};

courses.push(course);

let table = document.getElementById("courseTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = code;
row.insertCell(2).innerHTML = teacher;
row.insertCell(3).innerHTML = duration;

// Clear
document.getElementById("courseName").value="";
document.getElementById("courseCode").value="";
document.getElementById("teacherName").value="";
document.getElementById("duration").value="";

alert("Course Added Successfully");

 }
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 15px;
    color: white;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 350px;  /* 🔥 IMPORTANT */
 }
.card {
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-5px);
     }
.login-box {
    width: 90%;
    max-width: 350px;
    margin: 100px auto;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 25px;
    border-radius: 15px;
    text-align: center;
}

.login-box input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: none;
    outline: none;
}

.login-box button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2c3e50;
    color: white;
    cursor: pointer;
                                  }
