import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../Assets/Logo2.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white p-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div>
                <Link
                  className="navbar-brand mb-3 d-flex align-items-center mt-3"
                  to={"/"}
                >
                  <img
                    src={logo1}
                    alt=""
                    width="70"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                  <span className="fs-5">BLUERED TECHNOLOGY</span>
                </Link>
                <p className="mb-3  mt-3 footer-desc">
                  29879 96432, Al budur bldg, Area naïf, plot number 386, Land
                  dm number 118-1220,
                </p>
                <p className="mb-3 footer-desc">Call Us: +97 10563329789</p>
                <p className="mb-3 footer-desc">
                  E-mail Us : reynold_reddy@yahoo.co.uk
                </p>
                <p className="mb-3 footer-desc ">
                  © 2023 to Bluered Technology d.o.o.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 mt-4">
              <div>
                <h5 className="border-bottom border-black pb-3">IT Support</h5>
                <ul
                  className="list-unstyled mt-3 text-light"
                  aria-labelledby=""
                >
                  <li>
                    <Link
                      className="dropdown-item mb-3"
                      to="/ITSupport/ManagedITServices"
                    >
                      Managed IT Services
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/ITSupport/DesktopUserSupportPage"
                    >
                      Desktop and User Support
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/ITSupport/EmailAndCloudServices"
                    >
                      Email and Cloud Services
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/ITSupport/ServerAndNetworkSupportPage"
                    >
                      {" "}
                      Server and Network Support
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/ITSupport/SecurityAndVirusProtection"
                    >
                      Security and Virus Protection
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/ITSupport/BackupDisasterRecovery"
                    >
                      Backup and Disaster Recovery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-12 mt-4">
              <div className="">
                <h5 className="border-bottom border-black pb-3">
                  Web Development
                </h5>
                <ul
                  className="list-unstyled mt-3 text-light"
                  aria-labelledby=""
                >
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item "
                      to="/webDevelopment/WordPressDevelopmentPage"
                    >
                      WordPress
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/webDevelopment/WebApplicationPage"
                    >
                      {" "}
                      Web Applications
                    </Link>
                  </li>
                  {/* <li className=" mb-3"><Link className="dropdown-item" to="/webDevelopment/DesignPrintPage">Design & Print</Link></li> */}
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/webDevelopment/ECommercePage"
                    >
                      eCommerce
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link
                      className="dropdown-item"
                      to="/webDevelopment/ResponsiveDesign"
                    >
                      Responsive & Mobile
                    </Link>
                  </li>
                  <li className=" mb-3">
                    {" "}
                    <Link
                      className="dropdown-item"
                      to="/webDevelopment/WebSecurityPage"
                    >
                      Web Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-12 mt-4">
              <div>
                <h5 className="border-bottom border-black pb-3"> About Us</h5>
                <ul
                  className="list-unstyled mt-3 text-light"
                  aria-labelledby=""
                >
                  <li className=" mb-3">
                    <Link className="dropdown-item" to="/AboutUs/OverviewPage">
                      Overview
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link className="dropdown-item" to="/AboutUs/ContactUsPage">
                      Contact Us
                    </Link>
                  </li>
                  {/* <li  className=" mb-3"><Link className="dropdown-item" to="/AboutUs/MeetTheTeamPage">Meet the Team</Link></li> */}
                  <li className=" mb-3">
                    <Link className="dropdown-item" to="/AboutUs/CareersPage">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
