const adminPassword = "jhayjhayservices.com"; // Admin password

// Function to get cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Initialize user credits if not already set
let userCredits = parseInt(getCookie('userCredits')) || 850; // Set initial credits to 850 if not already set

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
        document.cookie = `userCredits=${userCredits}; path=/;`; // Save updated credits to cookies
        updateCreditsDisplay();
        document.getElementById('message').textContent = "Download initiated.";
    } else {
        document.getElementById('message').textContent = "Insufficient credits for this download.";
    }
}

// Initialize credits display on page load
updateCreditsDisplay();
