import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  container: {
    fontFamily: "'Poppins', 'Arial', sans-serif", // Elegant font to match other pages
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Subtle gradient to match Login and Register
    margin: 0,
    padding: '30px',
    minHeight: '100vh',
    animation: "fadeIn 1.5s ease-in-out", // Fade-in animation
  },
  header: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px', // Increased margin for better spacing
    fontSize: '28px', // Larger for impact
    fontWeight: '700', // Bolder to match other pages
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for readability
    animation: "slideIn 1s ease-out", // Slide-in animation
  },
  form: {
    background: '#fff',
    padding: '25px',
    borderRadius: '12px', // Softer border radius
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)', // Deeper shadow for a polished look
    margin: '0 auto 30px auto', // Centered with margin below
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '600px', // Match story box width for alignment
    animation: "slideIn 1.2s ease-out 0.2s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  formTitle: {
    fontSize: '22px', // Slightly larger for impact
    fontWeight: '700', // Bolder to match other pages
    textAlign: 'center',
    marginBottom: '15px',
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    animation: "slideIn 1.2s ease-out 0.2s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  input: {
    width: '100%',
    padding: '14px', // Increased padding for better usability
    border: '1px solid #e0e0e0',
    borderRadius: '8px', // Softer border radius
    fontSize: '15px', // Slightly larger for readability
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)', // Enhanced shadow
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease', // Smooth transitions
    boxSizing: 'border-box', // Ensure padding doesn't affect width
    animation: "slideIn 1.4s ease-out 0.4s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  textarea: {
    width: '100%',
    padding: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '15px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
    boxSizing: 'border-box',
    height: '120px', // Slightly taller for better usability
    resize: 'vertical', // Allow vertical resizing only
    animation: "slideIn 1.4s ease-out 0.4s",
    animationFillMode: "backwards",
  },
  inputHover: {
    borderColor: '#28a745',
    boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)', // Green-tinted shadow on focus
    transform: 'translateY(-2px)', // Slight lift on focus
  },
  inputPlaceholder: {
    color: '#777', // Slightly darker placeholder color for readability
  },
  button: {
    background: 'linear-gradient(135deg, #28a745, #218838)', // Gradient for a softer look
    color: 'white',
    padding: '16px', // Increased padding for a taller button
    border: 'none',
    borderRadius: '50px', // More rounded to match other pages
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600', // Bolder to match other pages
    boxShadow: '0 6px 15px rgba(40, 167, 69, 0.4)', // Matching shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease', // Smooth transitions
    animation: "slideIn 1.6s ease-out 0.6s", // Delayed slide-in
    animationFillMode: "backwards",
  },
  buttonHover: {
    background: 'linear-gradient(135deg, #218838, #1e7e34)', // Darker gradient on hover
    transform: 'translateY(-2px)', // Slight lift on hover
    boxShadow: '0 8px 20px rgba(40, 167, 69, 0.5)', // Enhanced shadow on hover
  },
  deleteButton: {
    background: 'linear-gradient(135deg, #dc3545, #c82333)', // Gradient for delete button
    color: 'white',
    padding: '10px 20px', // Smaller padding for delete button
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(220, 53, 69, 0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
  },
  deleteButtonHover: {
    background: 'linear-gradient(135deg, #c82333, #bd2130)', // Darker gradient on hover
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(220, 53, 69, 0.5)',
  },
  storiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the story boxes
    gap: '20px', // Increased space between story boxes
    maxWidth: '600px', // Match form width for alignment
    margin: '0 auto', // Center the container
  },
  story: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)', // Deeper shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '100%', // Ensure it takes full width of the container
    maxWidth: '600px', // Match form width
    animation: "slideIn 1s ease-out", // Slide-in animation for each story
    animationFillMode: "backwards",
  },
  storyHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
  },
  title: {
    fontSize: '18px', // Slightly larger for better readability
    fontWeight: '700', // Bolder to match other pages
    marginBottom: '10px',
    color: '#333',
    wordBreak: 'break-word', // Allow long titles to wrap
    overflowWrap: 'break-word', // Ensure proper wrapping
  },
  content: {
    color: '#555',
    fontSize: '15px',
    lineHeight: '1.6', // Better readability
    margin: '10px 0',
    wordBreak: 'break-word', // Allow long content to wrap
    overflowWrap: 'break-word',
    display: 'block', // Remove ellipsis to allow full content
  },
  meta: {
    color: '#777',
    fontSize: '14px',
    margin: '5px 0',
  },
  hash: {
    color: '#007bff',
    fontSize: '14px',
    wordBreak: 'break-all', // Ensure blockchain hash wraps properly
    margin: '5px 0',
  },
  hr: {
    border: '1px solid #eee',
    margin: '15px 0',
  },
};

function Dashboard() {
  const [story, setStory] = useState({ title: '', content: '', timestamp: '' });
  const [allStories, setAllStories] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState({ title: false, content: false });

  const fetchStories = async () => {
    const res = await axios.get('http://localhost:5000/api/stories');
    setAllStories(res.data);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const author = localStorage.getItem('username');
    const timestamp = new Date().toLocaleString();
    const res = await axios.post('http://localhost:5000/api/stories/publish', { ...story, author, timestamp });
    alert('Story Published with Blockchain Hash: ' + res.data.story.blockchainHash);
    setStory({ title: '', content: '', timestamp: '' });
    fetchStories();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/stories/${id}`);
      fetchStories();
      alert('Story deleted successfully!');
    } catch (err) {
      alert('Failed to delete story');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome, {localStorage.getItem('username')}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3 style={styles.formTitle}>Create Your Own Story</h3>
        <input
          type="text"
          placeholder="Story Title"
          value={story.title}
          onChange={e => setStory({ ...story, title: e.target.value })}
          style={{
            ...styles.input,
            ...(isInputFocused.title ? styles.inputHover : {}),
          }}
          onFocus={() => setIsInputFocused({ ...isInputFocused, title: true })}
          onBlur={() => setIsInputFocused({ ...isInputFocused, title: false })}
        />
        <textarea
          placeholder="Write your story..."
          value={story.content}
          onChange={e => setStory({ ...story, content: e.target.value })}
          style={{
            ...styles.textarea,
            ...(isInputFocused.content ? styles.inputHover : {}),
          }}
          onFocus={() => setIsInputFocused({ ...isInputFocused, content: true })}
          onBlur={() => setIsInputFocused({ ...isInputFocused, content: false })}
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
          Publish Story
        </button>
      </form>

      <h3 style={styles.header}>All Stories:</h3>
      <div style={styles.storiesContainer}>
        {allStories.map((s, i) => (
          <div
            key={i}
            style={{
              ...styles.story,
              ...(hoveredIndex === i ? styles.storyHover : {}),
              animationDelay: `${i * 0.1}s`, // Staggered animation for each story
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h4 style={styles.title}>{s.title}</h4>
            <p style={styles.meta}><b>By:</b> {s.author}</p>
            <p style={styles.content}>{s.content}</p>
            <p style={styles.meta}><b>Published on:</b> {s.timestamp}</p>
            <p style={styles.hash}><b>Blockchain Hash:</b> {s.blockchainHash}</p>
            <hr style={styles.hr} />
            <button
              style={styles.deleteButton}
              onMouseOver={(e) => {
                e.currentTarget.style.background = styles.deleteButtonHover.background;
                e.currentTarget.style.transform = styles.deleteButtonHover.transform;
                e.currentTarget.style.boxShadow = styles.deleteButtonHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = styles.deleteButton.background;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.deleteButton.boxShadow;
              }}
              onClick={() => handleDelete(s._id)}
            >
              Delete
            </button>
          </div>
        ))}
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

export default Dashboard;