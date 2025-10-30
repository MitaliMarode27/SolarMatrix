import { FaQuoteLeft, FaStar } from "react-icons/fa";
import client1 from "./projectimages/client1.jpg";
import client2 from "./projectimages/client2.jpg"
import client3 from "./projectimages/client3.jpg"
import client4 from "./projectimages/client4.jpg"
import clientTrust from "./projectimages/clientTrust-removebg-preview.png";
import { NavLink } from "react-router-dom";
import customer1 from "./projectimages/homeClient1.jpg";
import customer2 from "./projectimages/homeClient2.jpg";


const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      feedback:
        "SkyVolt Solar installed our rooftop panels. The process was smooth, and my electricity bill is 70% less now!",
      rating: 5,
      img:customer1
    },
    {
      name: "Priya Verma",
      feedback:
        "Professional team and great service. They explained every step clearly before installation.",
      rating: 4,
        img:customer2
    },
    {
      name: "Amit Singh",
      feedback:
        "Excellent after-sales support. The team is always available for any queries.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      feedback:
        "Happy with my investment in solar energy. SkyVolt Solar made it stress-free!",
      rating: 5,
    },
    {
      name: "Vikram Patil",
      feedback:
        "Trusted solar partner with transparent pricing. Highly recommend them.",
      rating: 4,
    },
  ];

  return (
    <div style={{ width:"100vw", position:"absolute", left:0, top:"60px"}}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1 className="fw-bold">What Our Clients Say</h1>
        <p className="lead">
          Real experiences from our happy solar customers.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="container my-5">
        <div className=" row">
          {testimonials.map((t, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card shadow-lg border-0 h-100"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body">
                   <img
              src={
                t.img
                  ? t.img
                  : [client1, client2, client3, client4][index % 4]
              }
              alt={t.name}
              className="mb-3"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid #4e54c8",
              }}
            /> 
           
                  <p>  "{t.feedback}"</p>
                  <div className=" ms-4 mt-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} color="#ffc107" />
                    ))}
                  </div>
                  <h6 className="mt-3 fw-bold">{t.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 className="fw-bold mb-3">Why Customers Trust Us</h2>
        <img style={{height:"200px", width:"250px" }} src={clientTrust} alt="" />
        <p className="lead mb-4">
          With 500+ installations, we bring clean energy and peace of mind.
        </p>
     <NavLink to="/getquote" className="btn btn-lg text-white" style={{ background: "#4e54c8" }}>Get a Free Quote</NavLink>
      </section>

      {/* Client Logos Section */}
      <section className="container text-center my-5">
        <h3 className="fw-bold mb-4">Our Trusted Clients & Partners</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-4 mb-3">
            <img src={client1} alt="Client 1" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4 mb-3">
            <img src={client2} alt="Client 2" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4 mb-3">
            <img src={client3} alt="Client 3" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4 mb-3">
            <img src={client4} alt="Client 4" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          background: "linear-gradient(135deg, #8f94fb, #4e54c8)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 className="fw-bold mb-3">Ready to Start Your Solar Journey?</h2>
        <NavLink to="/contactus" className="btn btn-lg btn-light"> Request Callback</NavLink>
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

export default Testimonials;
