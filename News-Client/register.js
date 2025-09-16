// Show/Hide sign up

function showSignup() {
    document.getElementById('sign').classList.remove('hidden');
    document.getElementById('log').classList.add('hidden');
}

function showLogin() {
    document.getElementById('log').classList.remove('hidden');
    document.getElementById('sign').classList.add('hidden');
}

// Login function
async function loginUser() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('pwd').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    try {
        const res = await axios.post("http://localhost:8000/v0.1/login", {
            email: email,
            password: password,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const token = res.data.token;
        localStorage.setItem('token', token);
        if (rememberMe) {
            localStorage.setItem('username', email);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
        alert('Login successful!');
        window.location.href = 'index.html';
    } catch (error) {
        alert('Login failed: ' + (error.response ? error.response.data.message : error.message));
    }
}

// Remember Me functionality for login (now handled in loginUser)
function saveCredentials() {
    // This can be removed or kept for compatibility, but login is now handled by loginUser
}

// Register user function
const token = localStorage.getItem("token");

async function registerUser() {
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('newUsername').value;
    const password = document.getElementById('s_pwd').value;

    try {
        const res = await axios.post("http://localhost:8000/v0.1/register", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        });
        alert('Registration successful!');
        showLogin();
    } catch (error) {
        alert('Registration failed: ' + (error.response ? error.response.data.message : error.message));
    }
}

function loadCredentials() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username) {
        document.getElementById('username').value = username;
    }
    if (password) {
        document.getElementById('pwd').value = password;
        document.getElementById('rememberMe').checked = true;
    }
}

window.onload = loadCredentials;
