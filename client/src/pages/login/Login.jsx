import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    //Email and password should be required.

    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!password) {
      alert('Password is required');
      return;
    }
    // Password should be longer than 6 letters.

    if (password.length < 6) {
      alert('Password should be longer than 6 characters');
      return;
    }

    // TODO: change it to md5 or bcrypt to hash the password. (for security)

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          autoFocus
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
