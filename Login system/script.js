document.getElementById("Konto").onclick = function goto_Konto(){
    window.location.href="file:///C:/Users/henri/Desktop/Shop%20Streak%20App/Login%20system/login.html";
}

document.getElementById("Startseite").onclick = function go_to_Start(){
    window.location.href="file:///C:/Users/henri/Desktop/Shop%20Streak%20App/MAIN/main.html";
}
document.getElementById("sign_up").onclick = function sign_up(){
    window.location.href="file:///C:/Users/henri/Desktop/Shop%20Streak%20App/Login%20system/registry/registry.html";
}
let gemail;
let gpassword;
window.onload = function load_website(){
    gemail = localStorage.getItem("Email");
    gpassword = localStorage.getItem("password");
    console.log(`Deine Daten sind bein reload der website ${gemail} und ${gpassword}`);
}
document.getElementById("button_submit").onclick = function login(){
    let checkemail;
    let checkpassword;
    let flag;//flag ist zum prüfen ob if oder else genommen wurde
    checkemail = document.getElementById("username").value;
    checkpassword = document.getElementById("Password").value;
    if (checkemail === gemail && checkpassword === gpassword ){
        console.log("User Hat sich angemelded");
        flag = true;
        localStorage.setItem("status","Angemeldet");
    }else{
        alert("Falsches Passwort oder Email ");
    }
    function reset (){
    document.getElementById("username").value = '';
    document.getElementById("Password").value = '';
    console.log("clear user input");
        }
    if (flag === true){ 
        document.getElementById("status").textContent = "Angemelded";
        reset();
        alert("Sie Wurden erfolgreich angemeldet");
    }else{
        console.log("Error");
        reset();                                                       // ich will noch machen das das pw nicht 1234567 oder so sein kann mit if
    }
    window.onload = function status(){
    if (flag === true){ 
        document.getElementById("status").textContent = "Angemelded";
        reset();
        alert("Sie Wurden erfolgreich angemeldet");
    }else{
        console.log("Error");
        reset();                                                       // ich will noch machen das das pw nicht 1234567 oder so sein kann mit if
    }

    }                                                     // macht das oben der status nicht weg geht beim seiten wechsel
}
document.getElementById("new").onclick = function resetdata(){
    localStorage.removeItem("Email");
    localStorage.removeItem("password");
    alert("Deine Daten wurden Alle zurückgesetzt aktualisiere die seite um zu starten")
}
let Loginstatus = localStorage.getItem("status");

if (Loginstatus === "Angemeldet" ){
     document.getElementById("status").textContent = "Angemelded";
}else{
     document.getElementById("status").textContent = "Abgemeldet";
}
