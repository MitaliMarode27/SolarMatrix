// GetQuote.jsx
import  { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  projectType: "Residential",
  systemSize: "",
  preferredContact: "",
  message: "",
  file: null,
  agree: false,
};

const GetQuote = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.phone) e.phone = "Phone is required.";
    else if (!/^\+?\d{7,15}$/.test(form.phone.replace(/\s+/g, "")))
      e.phone = "Enter a valid phone number.";
    if (!form.location.trim()) e.location = "Location is required.";
    if (!form.projectType) e.projectType = "Select project type.";
    if (form.systemSize && isNaN(Number(form.systemSize)))
      e.systemSize = "System size must be a number (kW).";
    if (!form.preferredContact) e.preferredContact = "Select preferred contact time.";
    if (!form.agree) e.agree = "Please confirm we can contact you.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") setForm((s) => ({ ...s, [name]: checked }));
    else if (type === "file") setForm((s) => ({ ...s, [name]: files[0] || null }));
    else setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors({});
    setSuccessMessage("");
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setSuccessMessage("✅ Thanks! Your request has been submitted. Our team will contact you soon.");
      setForm(initialForm);
    } catch {
      setErrors({ submit: "❌ Failed to send request. Try again." });
    } finally {
      setSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        minHeight: "100vh",
        width:"100vw", position:"absolute", left:0, top:"60px",
        paddingTop:"100px",
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left: Form */}
          <div className="col-lg-7">
            <div className="bg-white p-4 rounded shadow-lg h-100">
              <h2 className="fw-bold text-primary mb-2">Get a Free Quote</h2>
              <p className="text-muted mb-4">Fill the form below and we’ll get back within 24 hours.</p>

              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}

              <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Email *"
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>

                  <div className="col-md-6">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Phone *"
                    />
                    <div className="invalid-feedback">{errors.phone}</div>
                  </div>

                  <div className="col-md-6">
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className={`form-control ${errors.location ? "is-invalid" : ""}`}
                      placeholder="Location *"
                    />
                    <div className="invalid-feedback">{errors.location}</div>
                  </div>

                  <div className="col-md-4">
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`form-select ${errors.projectType ? "is-invalid" : ""}`}
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Agricultural</option>
                      <option>Government / Community</option>
                    </select>
                    <div className="invalid-feedback">{errors.projectType}</div>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="systemSize"
                      value={form.systemSize}
                      onChange={handleChange}
                      className={`form-control ${errors.systemSize ? "is-invalid" : ""}`}
                      placeholder="System Size (kW)"
                    />
                    <div className="invalid-feedback">{errors.systemSize}</div>
                  </div>

                  <div className="col-md-4">
                    <select
                      name="preferredContact"
                      value={form.preferredContact}
                      onChange={handleChange}
                      className={`form-select ${errors.preferredContact ? "is-invalid" : ""}`}
                    >
                      <option value="">Preferred Contact Time *</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                    <div className="invalid-feedback">{errors.preferredContact}</div>
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Project Details (roof type, monthly bill, etc.)"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      name="file"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <small className="text-muted">Upload photo or document (optional)</small>
                  </div>

                  <div className="col-md-6 d-flex align-items-center">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${errors.agree ? "is-invalid" : ""}`}
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">I agree to be contacted *</label>
                      <div className="invalid-feedback">{errors.agree}</div>
                    </div>
                  </div>

                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                      {submitting ? "Submitting..." : "Request Quote"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Quick Contact Info */}
          <div className="col-lg-5">
            <div className="bg-dark text-white p-4 rounded shadow-lg h-100 d-flex flex-column justify-content-center">
              <h4 className="fw-bold mb-3">Quick Contact</h4>
              <p><FaPhoneAlt className="me-2" /> +91 98765 43210</p>
              <p><FaEnvelope className="me-2" /> info@skyvoltsolar.com</p>
              <p><FaMapMarkerAlt className="me-2" /> Nagpur, Maharashtra</p>
              <hr className="border-light" />
              <p>💡 Prefer a call? Reach us Mon–Sat (9am–6pm).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
