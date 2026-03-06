

// Get DOM elements
const loginBtn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');

const validateLogin = (username, password) => {
  const user = {
    username: username.trim(),
    password: password.trim(),
  };

  if (!user.username || !user.password) {
    alert('Please enter username and password');
    return false;
  }

  if (user.username.toLowerCase() !== 'admin' || user.password !== 'admin123') {
    alert('Invalid Username or Password');
    return false;
  }

  return true;
};

const handleLogin = () => {
  const userInput = username.value;
  const passInput = password.value;

  if (validateLogin(userInput, passInput)) {
    window.location.href = 'dashboard.html';
  }
};

loginBtn.addEventListener('click', handleLogin);



// Old version of code below


// // Login Button Click Event
// loginBtn.addEventListener('click', () => {

//   // Get user input values
//   const user = {
//     username: username.value.trim(),
//     password: password.value.trim(),
//   };

//   // Check if username and password are empty
//   if (!user.username || !user.password) {
//     alert('Please enter username and password');
//     return;
//   }

//   // Check if username and password are valid
//   if (user.username.toLowerCase() === 'admin' && user.password === 'admin123') {
//     localStorage.setItem('user', JSON.stringify(user));
//   } else {
//     alert('Invalid Username or Password');
//     return;
//   }

//   // Redirect to dashboard
//   window.location.href = 'dashboard.html';
// });
