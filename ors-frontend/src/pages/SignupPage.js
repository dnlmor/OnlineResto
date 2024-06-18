import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../services/auth';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signup({ username, email, password });
      console.log('Signed up user:', newUser);
      // Redirect or update state upon successful signup
    } catch (error) {
      console.error('Signup error:', error);
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="signup-page"> {/* Apply the 'signup-page' class */}
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Apply style to error message */}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
