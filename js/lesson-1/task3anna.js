const userLogin = prompt("Enter your login:");
if (userLogin && userLogin.trim()) {
    if (userLogin.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else {
        if (userLogin === 'User' || userLogin === 'Admin') {
            const userPassword = prompt("Enter your password:");
            if (userPassword && userPassword.trim()) {
                if (userLogin === 'User' && userPassword === "UserPass" ||
                    userLogin === 'Admin' && userPassword === "RootPass") {
                    let date = new Date().getHours();
                    let timeNow;
                    if (date > 5 && date < 20) { timeNow = "day"} else { timeNow = "evening"}
                    alert(`Good ${timeNow}, dear ${userLogin}!`);
                } else { alert("Wrong password");}
            } else {alert("Canseled User or Admin"); }
        } else { alert("I don’t know you"); }
    }
} else {
    alert("Canceled");
}