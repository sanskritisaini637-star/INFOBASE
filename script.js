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