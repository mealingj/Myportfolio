import React from 'react';

const ContactForm = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <p>If you have any questions, feel free to reach out to me via email or connect with me on LinkedIn:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a href="mailto:mealingj600@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>
            mealingj600@gmail.com
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/mealingj" style={{ color: '#007bff', textDecoration: 'none' }}>
            LinkedIn
          </a>
        </li>
      </ul>
      <p>Looking forward to hearing from you!</p>
    </div>
  );
};

export default ContactForm;