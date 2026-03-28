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

    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "student-dashboard.html";
    }, 400);

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


// ---------------- LOAD RESULT (UPDATED) ----------------
function loadResult(){

let student = JSON.parse(localStorage.getItem("currentStudent"));
let sem = localStorage.getItem("selectedSem");

if(!student) return;
if(!document.getElementById("mathMarks")) return;

// 🎯 Semester-wise marks
let semesterData = {
  1: { math: student.math, cs: student.cs, prog: student.prog },
  2: { math: student.math + 5, cs: student.cs + 3, prog: student.prog + 4 },
  3: { math: student.math + 8, cs: student.cs + 6, prog: student.prog + 5 },
  4: { math: student.math + 10, cs: student.cs + 8, prog: student.prog + 7 },
  5: { math: student.math + 12, cs: student.cs + 10, prog: student.prog + 9 }
};

let result = semesterData[sem];

// Student info
document.getElementById("studentName").innerText = student.name;
document.getElementById("studentRoll").innerText = student.roll;

// Marks
document.getElementById("mathMarks").innerText = result.math;
document.getElementById("csMarks").innerText = result.cs;
document.getElementById("progMarks").innerText = result.prog;

// Total
let total = result.math + result.cs + result.prog;
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


// ---------------- LOAD STUDENT LIST ----------------
function loadStudentList(){

let container = document.getElementById("studentList");
if(!container) return;

container.innerHTML = "";

container.classList.add("container");

students.forEach(s => {

let card = `
<div class="card">
    <div class="icon">👩‍🎓</div>
    
    <h3>${s.name}</h3>
    
    <p><b>Roll No:</b> ${s.roll}</p>
    <p><b>Father Name:</b> ${s.father}</p>
    <p><b>Course:</b> ${s.course}</p>
    <p><b>Password:</b> ${s.password}</p>
    
</div>
`;

container.innerHTML += card;

});

}


// ---------------- LOGOUT ----------------
function logout(){

document.body.style.opacity = "0";

setTimeout(() => {
    localStorage.removeItem("currentStudent");
    window.location.href = "index.html";
}, 300);

}


// ---------------- EMOJI ANIMATION ----------------
function createEmoji() {
  const emojis = ["🎓", "📚", "✨", "💻", "📝"];
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = (20 + Math.random() * 30) + "px";

  document.querySelector(".emoji-bg").appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 10000);
}

setInterval(() => {
  if (document.querySelector(".emoji-bg")) {
    createEmoji();
  }
}, 500);


// ---------------- SELECT SEMESTER ----------------
function selectSem(sem) {
  localStorage.setItem("selectedSem", sem);
  window.location.href = "result.html";
    }
