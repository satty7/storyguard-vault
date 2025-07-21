import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to StoryGuard</h1>
      <p style={styles.subtitle}>Your safe space to publish stories and shine.</p>
      
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={{ ...styles.button, ...styles.signup }} onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
    color: "white",
    textAlign: "center",
    fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Elegant font
    padding: "0 20px",
    animation: "fadeIn 1.5s ease-in-out", // Fade-in animation for the container
  },
  title: {
    fontSize: "3.5rem", // Slightly larger for impact
    fontWeight: "700",
    marginBottom: "0.75rem",
    textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Subtle shadow for readability
    animation: "slideIn 1s ease-out", // Slide-in animation
  },
  subtitle: {
    fontSize: "1.5rem", // Slightly larger for better readability
    fontWeight: "300", // Lighter weight for contrast with the title
    marginBottom: "2.5rem",
    opacity: 0.9,
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
    animation: "slideIn 1.2s ease-out 0.2s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  buttonGroup: {
    display: "flex",
    gap: "1.5rem",
    animation: "slideIn 1.4s ease-out 0.4s", // Delayed slide-in for buttons
    animationFillMode: "backwards",
  },
  button: {
    padding: "0.9rem 2.5rem", // Slightly larger padding for a more prominent look
    fontSize: "1.2rem",
    fontWeight: "600",
    borderRadius: "50px", // More rounded for a modern look
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #ff7f50, #ff5733)", // Gradient for depth
    color: "#fff",
    boxShadow: "0 6px 15px rgba(255, 127, 80, 0.4)", // Matching shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
  },
  signup: {
    background: "linear-gradient(135deg, #4CAF50, #388E3C)", // Gradient for Sign Up button
    boxShadow: "0 6px 15px rgba(76, 175, 80, 0.4)", // Matching shadow
  },
};

// Add keyframes for animations directly in the component
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
  button:hover {
    transform: scale(1.05); /* Slight scale-up on hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Deeper shadow on hover */
  }
`;
document.head.appendChild(styleSheet);

export default WelcomePage;