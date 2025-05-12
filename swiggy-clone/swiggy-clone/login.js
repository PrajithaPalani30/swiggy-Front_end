document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (email === '' || password === '') {
      alert('Please fill in both fields');
    } else {
      // Simulating a login process
      alert(`Welcome, ${email}! You are logged in.`);
      // Redirect to home page or dashboard (for example)
      window.location.href = 'index.html';  // Change this to your homepage URL
    }
  });
  