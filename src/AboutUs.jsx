import ourstory from "./projectimages/ourstoryImg-removebg-preview.png";
import ourVision from "./projectimages/ourVisionImg.jpg";
import experience from "./projectimages/Adobe Express - file.png"
import pricing from "./projectimages/pricing-Photoroom.png"
import customerSatisfaction from "./projectimages/customersatisfaction-Photoroom.png"
import "./About.css";
import MainImg from "./projectimages/AboutMainImg.jpeg";
import missionimg from "./projectimages/AboutMissionImg.jpg";
import visionimg1 from "./projectimages/AboutVision1.jpg";
import visionimg3 from "./projectimages/AboutVision3.jpg";
import team1 from "./projectimages/AboutTeam1.jpg";
import team2 from "./projectimages/AboutTeam2.jpg";
import team3 from "./projectimages/AboutTeam3.jpg";

const About = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", width:"100vw",paddingTop:"60px", position:"absolute", left:0, top:"10px"  }}>
      
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #646463ff, #a1a1a0ff)",
          color: "#fff",
        }}
        className="text-center flex-sm-wrap d-flex flex-wrap justify-content-center align-items-center column-gap-5"
      >
         <div className=" p-2 " style={{ borderRadius:"2rem", width:"500px", height:"300px", textAlign:"left"}}>
        <h1 className="fw-bold mt-4 display-6">About Us</h1>
<p className="lead fw-lighter mt-4">
          We are a trusted solar installation company committed to delivering
          clean, renewable energy solutions for homes and businesses.
        </p>
        </div>
        <div className=" p-5">
      <img className=" img-fluid rounded-4" style={{width:"550px", height:"400px"}} src={MainImg}  alt="" />
        </div>
      </section>

      {/* Company Story */}
      <section
        style={{
          background: "#f8f9fa",
          color: "#333",
          padding: "60px 20px",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 display-6">Our Story</h2>
          <hr className=' w-80 mx-auto mb-3 ' />
          <img style={{width:"650px", height:"250px"}} src={ourstory} alt="" />
          <p className=" fw-lighter fs-5 mt-2" style={{ maxWidth: "800px", margin: "0 auto", color:"gray"}}>
            Founded with a passion for sustainability, our company has been
            helping homeowners and businesses switch to solar for over a
            decade. Our expert engineers and technicians work hard to deliver
            cost-efficient and reliable solar solutions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: "linear-gradient(135deg, #2c5364, #0f2027)", color: "#fff", padding: "60px 20px",}} >
        <div className="container text-center flex-wrap d-flex justify-content-center align-items-center column-gap-5">
          <img className=" img-fluid rounded-4" style={{width:"400px", height:"550px" }} src={missionimg} alt="" />
          <div style={{ maxWidth: "600px", textAlign: "left" }}>
          <h2 className="fw-bold mb-4 display-6">Our Mission</h2>
          <p className=" fw-lighter fs-5" style={{ color:"lightgrey"}}>
            Our mission is to make renewable energy accessible and affordable
            to everyone. We design and install high-quality solar panel
            systems that help our clients save money and reduce carbon
            emissions.
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>✔ Quality Products</h4>
              <p style={{color:"lightgrey"}}>We use only the best solar panels and equipment.</p>
            </div>
            <div className="col-md-6">
              <h4>✔ Expert Installation</h4>
              <p style={{color:"lightgrey"}}>Our certified technicians ensure a seamless setup.</p>
          </div>
          </div>

          <div className="row  mt-5">
            <div className="col-md-6">
              <h4>✔ Customized Solutions</h4>
              <p style={{color:"lightgrey"}}>We tailor each system to meet your specific energy needs.</p>
            </div>
            <div className="col-md-6">
              <h4>✔ Ongoing Support</h4>
              <p style={{color:"lightgrey"}}>We provide maintenance and support long after installation.</p>
          </div>

          </div>
          </div>

        </div>
      </section>
<br /> <br />
      {/* Vision */}
      <section
        style={{
          background: "linear-gradient(135deg, #646463ff, #a1a1a0ff)",
          color: "#fff",
          padding: "60px 20px",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 display-6">Our Vision</h2>
          <hr className=' w-80 mx-auto mb-3 ' />
      <div className=" flex-wrap d-flex justify-content-center align-items-center column-gap-4 mb-4">
            <img className=" img-fluid rounded-4 zoom-hover" style={{width:"350px", height:"200px"}} src={visionimg1} alt="" />
            <img className=" img-fluid rounded-4 zoom-hover" style={{width:"500px", height:"300px"}} src={ourVision} alt="" />
            <img className=" img-fluid rounded-4 zoom-hover" style={{width:"350px", height:"200px"}} src={visionimg3} alt="" />
      </div>
          <p className=" mt-3 fw-lighter fs-5" style={{ maxWidth: "750px", margin: "0 auto", color:"whitesmoke" }}>
            We envision a future where every home and business is powered by
            clean energy. Through innovation and customer satisfaction, we aim
            to lead the transition toward sustainable living.
          </p>

        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          background: "#f8f9fa",
          color: "#333",
          padding: "60px 20px",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 display-6">Meet Our Team :</h2>
       <hr className=' w-50 mx-auto mb-5 ' />
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img
                  src={team1}
                  className="card-img-top zoom-hover"
                  alt="CEO"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Rohit Sharma</h5>
                  <p className="card-text">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img
                  src={team2}
                  className="card-img-top zoom-hover"
                  alt="CTO"
                style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Neha Patel</h5>
                  <p className="card-text">Chief Technical Officer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img
                  src={team3}
                  className="card-img-top zoom-hover"
                  alt="Operations Head"
                style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Amit Verma</h5>
                  <p className="card-text">Head of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          background: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
          color: "#fff",
          padding: "60px 20px",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 display-6">Why Choose Us?</h2>
                 <hr className=' w-50 mx-auto mb-5 ' />
          <div className="row text-center">
            <div className="col-md-4">
              <img style={{width:"240px", height:"150px",  marginRight:"4rem"}} src={experience} alt="" />
              <h4>✔ 10+ Years Experience</h4>
              <p>Trusted experts in solar installation and renewable solutions.</p>
            </div>
            <div className="col-md-4">
            <img style={{width:"180px", height:"150px",  marginRight:"1rem"}} src={pricing} alt="" />
              <h4>✔ Affordable Pricing</h4>
              <p>We provide cost-effective solar systems tailored to your needs.</p>
            </div>
            <div className="col-md-4">
             <img style={{width:"180px", height:"150px",  marginRight:"1rem"}} src={customerSatisfaction} alt="" />
              <h4>✔ Customer Satisfaction</h4>
              <p>Over 500+ happy customers powering their lives with solar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          background: "#f8f9fa",
          color: "#333",
          padding: "60px 20px",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 display-6">Our Core Values</h2>
           <hr className=' w-50 mx-auto mb-5 ' />
          <div className="row column-gap-5 d-flex justify-content-center">
            <div className="value-card shadow-lg col-md-4 shadow-lg p-3 pt-4" style={{height:"200px", width:"350px"}}>
              <h5 className=" fw-light fs-4">🌍 Sustainability</h5>
              <p className=" mt-3 text-secondary">We prioritize eco-friendly and long-term solutions, , ensurinng every solar project reduces carbon footprint while delivering reliable energy for generations to come.</p>
            </div>
            <div className="value-card  col-md-4 shadow-lg p-3 pt-4" style={{height:"200px", width:"350px"}}>
              <h5 className=" fw-light fs-4">🤝 Integrity</h5>
              <p className=" mt-3  text-secondary">Honesty and transparency are at the heart of what we do. every step of your solar journey is open, trustworthy, and reliable.</p>
            </div>
            <div className="value-card shadow-lg col-md-4 shadow-lg p-3 pt-4" style={{height:"200px", width:"350px"}}>
              <h5 className=" fw-light fs-4">🚀 Innovation</h5>
              <p className=" mt-3 text-secondary">We bring the latest solar technologies to your doorstep, combining innovative with efficiency to provide sustainable energy Solutions tailored to your needs.</p>
            </div>
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

export default About;
