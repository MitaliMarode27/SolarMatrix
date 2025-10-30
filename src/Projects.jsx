import rooftop from "./projectimages/rooftop.jpg";
import comercialPlant from "./projectimages/commericalPlant.jpg";
import solarPark from "./projectimages/SolarPark.jpg";
import smartCity from "./projectimages/smartCity.jpg";
import hospitalSolar from "./projectimages/hospitalSolar.jpg";
import project1 from "./projectimages/project1.jpg";
import project2 from "./projectimages/project2.jpg";
import project3 from "./projectimages/project3.jpg";
import project4 from "./projectimages/project4.jpg";
import solarCliectLogo from "./projectimages/solarClientLogo.jpg";
import MNRELogo from "./projectimages/MNRELogo.jpg";
import partners from "./projectimages/partners.jpeg";
import logo2 from "./projectimages/logo2.jpeg";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div style={{ background: "linear-gradient(135deg, #003366, #FFD700)", width:"100vw", position:"absolute", left:0, top:"60px" }}>
      {/* Page Header */}
      <section className="text-center text-white pt-5">
        <h1 className="fw-bold">Our Projects</h1>
        <p className="lead">Delivering reliable solar solutions across homes, businesses, and industries.</p>
      </section>
                         <hr className=' text-light w-50 mx-auto mb-2 ' />


      {/* 1. Featured Projects */}
      <section className="container py-5">
        <h2 className="text-center mb-4 display-6" style={{color:"whitesmoke"}}>Featured Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src={rooftop} className="card-img-top" alt="Residential Solar" />
              <div className="card-body">
                <h5 className="card-title">Residential Rooftop</h5>
                <p className="card-text">5kW system installed in Nagpur saving 7,200 units annually.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src={comercialPlant} className="card-img-top" alt="Commercial Solar" />
              <div className="card-body">
                <h5 className="card-title">Commercial Plant</h5>
                <p className="card-text">50kW system for a textile factory reducing energy bills by 65%.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0">
              <img src={solarPark} className="card-img-top" alt="Industrial Solar" />
              <div className="card-body">
                <h5 className="card-title">Industrial Solar Park</h5>
                <p className="card-text">1MW solar park powering sustainable operations for a large unit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ongoing Projects */}
      <section className="container py-5">
        <h2 className="text-center  mb-4 display-6" style={{color:"whitesmoke"}}>Ongoing Projects</h2>
          <hr className=' text-light w-50 mx-auto mb-5 ' />
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white rounded shadow-lg">
              <img style={{width:"580px", height:"300px",objectFit:"cover" }} src={smartCity} alt="" />
              <h5 className=" mt-3">Smart City Solar Lighting</h5>
              <p>Installing 200+ solar-powered streetlights across the city to improve sustainability and reduce costs.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white rounded shadow-lg">
              <img style={{width:"580px", height:"300px",objectFit:"cover" }} src={hospitalSolar} alt="" />
              <h5 className=" mt-3">Hospital Solar Integration</h5>
              <p>Providing uninterrupted power with a hybrid solar + battery system for a healthcare facility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Completed Projects Gallery */}
      <section className="container py-5">
        <h2 className="text-center mb-4 display-6" style={{color:"whitesmoke"}}>Completed Projects Gallery</h2>
           <hr className=' text-light w-50 mx-auto mb-5 ' />
        <div className="row">
          <div className="col-md-3 mb-3">
            <img style={{width:"300px", height:"250px"}} src={project1} alt="Project 1" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-3 mb-3">
            <img style={{width:"300px", height:"250px"}} src={project2} alt="Project 2" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-3 mb-3">
            <img style={{width:"300px", height:"250px"}} src={project3} alt="Project 3" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-3 mb-3">
            <img style={{width:"300px", height:"250px"}} src={project4} alt="Project 4" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>

      {/* 4. Impact & Achievements */}
      <section className="text-center py-5 text-white" style={{ background: "#002244" }}>
        <h2 className="display-6 mb-4 text-warning">Our Impact</h2>
          <hr className=' text-light w-50 mx-auto mb-5 ' />
        <div className="row container mx-auto mt-3">
          <div className="col-md-4">
            <h3 className="fw-bold text-warning">100+</h3>
            <p>Projects Installed</p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold text-warning">10,000+ tons</h3>
            <p>CO₂ Reduced</p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold text-warning">₹5 Cr+</h3>
            <p>Customer Savings</p>
          </div>
        </div>
      </section>

      {/* 5. Clientele / Partners */}
      <section className="container py-5">
        <h2 className="text-center display-6 mb-4 text-white">Our Clients & Partners</h2>
                                 <hr className=' text-light w-50 mx-auto mb-5 ' />
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <img style={{width:"200px", height:"200px"}} src={solarCliectLogo} alt="Partner 1" className="img-fluid shadow-sm p-3 bg-white rounded" />
          </div>
          <div className="col-md-3 mb-3">
            <img style={{width:"200px", height:"200px"}} src={MNRELogo} alt="Partner 2" className="img-fluid shadow-sm p-3 bg-white rounded" />
          </div>
          <div className="col-md-3 mb-3">
            <img style={{width:"200px", height:"200px"}} src={partners} alt="Partner 3" className="img-fluid shadow-sm p-3 bg-white rounded" />
          </div>
          <div className="col-md-3 mb-3">
            <img style={{width:"200px", height:"200px"}} src={logo2} alt="Partner 4" className="img-fluid shadow-sm p-3 bg-white rounded" />
          </div>
        </div>
      </section>

      {/* 6. Sustainability Goals */}
      <section className="text-center py-5 text-white" style={{ background: "linear-gradient(135deg, #2c5364, #0f2027)" }}>
        <h2 className=" display-6 mb-4" style={{color:"wheat"}}>Sustainability Goals</h2>
           <hr className=' text-light w-50 mx-auto mb-5 ' />
        <p className="container fs-5" >
          Every project we complete contributes to a cleaner, greener planet. Our goal is to empower communities with 
          renewable energy, reduce carbon footprints, and ensure long-term energy independence for our clients.
        </p>
      </section>

      {/* 7. Get a Project Consultation */}
      <section className="py-5 text-center" style={{ background: "#FFD700" }}>
        <h2 className="fw-bold text-dark mb-3">Ready to Start Your Solar Project?</h2>
        <p className="mb-4">Let our experts design a customized solar solution for your home or business.</p>
        <NavLink to="/getquote" className="btn btn-dark btn-lg px-5 shadow">Get Consultation</NavLink>
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

export default Projects;
