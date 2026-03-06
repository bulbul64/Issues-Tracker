const loginBtn = document.getElementById('login-btn');

// Login Button Click Event
loginBtn.addEventListener('click', () => {
  // Get input elements
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  // Get user input values
  const user = {
    username: username.value,
    password: password.value,
  };

  // Check if username and password are empty
  if (!user.username || !user.password) {
    alert('Please enter username and password');
    return;
  }

  // Check if username and password are valid
  if (user.username.toLowerCase() === 'admin' && user.password === 'admin123') {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    alert('Invalid Username or Password');
    return;
  }

  // Redirect to dashboard
  window.location.href = 'dashboard.html';
});
