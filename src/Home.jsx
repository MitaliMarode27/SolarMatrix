import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // 👈 Add this CSS file for animations
import commercial from "./projectimages/istockphoto-2234508993-612x612-removebg-preview.png";
import residential from "./projectimages/residential-removebg-preview.png";
import maintainance from "./projectimages/maintainImg-Photoroom.png";
import consulation from "./projectimages/consulatation-removebg-preview.png";
import about from "./projectimages/aboutHome-removebg-preview.png";
import { NavLink } from "react-router-dom";
import solarMainImg from "./projectimages/solarHeroSectionImg.jpg";
import cleanEnergy from "./projectimages/CleanEnergy.jpg";
import saveMoney from "./projectimages/SaveMoney.jpg";
import reliablePower from "./projectimages/ReliablePower.jpg";
import project1 from "./projectimages/homeProject1.jpg";
import project2 from "./projectimages/homeProject2.jpg";
import project3 from "./projectimages/homeProject3.jpg";
import client1 from "./projectimages/homeClient1.jpg";
import client2 from "./projectimages/homeClient2.jpg";
import client3 from "./projectimages/homeClient3.jpg";


const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
        width: "100vw",
        position: "absolute",
        left: 0,
        top: "60px",
      }}
    >
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section fade-in"
        style={{
         backgroundImage: `linear-gradient(rgba(15,32,39,0.6), rgba(44,83,100,0.6)), url(${solarMainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="zoom-in">
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            Switch to Solar Energy Today
          </h1>
          <p style={{ fontSize: "1.3rem", margin: "20px 0" }}>
            Save money, save the planet, and power your future with clean energy
          </p>
          <NavLink to="/getquote" className="btn btn-warning btn-lg m-2 btn-animate">
            Get Free Quote
          </NavLink>
          <button className="btn btn-outline-light btn-lg m-2 btn-animate">
            Learn More
          </button>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="mt-3 container-fluid py-2 d-flex justify-content-center align-items-center column-gap-4 slide-up"
        style={{ background: "linear-gradient(135deg, #2c5364, #0f2027)" }}
      >
        <div style={{ width: "40%" }}>
          <h2 className="mb-4 text-light">About Us</h2>
          <p
            className="text-center text-light"
            style={{ fontSize: "20px", fontWeight: "normal" }}
          >
            We are a leading solar installation company dedicated to making
            renewable energy accessible and affordable. With years of
            experience, we provide solar solutions for homes, businesses, and
            industries.
          </p>
          <NavLink to="/about" className="btn btn-outline-light px-5 py-2 my-3 btn-animate">
            Learn More
          </NavLink>
        </div>
        <img className="float-in" style={{ width: "500px", height: "500px" }} src={about} alt="" />
      </section>

      {/* Why Choose Us */}
      <section className="container-fluid py-5 fade-in">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          {[
            {
              src: cleanEnergy,
              title: "🌞 Clean Energy",
              text: "Switch to renewable and reduce your carbon footprint.",
            },
            {
              src: saveMoney,
              title: "💰 Save Money",
              text: "Cut down electricity bills with efficient solar panels.",
            },
            {
              src: reliablePower,
              title: "⚡ Reliable Power",
              text: "Enjoy uninterrupted energy supply for your home or business.",
            },
          ].map((item, i) => (
            <div className="col-md-4 hover-card" key={i}>
              <img
                className="img-fluid rounded-circle"
                style={{ height: "200px", width: "200px" }}
                src={item.src}
                alt=""
              />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          background: "linear-gradient(135deg, #2c5364, #0f2027)",
          color: "white",
        }}
        className="py-5 slide-up"
      >
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row text-center">
            {[
              { src: residential, title: "🏠 Residential Installation", text: "Power your home with sustainable energy solutions." },
              { src: commercial, title: "🏢 Commercial Installation", text: "Solar solutions designed for businesses and industries." },
              { src: maintainance, title: "🔧 Maintenance", text: "Keep your solar system running at peak performance." },
              { src: consulation, title: "📊 Consultation", text: "Expert advice and customized solar planning." },
            ].map((item, i) => (
              <div className="col-md-3 service-card" key={i}>
                <img
                  className="img-fluid py-2"
                  style={{ height: "300px", width: "300px" }}
                  src={item.src}
                  alt=""
                />
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container-fluid py-5 fade-in">
        <h2 className="text-center mb-4">Our Recent Projects</h2>
        <div className="row">
         {[
  { src: project1 },
  { src: project2 },
  { src: project3 },
].map(({ src }, i) => (
  <div className="col-md-4 mb-3 zoom-on-hover" key={i}>
    <img src={src} alt={`Project ${i + 1}`} className="img-fluid rounded shadow" />
  </div>
))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container-fluid py-5 slide-up">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row">
          {[
            {
              src: client1,
              name: "Rahul Sharma",
              text: "Best solar service ever! Saved 40% on my bills.",
            },
            {
              src: client2,
              name: "Priya Verma",
              text: "Professional team and quick installation.",
            },
            {
              src: client3,
              name: "Arjun Patel",
              text: "Highly recommend for businesses and homes.",
            },
          ].map((t, i) => (
            <div className="col-md-4 text-center testimonial-card" key={i}>
              <img
                className="img-fluid rounded-circle py-2"
                style={{ height: "250px", width: "250px" }}
                src={t.src}
                alt={t.name}
              />
              <p>"{t.text}"</p>
              <h6>- {t.name}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5 fade-in"
        style={{
          background: "linear-gradient(135deg, #0f2027, #2c5364)",
          color: "white",
        }}
      >
        <div className="container-fluid">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row">
            <div className="col-md-6 slide-up">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="btn btn-warning btn-lg w-100 btn-animate">Send Message</button>
              </form>
            </div>
            <div className="col-md-6 fade-in">
              <h5>📍 Our Office</h5>
              <p>123 Solar Street, Nagpur, Maharashtra</p>
              <h5>📞 Phone</h5>
              <p>+91 98765 43210</p>
              <h5>📧 Email</h5>
              <p>info@solarenergy.com</p>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6419930978196!2d79.088154!3d21.145800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0b9a291e5df%3A0xf66b8f02c6f2df12!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1674892468123!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default HomePage;
