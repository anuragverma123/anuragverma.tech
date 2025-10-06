import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const payload = {
      access_key: "e084c9a0-1344-4dc3-aa1e-e0a4eeea09cc",
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: "📧",
      text: "anuragverma25840@gmail.com",
       link: null,
      delay: "0.1s"
    },
    {
      icon: "📱",
      text: "+91 7806008073",
        link: null,
      
      delay: "0.2s"
    },
    {
      icon: "📍",
      text: "Madhya Pradesh, Bhopal, India",
      link: null,
      delay: "0.3s"
    },
    {
      icon: "💻",
      text: "GitHub",
      link: "https://github.com/anuragverma123",
      delay: "0.4s"
    },
    {
      icon: "💼",
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/anurag-verma-661052296",
      delay: "0.5s"
    }
  ];

  return (
    <div id="contact" className="contact-container">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <div className="title-underline"></div>
          <p className="contact-subtitle">Let's create something amazing together</p>
        </div>

        <div className="contact-section">
          <div className="left-section">
            <div className="left-content">
              <h2 className="left-title">Let's Talk</h2>
              <p className="left-description">
                I am currently open to new opportunities and collaborations. Whether
                you have a project in mind, a question, or just want to say hello,
                feel free to reach out. I look forward to connecting with you!
              </p>

              <div className="details-container">
                {contactDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="detail-item"
                    style={{ animationDelay: detail.delay }}
                  >
                    <div className="icon-wrapper">
                      <span className="detail-icon">{detail.icon}</span>
                    </div>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        {detail.text}
                      </a>
                    ) : (
                      <span className="detail-text">{detail.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="form-group">
              <label
                className={`form-label ${focusedField === 'name' ? 'label-focused' : ''}`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                placeholder="Enter your name"
                className={`form-input ${focusedField === 'name' ? 'input-focused' : ''}`}
              />
            </div>

            <div className="form-group">
              <label
                className={`form-label ${focusedField === 'email' ? 'label-focused' : ''}`}
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                placeholder="Enter your email"
                className={`form-input ${focusedField === 'email' ? 'input-focused' : ''}`}
              />
            </div>

            <div className="form-group">
              <label
                className={`form-label ${focusedField === 'message' ? 'label-focused' : ''}`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                placeholder="Write your message here..."
                className={`form-input form-textarea ${focusedField === 'message' ? 'input-focused' : ''}`}
              ></textarea>
            </div>

            <button
              onClick={onSubmit}
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? 'submit-button-disabled' : ''}`}
            >
              {isSubmitting ? (
                <span className="button-content">
                  <span className="spinner"></span>
                  Sending...
                </span>
              ) : (
                <span className="button-content">
                  Send Message
                  <span className="arrow">→</span>
                </span>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success-message">
                ✓ Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="status-message error-message">
                ✗ Failed to send. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;