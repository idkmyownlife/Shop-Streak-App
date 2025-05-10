document.getElementById("Konto").onclick = function goto_Konto(){
    window.location.href="file:///C:/Users/henri/Desktop/Shop%20Streak%20App/Login%20system/login.html";
}

document.getElementById("Startseite").onclick = function go_to_Start(){
    window.location.href="file:///C:/Users/henri/Desktop/Shop%20Streak%20App/MAIN/main.html";
}
document.getElementById("readdata").onclick = function readdata(){
    let email;
    let password;
    let print_email;
    let print_password;
    let gemail;
    let gpassword;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    if (email.length >= 7 && password.length >= 7){
        print_email = localStorage.setItem("Email",email);//email saved
        print_password = localStorage.setItem("password",password);// pw wurde gespcichert
        gemail = localStorage.getItem("Email");
        gpassword = localStorage.getItem("password");
        console.log(`Data : ${gemail} , ${gpassword}`);
    }else{
        alert("Das Password , Email muss länger als 7 zeichen sein");
    }
}
window.onload = function load_website(){
    let gemail;
    let gpassword;
    gemail = localStorage.getItem("Email");
    gpassword = localStorage.getItem("password");
    console.log(`Deine Daten sind bein reload der website ${gemail} und ${gpassword}`);
}