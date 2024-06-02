import React from "react";
import Navbar from "../Component/Navbar";


const OverviewPage=()=>{
    return(
        <>
        
         <Navbar/>
         <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page5 ">
                     <div className="wrapper5 ps-4 ">
                               <h1 className="display-2 text-center"> Bluered Technology </h1>
                               {/* <h4>Find out why we care, and why you should too.</h4> */}
                          </div>
                     </div>
                </div>
             </div>
         </div>
        
         <div className="container-fluid p-4 bgbox1">
        <h2 className="fw-bold text-center">About  Bluered Technology</h2>
        <h6 className="text-center">Technology today is complicated and constantly changing, yet comes with no instruction manual.  Bluered Technology aims to fix this by providing personal, expert IT support and beautiful, hand crafted websites.</h6>
        </div>



        

        <div className="container-fluid mt-5">
             <div className="row pt-5 bgbox1 pb-5">
                  <div className="col-md-12 ">
                     <div className="container mt-4">
                          <div className="row d-md-flex justify-content-md-center align-items-md-center ">
                             <div className="col-md-5 mb-sm-4">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2014/07/Stocksy_txp5117923aVXB000_Medium_194474-70-675x380.jpg" className="img-fluid rounded rounded-3" alt="" />
                             </div>
                             <div className="col-md-5 mt-3">
                                       <h2>Commitment to the User</h2>
                                       <p> Bluered Technology has always put the user first. Too many systems and companies put the focus on products or the bottom line, creating an environment where users are left without knowledgeable or friendly support and without easy to use websites. Our mission is to change that with friendly, local, professional support.</p>
                             </div>
                          </div>
                     </div>
                  </div>
                  <div className="col-md-12  ">
                
                     <div className="container">
                          <div className="row d-md-flex justify-content-md-center align-items-md-center">
                          <div className="col-md-5">
                                       <h2>Commitment to Our Team</h2>
                                       <p>  Bluered Technology grew from a one man operation in the basement of founder Adam Schwartz’s home. Today we support a full team of web and IT professionals and their families with job opportunities, health care, and a positive work environment. Our growing team of friendly experts is our most important asset</p>
                             </div>
                             <div className="col-md-5 mb-sm-4 mt-3">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2014/07/iStock_000020815883Med-70-675x380.jpg" className="img-fluid rounded rounded-3" alt="" />
                             </div>
                          
                          </div>
                     </div>
                  </div>
                  <div className="col-md-12 ">
            
                 
                     <div className="container mt-4">
                          <div className="row d-md-flex justify-content-md-center align-items-md-center ">
                             <div className="col-md-5 mb-sm-4">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2014/03/computer-courage-staff-photo-2016-675x380.jpg" className="img-fluid rounded rounded-3" alt="" />
                             </div>
                             <div className="col-md-5 mt-3">
                                       <h2>Commitment to Professionalism</h2>
                                       <p>We aim to be more than just technically proficient and knowledgeable; we aim to provide professional, accountable solutions and service to our customers. You’ll see the difference at every step of the way – communication, project management, service, and follow up.</p>
                             </div>
                          </div>
                     </div>
                  </div>
             </div>
         </div>

        </>
    )
}

export default OverviewPage;