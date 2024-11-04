const adminPassword = "jhayjhayservices.com"; // Admin password

// Function to get the value of a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Set initial credits from cookie or default to 850
let userCredits = parseInt(getCookie('userCredits')) || 850;

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
        userCredits -= 10; // Deduct credits
        document.cookie = `userCredits=${userCredits}; path=/;`; // Update cookie
        updateCreditsDisplay();
        document.getElementById('message').textContent = "Download initiated.";
    } else {
        document.getElementById('message').textContent = "Insufficient credits for this download.";
    }
}

// Function to show cookie consent prompt
function showCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.style.display = 'block'; // Show the consent banner
}

// Check for cookie consent
if (!getCookie('cookieConsent')) {
    showCookieConsent(); // Show the prompt if consent has not been given
}

// Add event listener for the accept button
document.getElementById('acceptCookies').onclick = function() {
    document.cookie = "cookieConsent=true; path=/;"; // Set cookie consent
    document.getElementById('cookieConsent').style.display = 'none'; // Hide the prompt
};

// Initialize credits display on page load
updateCreditsDisplay();
