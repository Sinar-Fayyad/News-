// Show/Hide sign up

function showSignup() {
    document.getElementById('sign').classList.remove('hidden');
    document.getElementById('log').classList.add('hidden');
}

function showLogin() {
    document.getElementById('log').classList.remove('hidden');
    document.getElementById('sign').classList.add('hidden');
}

// Remember Me functionality
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

