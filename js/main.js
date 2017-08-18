var count = 5;
var uName = responseData.authenticatUser.RSP.USR.CONT.FNM;

// Validation function that check if the user is in the (temporary)database
function validate() {
    var un = document.login.username.value; // Username Input variable
    var pw = document.login.password.value; // Password Input variable
    var valid = false;
    
    let data = responseData;
    for(var account in data.authenticatUser){
        if( un == responseData.authenticatUser.RSP.USR.CONT.EML){
            valid = true;
            console.log(uName);
            break;
        }
    }
    
    
    
    if (valid) {
        alert("Login was successful. Welcome, " + responseData.authenticatUser.RSP.USR.CONT.FNM + ".")
        window.location.href = "application.html";
        return false;
    }
    
    if (count >= 1) {
        alert("Incorrect Username or Password.");
        count--;
    }
    else { /* Just for fun */
        alert("You reached the maximum amount of login attempts. You are now blocked.");
        document.login.username.value = "Blocked";
        document.login.password.value = "Blocked";
        document.login.username.disabled = true;
        document.login.password.disabled = true;
    }
}

/*function getDocumentType() {
        let text = responseData;
        for(var docs in text.getDocumentType) {
            console.log(responseData.getDocumentType.RSP.DOCSTP["0"].NM);
            break;
        }
}*/

// Username display
var elUserName = document.getElementById("username");
elUserName.textContent = uName;









