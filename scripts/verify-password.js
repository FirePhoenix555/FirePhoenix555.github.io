async function verifyPassword(pw) {
    let desiredHash = "HASH HERE";
    let pwHash = await digestMessage(pw);
    return pwHash === desiredHash;
}