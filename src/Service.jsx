import residentialSolar from "./projectimages/serviceResidentialsolar-removebg-preview.png";
import commercialSolar from "./projectimages/serviceCommercialSolar-removebg-preview.png";
import inverter from "./projectimages/inverter-removebg-preview.png";
import support from "./projectimages/support-removebg-preview.png";
import waterHeater from "./projectimages/waterHeater-removebg-preview.png";
import solarConsultancy from "./projectimages/solarConsultancy-removebg-preview.png";
import siteSurvey from "./projectimages/consulatation-removebg-preview.png";
import systemDesign from "./projectimages/systemDesign-removebg-preview.png";
import gridConnection from "./projectimages/gridConnection-removebg-preview.png";
import testingSolar from "./projectimages/TestingSolar-removebg-preview.png";
import logo from "./projectimages/ChatGPT Image Sep 16, 2025, 10_26_01 AM.png";
import certified from "./projectimages/certified.jpg";
import MNRELogo from "./projectimages/MNRELogo.jpg";
import ISOLogo from "./projectimages/isoCertified.jpg";
import { NavLink } from "react-router-dom";
import "./Service.css"

const Service = () => {
  return (
    <>
    <div>
    <div
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // Shiny dark gradient
        color: "#fff",
        minHeight: "100vh",
        paddingTop:"100px",
        width:"100vw", position:"absolute", left:0, top:"60px"
      }}
    >
      {/* Heading */}
      <div className="container text-center mb-5">
        <h1 className="fw-bold display-5" style={{ color: "#f9d342" }}>
          Our Solar Services
        </h1>
                   <hr className=' w-50 mx-auto mb-5 ' />

        <p className="lead text-light">
          Powering homes, businesses, and communities with clean & reliable solar energy solutions.
        </p>
      </div>

      {/* Service Cards */}
      <div className="container">
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(135deg, #ff9966, #ff5e62)",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-2" style={{height:"350px", width:"350px"}}>
                <img style={{height:"200px", width:"200px"}} src={residentialSolar} alt="" />
                <h4 className="fw-bold">Residential Solar</h4>
                <p className="mt-3">
                  Reduce electricity bills with rooftop solar panel installation tailored for your
                  home. Reliable, eco-friendly, and cost-effective.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
         <div className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(135deg, #ff9966, #ff5e62)",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-2" style={{height:"350px", width:"350px"}}>
                <img style={{height:"200px", width:"200px"}} src={commercialSolar} alt="" />
                <h4 className="fw-bold">Commericial Solar</h4>
                <p className="mt-3">
                  Power your bussiness with cost-saving sustainable commerical solar solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(135deg, #ff512f, #dd2476)",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-2" style={{height:"350px", width:"350px"}}>
                <i className="bi bi-lightning-charge display-4 mb-3"></i>
           <img style={{height:"200px", width:"200px"}} src={inverter} alt="" />
                <h4 className="fw-bold">Solar Inverter & Battery</h4>
                <p className="mt-3">
                  Complete backup solutions with high-efficiency inverters and solar batteries to
                  ensure uninterrupted power supply.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(135deg, #11998e, #38ef7d)",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-2" style={{height:"350px", width:"350px"}}>
                <img style={{height:"200px", width:"200px"}} src={support} alt="" />
                <h4 className="fw-bold">Maintenance & Support</h4>
                <p>
                  Regular inspections, cleaning, and repair services to maximize the performance and
                  lifespan of your solar system.
                </p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(135deg, #fc4a1a, #f7b733)",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-2" style={{height:"350px", width:"350px"}}>
                <img style={{height:"200px", width:"200px"}} src={waterHeater} alt="" />
                <h4 className="fw-bold">Solar Water Heaters</h4>
                <p>
                  Energy-efficient water heating systems for households and industries, reducing
                  dependency on electricity and gas.
                </p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(135deg, #7f00ff, #e100ff)",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-2" style={{height:"350px", width:"350px"}}>
           <img style={{height:"200px", width:"200px"}} src={solarConsultancy} alt="" />
                <h4 className="fw-bold">Solar Consultancy</h4>
                <p>
                  Expert consultation to design customized solar solutions, government subsidy
                  guidance, and ROI analysis for maximum benefit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5 d-flex align-items-center justify-content-center shadow-lg" style={{backgroundColor:"rgba(245, 245, 245, 0.3)", height:"300px"}}>
          <div>
          <h3 className="fw-bold display-6">Ready to switch to solar?</h3>
          <p className=" fw-lighter  fs-5">
            Let’s build a sustainable future together with affordable and efficient solar energy
            solutions.
          </p>
          <NavLink className="btn btn-lg" to="/getquote"
            style={{
              background: "linear-gradient(135deg, #f7971e, #ffd200)",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "30px",
              padding: "12px 30px",
            }}>   Get a Free Quote</NavLink>
        </div>
        </div>
      </div>

      {/* ================= Extra Sections ================= */}

      {/* Section 1: Government Subsidies & Financing */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#f9d342" }}>
          Government Subsidies & Financing
        </h2>
        <div className="row text-center column-gap-5 d-flex justify-content-center">
          <div className="col-md-6 mb-3 p-4 rounded-4" style={{backgroundColor:" #ffffffc0", width:"400px"}}>
            <h5 style={{color:"darkslategray"}}>💰 Subsidy Benefits</h5>
            <p className="text-dark">
              Get up to <b>40% subsidy</b> on rooftop solar systems under government schemes. We
              assist you with paperwork and approvals.
            </p>
          </div>
          <div className="col-md-6 mb-3 p-4 rounded-4" style={{backgroundColor:" #ffffffc0", width:"400px"}}>
            <h5 style={{color:"darkslategray"}}>🏦 Easy Financing</h5>
            <p className="text-dark">
              EMI options available with partner banks and NBFCs. Go solar today, pay in easy
              monthly installments.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Installation Process */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#f9d342" }}>
          Our Installation Process
        </h2>
        <div className="text-center ">
          <div className="col-md-3 mb-3 flex-wrap d-flex justify-content-center align-items-center shadow-lg column-gap-5" style={{width:"90vw", backgroundColor:"#ffffff80", margin:"auto",  padding:"20px"}}>
            <img style={{height:"300px", width:"300px"}} src={siteSurvey} alt="" />
            <div style={{textAlign:"left"}}>
           <h4>Step 1</h4>
            <p className="fs-3" style={{color:"darkslategray"}}>Site Survey & Energy Analysis</p>
            <ul>
              <li> <b className="fs-5 text-black-50">System Design & Proposal - </b>
               <p style={{color:"black"}}>Customized solar system is designed based on your site conditions and energy needs.</p> </li>
              <li> <b className=" fs-5 text-black-50">Permits & Approval - </b>
               <p style={{color:"black"}}>All required permits and approvals are taken care of before installation begins</p> </li>
            </ul>
            </div>
          </div>


          <div className="col-md-3 mb-3 flex-wrap d-flex justify-content-center align-items-center shadow-lg column-gap-5" style={{width:"90vw", backgroundColor:"#ffffff80", margin:"auto",  padding:"20px"}}>
            <img style={{height:"300px", width:"300px"}} src={systemDesign} alt="" />
            <div style={{textAlign:"left"}}>
           <h4>Step 2</h4>
            <p className="fs-3" style={{color:"darkslategray"}}>System Design & Cost Proposal</p>
            <ul>
              <li> <b className="fs-5 text-black-50">Customized Design - </b>
               <p style={{color:"black"}}>A solar system is designed to match your site conditions, energy usage, and future needs.</p> </li>
              <li> <b className=" fs-5 text-black-50">Transparent Costing - </b>
               <p style={{color:"black"}}>A clear proposal is provided with detailed costs, savings estimates, and project timeline.</p> </li>
            </ul>
            </div>
          </div>


          <div className="col-md-3 mb-3 flex-wrap d-flex justify-content-center align-items-center shadow-lg column-gap-5" style={{width:"90vw", backgroundColor:"#ffffff80", margin:"auto",  padding:"20px"}}>
            <img style={{height:"300px", width:"300px"}} src={gridConnection} alt="" />
            <div style={{textAlign:"left"}}>
           <h4>Step 3</h4>
            <p className="fs-3" style={{color:"darkslategray"}}>Installation & Grid Connection</p>
            <ul>
              <li> <b className="fs-5 text-black-50">Professional Installation </b>
               <p style={{color:"black"}}>Certified technicians install the solar panels and equipment with precision and safety.</p> </li>
              <li> <b className=" fs-5 text-black-50">Seamless Grid Connection –  </b>
               <p style={{color:"black"}}>The system is connected to the utility grid for smooth operation and energy flow.</p> </li>
            </ul>
            </div>
          </div>


          <div className="col-md-3 mb-3 flex-wrap d-flex justify-content-center align-items-center shadow-lg column-gap-5" style={{width:"90vw", backgroundColor:"#ffffff80", margin:"auto",  padding:"20px"}}>
            <img style={{height:"300px", width:"300px"}} src={testingSolar} alt="" />
            <div style={{textAlign:"left"}}>
           <h4>Step 4</h4>
            <p className="fs-3" style={{color:"darkslategray"}}>Testing, Handover & Support</p>
            <ul>
              <li> <b className="fs-5 text-black-50">System Testing & Handover –</b>
               <p style={{color:"black"}}> The installed solar system is thoroughly tested and handed over with complete documentation.</p> </li>
              <li> <b className=" fs-5 text-black-50">Ongoing Support – </b>
               <p style={{color:"black"}}>Continuous monitoring, maintenance, and customer support ensure reliable long-term performance.</p> </li>
            </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Section 3: Partners & Certifications */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#f9d342" }}>
          Our Partners & Certifications
        </h2>
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <img
              src={logo}
              alt="BEE Certified"
              className="img-fluid"
              style={{ maxHeight: "100px" }}
            />
            <p>BEE Certified</p>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={certified}
              alt="MNRE Approved"
              className="img-fluid"
              style={{ maxHeight: "100px" }}
            />
            <p>MNRE Approved</p>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={MNRELogo}
              alt="IREDA Partner"
              className="img-fluid"
              style={{ maxHeight: "100px" }}
            />
            <p>IREDA Partner</p>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={ISOLogo}
              alt="ISO Certified"
              className="img-fluid"
              style={{ maxHeight: "200px", width:"100px" }}
            />
            <p>ISO Certified Company</p>
          </div>
        </div>
      </div>

      {/* Section 4: FAQ */}
      <div className="container mt-5 pb-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#f9d342" }}>
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item bg-dark text-light border-0">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1Content"
              >
                How much can I save with solar panels?
              </button>
            </h2>
            <div id="faq1Content" className="accordion-collapse collapse show">
              <div className="accordion-body">
                On average, you can save up to 60–80% on your electricity bills depending on usage
                and system size.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-light border-0">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2Content"
              >
                Do I get government subsidies?
              </button>
            </h2>
            <div id="faq2Content" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, residential solar users in India can get subsidies of up to 40% under
                government schemes.
              </div>
            </div>
          </div> 


          <div className="accordion-item bg-dark text-light border-0">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3Content"
              >
                How long do solar panels last?
              </button>
            </h2>
            <div id="faq3Content" className="accordion-collapse collapse">
              <div className="accordion-body">
                Solar panels typically last 25–30 years with proper maintenance.
              </div>
            </div>
          </div>
        </div>
      </div>
       <footer
        style={{
          background: "linear-gradient(135deg, #e4e7e7ff, #828383ff)",
          color: "darkslategray",
        }}
        className="text-center py-3"
      >
        <p className="fs-5" >© 2025 Solar Installation Company | All Rights Reserved</p>
      </footer>
    </div>
      </div>
      </>
  );
};

export default Service;
