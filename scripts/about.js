async function promptForPassword() {
    let pw = prompt("Password:");
    if (!pw) return;
    if (await verifyPassword(pw.toLowerCase())) { alert("success!"); }
}