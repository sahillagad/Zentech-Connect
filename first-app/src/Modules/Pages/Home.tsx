import React from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <Navbar/>

        <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page5 ">
                     <div className="wrapper5 ps-4 ">
                               <h2 className="display-4">Award winning IT support and web development</h2>
                               {/* <h2>in the East Bay & San Francisco</h2> */}
                          </div>
                     </div>
                </div>
             </div>
         </div>

         <div className="container-fluid bgbox1">
            <div className="row">
                  <div className="col-sm-11 m-auto  pt-4 pb-4">
                  <div className="row">
                  <div className="col-sm-6">
                    <Link to="/ITSupport/ManagedITServices" className="text-decoration-none">  <h4 className="text-primary">IT Services <i className="bi bi-chevron-right fw-bolder"></i> </h4></Link>
                
                <p className="">We keep business networks running with world class support and Managed IT Services.</p> 
                </div>
                <div className="col-sm-6">
                <Link to="/webDevelopment/WordPressDevelopmentPage" className="text-decoration-none ">      <h4 className="text-success">Web Development <i className="bi bi-chevron-right fw-bolder"></i></h4> </Link>
                   <p>We build beautiful, powerful websites to help businesses grow and reach their audiences.</p>
                 </div>
              
            </div>
                  </div>
            </div>
         </div>


        <div className="container mt-5 ">
            <div className="row">
                   <div className="col-md-3 h-75">
                      <img src="https://www.factoryjohore.com.my/images/0-FactoryJohore/testimonial-sample-img.jpg" className="img-fluid w-100 h-75" alt="" />
                   </div>
                   <div className="col-md-8 d-flex flex-column justify-content-center mt-4">
                          <h6 className="text-muted ">Beyond web development and IT support</h6>
                          <h1 className="">We Build Relationships and Trust</h1>
                          <p>Our philosophy of customer loyalty and service allows us to build meaningful long-term relationships with our clients. We treat every client like a partner, not just a customer. We proudly serve businesses and organizations in the East Bay and San Francisco Bay Area.</p>
                   </div>
            </div>  
        </div>


        
        {/* <div className="container-fluid bgbox1  pb-3">
            <div className="row">
                <div className="col-md-11 m-auto">
                     <div className="row d-md-flex justify-content-md-center align-items-md-center">
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2017/05/cc_Berkeley-Watermark.svg" className="w-50 h-50" alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2017/05/cc_CCM.svg" className="w-50 h-50"alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2018/11/cc_crossroads-trading-co.svg" className="w-50 h-50" alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2018/11/cc_san-jose-county.svg" className="w-50 h-50" alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2017/05/cc_Camp-Edmo.svg" className="w-25 h-25" alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2017/05/cc_Lindsey-Wildlife.svg" className="w-50 h-50" alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2017/05/cc_DisplayPort.svg" className="w-50 h-50" alt="" />  
                          </div>
                          <div className="col-md-3 col-sm-6 text-center">
                              <img src="https://www.computercourage.com/wp-content/uploads/2017/05/cc_Kaiser.svg" className="w-50 h-50" alt="" />  
                          </div>
                     </div>
                </div>
            </div>
        </div> */}



        
    <div className="container mt-1 mb-5">
        <div className="row">
        <div className="col-sm-6 mt-3">
             <h6> IT Support</h6>
                 <h2 className="fw-bold"> Take Control of Your Technology</h2>
                 <p>Our team of experts is available to support all aspects of your business technology around the clock, offering broad and always-on service.</p>
            
                 {/* <button className="btn btn-primary w-100 ">IT Services Details</button> */}
         
             </div>
             <div className="col-sm-6 mt-3">
                 <h6>Web Development</h6>
                 <h2 className="fw-bold">Build Your Business Online</h2>
                 <p>We offer a full range of web development services from simple business sites to advanced custom online applications.</p>
                 
                      {/* <button className="btn btn-success w-100  ">Web Services Details</button> */}
             </div>
           
        </div>
    </div>
        

    {/* <div className="container mt-5">
        <h6 className="text-center">See our work in action</h6>
        <h1 className="text-center"> Web Development Portfolio</h1>   
        <p className="text-center fw-bold">See Some of Our Favorite WordPress Projects</p>
            <div className="row mt-5 d-flex justify-content-center ">
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2018/06/edmo-v2-desktop-650x475.png"} className="card-img" alt="" />
                 <p className="text-center">Camp EDMO</p>
            </div> 
                             
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2016/07/la-tourangelle-desktop-650x475.png"} className="card-img" alt="" />
                 <p className="text-center">La Tourangelle</p>
            </div> 

           <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2015/07/ucb-desktop-650x475.jpg"} className="card-img" alt="" />
                 <p className="text-center">UC Berkeley School of Law</p>
            </div>                    
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2016/08/rosov-desktop-650x475.png"} className="card-img" alt="" />
                 <p className="text-center">Rosov Consulting</p>
            </div> 
           
            </div>
            <div className="row mt-4">
               <div className="col-md-2 m-auto">
                <button className="btn btn-warning  w-100">View Portfolio</button>
               </div>
            </div>
        </div> */}

{/* 
    <div className="container mt-5">
       <div className="row">
          <div className="col-sm-12">
            <h4 className="text-muted text-center">Computer Courage history</h4>
            <h2 className="text-center">Serving Our Community Since 2006</h2>
            <p className="text-center"> Computer Courage was founded in 2006 by our President Adam Schwartz out of his home office. The company was founded on the same core philosophy of customer care and support that powers our business relationships today. </p> 
          </div>
       </div>
    </div> */}
        

        </>
    )
    }
export default Home;
