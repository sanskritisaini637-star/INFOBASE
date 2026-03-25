// ---------------- ADMIN LOGIN ----------------
function adminLogin(){

let user = document.getElementById("adminUser");
let pass = document.getElementById("adminPass");

if(!user || !pass) return;

if(user.value === "admin" && pass.value === "1234"){
    window.location.href = "admin-dashboard.html";
}
else{
    alert("Invalid Admin Login");
}

}


// ---------------- SHOW / HIDE PASSWORD ----------------
function togglePassword(){

let pass = document.getElementById("adminPass");

if(!pass){
    pass = document.getElementById("studPass");
}

if(pass){
    pass.type = (pass.type === "password") ? "text" : "password";
}

}


// ---------------- STUDENTS DATA ----------------
let students = [

{roll:"25001", name:"Aarav Sharma", father:"Rajesh Sharma", course:"BCA", password:"Aarav@001", math:78, cs:84, prog:90},
{roll:"25002", name:"Diya Verma", father:"Suresh Verma", course:"BBA", password:"Diya@002", math:65, cs:70, prog:75},
{roll:"25003", name:"Rohan Gupta", father:"Amit Gupta", course:"BTech", password:"Rohan@003", math:88, cs:92, prog:85},
{roll:"25004", name:"Ananya Singh", father:"Vikram Singh", course:"BSc", password:"Ananya@004", math:72, cs:80, prog:78},
{roll:"25005", name:"Kabir Mehta", father:"Rakesh Mehta", course:"BCom", password:"Kabir@005", math:60, cs:68, prog:70}

];


// ---------------- STUDENT LOGIN ----------------
function studentLogin(){

let roll = document.getElementById("roll");
let pass = document.getElementById("studPass");

if(!roll || !pass) return;

let student = students.find(s => s.roll === roll.value && s.password === pass.value);

if(student){
    localStorage.setItem("currentStudent", JSON.stringify(student));
    window.location.href = "student-dashboard.html";
}
else{
    alert("Invalid Roll No or Password");
}

}


// ---------------- LOAD STUDENT DASHBOARD ----------------
function loadStudent(){

let student = JSON.parse(localStorage.getItem("currentStudent"));

if(student && document.getElementById("studentName")){
    document.getElementById("studentName").innerText = student.name;
    document.getElementById("studentRoll").innerText = student.roll;
}

}


// ---------------- LOAD RESULT ----------------
function loadResult(){

let student = JSON.parse(localStorage.getItem("currentStudent"));
if(!student) return;

if(!document.getElementById("mathMarks")) return;

let math = student.math;
let cs = student.cs;
let prog = student.prog;

document.getElementById("studentName").innerText = student.name;
document.getElementById("studentRoll").innerText = student.roll;

document.getElementById("mathMarks").innerText = math;
document.getElementById("csMarks").innerText = cs;
document.getElementById("progMarks").innerText = prog;

let total = math + cs + prog;
document.getElementById("totalMarks").innerText = total;

let percentage = (total / 300) * 100;
document.getElementById("percentage").innerText = percentage.toFixed(2);

let grade = "";
if(percentage >= 90) grade = "A+";
else if(percentage >= 75) grade = "A";
else if(percentage >= 60) grade = "B";
else if(percentage >= 50) grade = "C";
else grade = "Fail";

document.getElementById("grade").innerText = grade;

let cgpa = (percentage / 9.5).toFixed(2);
document.getElementById("cgpa").innerText = cgpa;

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
if(!table) return;

students.forEach(s => {

let row = table.insertRow();

row.insertCell(0).innerHTML = s.roll;
row.insertCell(1).innerHTML = s.name;
row.insertCell(2).innerHTML = s.father;
row.insertCell(3).innerHTML = s.course;
row.insertCell(4).innerHTML = s.password;
row.insertCell(5).innerHTML = s.math;
row.insertCell(6).innerHTML = s.cs;
row.insertCell(7).innerHTML = s.prog;

});

}


// ---------------- ADD NEW STUDENT ----------------
function addStudent(){

let roll = document.getElementById("roll");
let name = document.getElementById("name");
let father = document.getElementById("father");
let course = document.getElementById("course");
let password = document.getElementById("password");
let math = document.getElementById("math");
let cs = document.getElementById("cs");
let prog = document.getElementById("prog");

if(!roll || !name || !father || !course || !password || !math || !cs || !prog) return;

if(roll.value=="" || name.value=="" || father.value=="" || course.value=="" || password.value=="" || math.value=="" || cs.value=="" || prog.value==""){
alert("Please fill all fields");
return;
}

let student = {
roll: roll.value,
name: name.value,
father: father.value,
course: course.value,
password: password.value,
math: parseInt(math.value),
cs: parseInt(cs.value),
prog: parseInt(prog.value)
};

students.push(student);

alert("Student Added Successfully");

// clear
roll.value="";
name.value="";
father.value="";
course.value="";
password.value="";
math.value="";
cs.value="";
prog.value="";

}


// ---------------- COURSES ----------------
let courses = [];

function addCourse(){

let name = document.getElementById("courseName");
let code = document.getElementById("courseCode");
let teacher = document.getElementById("teacherName");
let duration = document.getElementById("duration");

if(!name || !code || !teacher || !duration) return;

if(name.value=="" || code.value=="" || teacher.value=="" || duration.value==""){
alert("Fill all fields");
return;
}

let course = {
name: name.value,
code: code.value,
teacher: teacher.value,
duration: duration.value
};

courses.push(course);

let table = document.getElementById("courseTable");

if(table){
let row = table.insertRow();

row.insertCell(0).innerHTML = course.name;
row.insertCell(1).innerHTML = course.code;
row.insertCell(2).innerHTML = course.teacher;
row.insertCell(3).innerHTML = course.duration;
}

// clear
name.value="";
code.value="";
teacher.value="";
duration.value="";

alert("Course Added Successfully");

}


// ---------------- ADD RESULT ----------------
function addResult(){

let roll = document.getElementById("roll");
let name = document.getElementById("name");
let math = document.getElementById("math");
let cs = document.getElementById("cs");
let prog = document.getElementById("prog");

if(!roll || !name || !math || !cs || !prog) return;

if(roll.value=="" || name.value=="" || math.value=="" || cs.value=="" || prog.value==""){
alert("Please fill all fields");
return;
}

let table = document.getElementById("resultTable");

if(table){
let row = table.insertRow();

row.insertCell(0).innerHTML = roll.value;
row.insertCell(1).innerHTML = name.value;
row.insertCell(2).innerHTML = math.value;
row.insertCell(3).innerHTML = cs.value;
row.insertCell(4).innerHTML = prog.value;
}

// clear
roll.value="";
name.value="";
math.value="";
cs.value="";
prog.value="";

alert("Result Added Successfully");

}


// ---------------- LOAD STUDENT LIST ----------------
function loadStudentList(){

let container = document.getElementById("studentList");
if(!container) return;

container.innerHTML = "";

students.forEach(s => {

let card = `
<div class="card">
    <div class="icon">👩‍🎓</div>
    <h3>${s.name}</h3>
    <p><b>Roll:</b> ${s.roll}</p>
    <p><b>Father:</b> ${s.father}</p>
    <p><b>Course:</b> ${s.course}</p>
    <p><b>Marks:</b> ${s.math} / ${s.cs} / ${s.prog}</p>
</div>
`;

container.innerHTML += card;

});

}


// ---------------- LOGOUT ----------------
function logout(){
localStorage.removeItem("currentStudent");
window.location.href = "index.html";
 }
