import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Subtle gradient for a modern look
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Poppins', 'Arial', sans-serif", // Elegant font to match Welcome page
    padding: "0 20px",
    animation: "fadeIn 1.5s ease-in-out", // Fade-in animation
  },
  formContainer: {
    background: '#fff',
    padding: '30px', // Increased padding for a more spacious look
    borderRadius: '12px', // Softer border radius
    border: '1px solid #e0e0e0',
    width: '340px', // Slightly wider for better balance
    textAlign: 'center',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)', // Deeper shadow for a polished look
    animation: "slideIn 1s ease-out", // Slide-in animation for the form
  },
  header: {
    color: '#000',
    marginBottom: '25px', // Increased margin for better spacing
    fontSize: '24px', // Slightly larger for impact
    fontWeight: '700', // Bolder to match Welcome page
    fontFamily: "'Poppins', 'Arial', sans-serif",
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for readability
    animation: "slideIn 1s ease-out", // Slide-in animation
  },
  input: {
    width: '100%',
    padding: '14px', // Increased padding for better usability
    margin: '12px 0', // Slightly increased margin for better spacing
    border: '1px solid #e0e0e0',
    borderRadius: '8px', // Softer border radius
    fontSize: '15px', // Slightly larger for readability
    fontFamily: "'Poppins', 'Arial', sans-serif",
    boxSizing: 'border-box',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)', // Enhanced shadow
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease', // Smooth transitions
    animation: "slideIn 1.2s ease-out 0.2s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  inputFocus: {
    borderColor: '#007bff',
    boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)', // Deeper blue-tinted shadow on focus
    transform: 'translateY(-2px)', // Slight lift on focus
  },
  inputPlaceholder: {
    color: '#777', // Slightly darker placeholder color for readability
  },
  button: {
    background: 'linear-gradient(135deg, #4a90e2, #007bff)', // Gradient to match Welcome page buttons
    color: 'white',
    padding: '16px', // Increased padding for a taller, more prominent button
    border: 'none',
    borderRadius: '50px', // More rounded to match Welcome page buttons
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    fontWeight: '600', // Bolder to match Welcome page
    fontFamily: "'Poppins', 'Arial', sans-serif",
    boxShadow: '0 6px 15px rgba(0, 123, 255, 0.4)', // Deeper shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease', // Smooth transitions
    animation: "slideIn 1.4s ease-out 0.4s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  buttonHover: {
    background: 'linear-gradient(135deg, #3a80d2, #0056b3)', // Darker gradient on hover
    transform: 'translateY(-2px)', // Slight lift on hover
    boxShadow: '0 8px 20px rgba(0, 123, 255, 0.5)', // Enhanced shadow on hover
  },
  footer: {
    marginTop: '20px', // Increased margin for better spacing
    fontSize: '14px',
    color: '#ff0000',
    fontFamily: "'Poppins', 'Arial', sans-serif",
    animation: "slideIn 1.6s ease-out 0.6s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
    fontFamily: "'Poppins', 'Arial', sans-serif",
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#0056b3',
  },
};

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.user.username);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={styles.input}
            onFocus={(e) => {
              e.target.style.borderColor = styles.inputFocus.borderColor;
              e.target.style.boxShadow = styles.inputFocus.boxShadow;
              e.target.style.transform = styles.inputFocus.transform;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.boxShadow = styles.input.boxShadow;
              e.target.style.transform = 'none';
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={styles.input}
            onFocus={(e) => {
              e.target.style.borderColor = styles.inputFocus.borderColor;
              e.target.style.boxShadow = styles.inputFocus.boxShadow;
              e.target.style.transform = styles.inputFocus.transform;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.boxShadow = styles.input.boxShadow;
              e.target.style.transform = 'none';
            }}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.currentTarget.style.background = styles.buttonHover.background;
              e.currentTarget.style.transform = styles.buttonHover.transform;
              e.currentTarget.style.boxShadow = styles.buttonHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = styles.button.background;
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = styles.button.boxShadow;
            }}
          >
            Login
          </button>
        </form>
        <div style={styles.footer}>
          <p>
            Don't have an account?{' '}
            <a
              href="/register"
              style={styles.link}
              onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = styles.link.color)}
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Add keyframes for animations
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes slideIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

export default Login;