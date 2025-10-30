import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <>
 <nav
        className="navbar navbar-expand-xxl navbar-dark"
        style={{
          background: "linear-gradient(135deg, #0f2027, #2c5364)",
          position: "fixed",
          left:0,
          top: 0,
          zIndex: 1000,
          width:"100vw"
        }}
      >
        <div className="container-fluid" >
          <a className="navbar-brand fw-bold" href="#home">
            🌞 SolarMatrix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to="/testimonial">Testimonials</NavLink>
              </li>
              <li className="nav-item">
             <NavLink className="nav-link" to="/contactus">ContactUs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar;