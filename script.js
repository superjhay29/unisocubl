const adminPassword = "jhayjhayservices.com"; // Admin password
let userCredits = 50; // Initial credits for the user

function login() {
    const password = document.getElementById('adminPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    if (password === adminPassword) {
        document.querySelector('.login').style.display = 'none';
        document.getElementById('downloadContainer').style.display = 'block';
        updateCreditsDisplay();
    } else {
        loginMessage.textContent = "Invalid Admin Password.";
    }
}

function updateCreditsDisplay() {
    document.getElementById('creditDisplay').textContent = `You have ${userCredits} credits.`;
}

function subtractCredits() {
    if (userCredits >= 10) {
        userCredits -= 10;
        updateCreditsDisplay();
        document.getElementById('message').textContent = "Download initiated.";
    } else {
        document.getElementById('message').textContent = "Insufficient credits for this download.";
    }
}
