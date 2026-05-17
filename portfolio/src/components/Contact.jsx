// Contact.jsx - The contact section
// Has a simple form + direct contact info
// The form uses useState to manage input values (a great example of React state!)

import React, { useState } from 'react'

function Contact() {
  // formData stores what the user has typed in the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // sent tracks whether the form has been submitted
  const [sent, setSent] = useState(false)

  // This function runs whenever the user types in any input/textarea
  // "e.target.name" figures out which field changed (name, email, or message)
  const handleChange = (e) => {
    setFormData({
      ...formData,             // keep all existing values
      [e.target.name]: e.target.value,  // update just the changed field
    })
  }

  // This runs when the user clicks "Send Message"
  const handleSubmit = (e) => {
    e.preventDefault() // prevents page from reloading

    // For a real form, you'd send this to a backend or service like EmailJS
    // For now, we just show a "Thank you" message
    console.log('Form submitted:', formData)
    setSent(true)

    // Reset the form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">

        <h2 className="section__title">Get In Touch</h2>
        <p className="section__subtitle">
          Open to internship opportunities and collaborations
        </p>

        <div className="contact__grid">

          {/* Left: contact info */}
          <div className="contact__info">
            <h3 className="contact__info-heading">Let's connect!</h3>
            <p className="contact__info-text">
              I'm currently looking for frontend internship opportunities. Whether
              you have a question, a project idea, or just want to say hi — feel free
              to reach out!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span>📧</span>
                <a href="pawanverma21145296@gmail.com" className="contact__detail-link">
                   pawanverma21145296@gmail.com
                </a>
              </div>
              <div className="contact__detail">
                <span>🐙</span>
                <a
                  href="https://github.com/pawan6398"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__detail-link"
                >
                  github.com/pawan6398
                </a>
              </div>
              <div className="contact__detail">
                <span>💼</span>
                <a
                  href="https://www.linkedin.com/in/pawan-verma-63a283376/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__detail-link"
                >
                  linkedin.com/in/pawan-verma-63a283376/
                </a>
              </div>
              <div className="contact__detail">
                <span>📍</span>
                <span>Noida, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="contact__form-wrap">
            {sent ? (
              // Show this message after form is submitted
              <div className="contact__success">
                <span style={{ fontSize: '2.5rem' }}>🎉</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn--primary" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              // The actual form
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="pawan verma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="pawan@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi Pawan, I'd like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input form-input--textarea"
                  />
                </div>

                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
