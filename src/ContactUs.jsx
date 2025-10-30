// ContactUs.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div style={{ width:"100vw", position:"absolute", left:0, top:"60px"}}>
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #004e92, #000428, #ffb347)",
        }}
      >

        <div className="container">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead">We’re here to help you switch to solar energy!</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-5" style={{ backgroundColor: " #d8dcdcff" }}>
        <div className="container text-center text-dark">
          <div className="row g-4">
            <div className="col-md-4">
              <FaPhoneAlt size={30} className="mb-3 text-dark" />
              <h5 >Call Us</h5>
              <p >+91 98765 43210</p>
            </div>
            <div className="col-md-4">
              <FaEnvelope size={30} className="mb-3 text-dark" />
              <h5 >Email</h5>
              <p>info@skyvoltsolar.com</p>
            </div>
            <div className="col-md-4">
              <FaMapMarkerAlt size={30} className="mb-3 text-dark" />
              <h5>Visit Us</h5>
              <p>Nagpur, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, #004e92, #000428, #ffb347)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  <h3 className="fw-bold text-center mb-4">Send Us a Message</h3>
                  {submitted && (
                    <div className="alert alert-success">
                      Thanks! Your message has been sent successfully.
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Your Message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-warning px-5 fw-bold">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5">
        <div className="container">
          <h4 className="fw-bold text-center mb-4">Find Us on the Map</h4>
          <div className="ratio ratio-21x9 shadow-lg rounded-3">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.65500333314!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07e9f23d19b%3A0x5b21d67a2ad5a7c5!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
       <footer
        style={{
          background: "linear-gradient(135deg, #2c5364, #0f2027)",
          color: "white",
        }}
        className="text-center py-3"
      >
        <p>© 2025 Solar Installation Company | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContactUs;

