const adminPassword = "jhayjhayservices.com"; // Admin password

// Initialize user credits if not already set
if (!localStorage.getItem('userCredits')) {
    localStorage.setItem('userCredits', 850); // Set initial credits to 850 if not already set
}
let userCredits = parseInt(localStorage.getItem('userCredits')); // Retrieve user credits

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
        localStorage.setItem('userCredits', userCredits); // Save updated credits to local storage
        updateCreditsDisplay();
        document.getElementById('message').textContent = "Download initiated.";
    } else {
        document.getElementById('message').textContent = "Insufficient credits for this download.";
    }
}

// Initialize credits display on page load
updateCreditsDisplay();
