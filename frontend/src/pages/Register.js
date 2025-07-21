import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        margin: 0;
        font-family: 'Poppins', 'Arial', sans-serif; /* Updated to Poppins for elegance */
      }

      .register-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); /* Subtle gradient to match Login page */
        position: relative;
        overflow: hidden;
        animation: fadeIn 1.5s ease-in-out; /* Fade-in animation */
      }

      .register-box {
        width: 340px; /* Slightly wider to match Login page */
        padding: 30px; /* Increased padding for a more spacious look */
        border-radius: 12px; /* Softer border radius */
        border: 1px solid #e0e0e0;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Deeper shadow for a polished look */
        background-color: white;
        text-align: center;
        animation: slideIn 1s ease-out; /* Slide-in animation for the form */
      }

      .register-box h2 {
        font-size: 24px; /* Slightly larger for impact */
        margin-bottom: 25px; /* Increased margin for better spacing */
        font-weight: 700; /* Bolder to match Welcome page */
        color: #000;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for readability */
        animation: slideIn 1s ease-out; /* Slide-in animation */
      }

      .register-box input {
        width: 100%;
        padding: 14px; /* Increased padding for better usability */
        margin: 12px 0; /* Adjusted spacing */
        border: 1px solid #e0e0e0;
        border-radius: 8px; /* Softer border radius */
        font-size: 15px; /* Slightly larger for readability */
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Enhanced shadow */
        background-color: #fff;
        box-sizing: border-box;
        transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transitions */
        animation: slideIn 1.2s ease-out 0.2s; /* Delayed slide-in */
        animation-fill-mode: backwards;
      }

      .register-box input:focus {
        border-color: #007bff;
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3); /* Deeper blue-tinted shadow on focus */
        transform: translateY(-2px); /* Slight lift on focus */
        outline: none;
      }

      .register-box input::placeholder {
        color: #777; /* Slightly darker placeholder color for readability */
      }

      .register-box button {
        width: 100%;
        padding: 16px; /* Increased padding for a taller button */
        margin: 15px 0; /* Kept the margin for spacing */
        font-size: 16px;
        font-weight: 600; /* Bolder to match Welcome page */
        color: white;
        background: linear-gradient(135deg, #4a90e2, #007bff); /* Gradient to match other pages */
        border: none;
        border-radius: 50px; /* More rounded to match Welcome page buttons */
        cursor: pointer;
        box-shadow: 0 6px 15px rgba(0, 123, 255, 0.4); /* Deeper shadow */
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease; /* Smooth transitions */
        animation: slideIn 1.4s ease-out 0.4s; /* Delayed slide-in */
        animation-fill-mode: backwards;
      }

      .register-box button:hover {
        background: linear-gradient(135deg, #3a80d2, #0056b3); /* Darker gradient on hover */
        transform: translateY(-2px); /* Slight lift on hover */
        box-shadow: 0 8px 20px rgba(0, 123, 255, 0.5); /* Enhanced shadow on hover */
      }

      .register-box button:disabled {
        background: #ccc;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
      }

      .register-footer {
        margin-top: 20px; /* Increased margin for better spacing */
        font-size: 14px;
        animation: slideIn 1.6s ease-out 0.6s; /* Delayed slide-in */
        animation-fill-mode: backwards;
      }

      .register-footer span {
        color: #ff0000;
      }

      .register-footer a {
        color: #007bff;
        text-decoration: underline;
        margin-left: 4px;
        transition: color 0.3s ease;
      }

      .register-footer a:hover {
        color: #0056b3;
      }

      .error-message {
        color: red;
        margin: 10px 0;
        font-size: 13px;
        font-weight: 500;
        animation: slideIn 1.3s ease-out 0.3s; /* Delayed slide-in for error message */
        animation-fill-mode: backwards;
      }

      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }

      @keyframes slideIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered successfully. Go login!');
    } catch (err) {
      setError(err.response?.data?.error || 'Error registering');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            disabled={!form.username || !form.email || !form.password}
          >
            Register
          </button>
        </form>
        <div className="register-footer">
          <p>
            <span>Already have an account?</span>
            <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;