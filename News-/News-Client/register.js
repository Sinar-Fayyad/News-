// Show/Hide sign up

function showSignup() {
    document.getElementById('sign').classList.remove('hidden');
    document.getElementById('log').classList.add('hidden');
}

function showLogin() {
    document.getElementById('log').classList.remove('hidden');
    document.getElementById('sign').classList.add('hidden');
}

// Remember Me functionality for login
function saveCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('pwd').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
}

// Register user function
const token = localStorage.getItem("token");

async function registerUser() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const username = name + ' ' + lastName;
    const email = document.getElementById('newUsername').value;
    const password = document.getElementById('s_pwd').value;

    try {
        const res = await axios.post("http://localhost:8000/api/v0.1/register", {
            username: username,
            email: email,
            password: password,
        },{
            headers:
            {
                Authorization: `bearer ${token}`
            }
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

