import React from "react";
import logo1 from "../Assets/Logo2.png"
import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bgNavbar text-white">
  <div className="container-fluid">
  <Link className="navbar-brand"  to={"/"}>
      <img src={logo1} alt="" width="50" height="30" className="d-inline-block align-text-top" />
      ZENTECH
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          IT Support
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
            <li><Link className="dropdown-item" to="/ITSupport/ManagedITServices"><i className="bi bi-people me-1"></i>Managed IT Services</Link></li>
            <li><Link className="dropdown-item" to="/ITSupport/DesktopUserSupportPage"><i className="bi bi-pc-display-horizontal me-1"></i>Desktop and User Support</Link></li>
            <li><Link className="dropdown-item" to="/ITSupport/EmailAndCloudServices"><i className="bi bi-cloud-arrow-up me-1"></i>Email and Cloud Services</Link></li>
            <li><Link className="dropdown-item" to="/ITSupport/ServerAndNetworkSupportPage"><i className="bi bi-hdd-rack me-1"></i> Server and Network Support</Link></li>
            <li><Link className="dropdown-item" to="/ITSupport/SecurityAndVirusProtection"><i className="bi bi-shield-check me-1"></i>Security and Virus Protection</Link></li>
            <li><Link className="dropdown-item" to="/ITSupport/BackupDisasterRecovery"><i className="bi bi-fire me-1"></i>Backup and Disaster Recovery</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Web Development
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/webDevelopment/WordPressDevelopmentPage"><i className="bi bi-wordpress me-1"></i>WordPress</Link></li>
            <li><Link className="dropdown-item" to="/webDevelopment/WebApplicationPage"><i className="bi bi-database me-1"></i> Web Applications</Link></li>
            {/* <li><Link className="dropdown-item" to="/webDevelopment/DesignPrintPage"><i className="bi bi-palette2 me-1" ></i>Design & Print</Link></li> */}
            <li><Link className="dropdown-item" to="/webDevelopment/ECommercePage"><i className="bi bi-cart me-1"></i>eCommerce</Link></li>
            <li><Link className="dropdown-item" to="/webDevelopment/ResponsiveDesign"><i className="bi bi-phone me-1"></i>Responsive & Mobile</Link></li>
            <li><Link className="dropdown-item" to="/webDevelopment/WebSecurityPage"><i className="bi bi-lock me-1"></i>Web Security</Link></li>
          </ul>
        </li>

    
     

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
            <li><Link className="dropdown-item" to="/AboutUs/OverviewPage"><i className="bi bi-search me-1"></i>Overview</Link></li>
            <li><Link className="dropdown-item" to="/AboutUs/ContactUsPage"><i className="bi bi-telephone me-1"></i>Contact Us</Link></li>
            {/* <li><Link className="dropdown-item" to="/AboutUs/MeetTheTeamPage"><i className="bi bi-diagram-3 me-1"></i>Meet the Team</Link></li> */}
            <li><Link className="dropdown-item" to="/AboutUs/CareersPage"><i className="bi bi-layers-half me-1"></i>Careers</Link></li>
           
          </ul>
        </li>
      </ul>
        <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#"> 510-525-2226</a> */}
        </li>
        <li className="nav-item">
          {/* <Link to={"/RequestFreeConsultation"}>
          <button className="btn btn-warning text-white">Free Consultation</button>

          </Link> */}
        </li>
        </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}

export default Navbar;