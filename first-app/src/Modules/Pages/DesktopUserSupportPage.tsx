import React from "react";
import Navbar from "../Component/Navbar";


const DesktopUserSupportPage=()=>{
    return(
        <>
          <Navbar/>
         <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page5 ">
                     <div className="wrapper5 ps-4 ">
                               <h1 className="display-5">Desktop and User Support</h1>
                               <h4>An efficient, friendly helpdesk to support your users and maintain operations</h4>
                          </div>
                     </div>
                </div>
             </div>
         </div>
        

   
         <div className="container-fluid p-4 bgbox1">
        <h2 className="fw-bold text-center">It's Like Having the World's Best IT Guy</h2>
        <h6 className="text-center">We’re just a phone call or email away. Our team can offer you a wide range of expertise;</h6>
        </div>


        <div className="container mt-4">
        <div className="row ">
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className="bi bi-calendar3  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>On-site and remote support</h4>
                        <p>
                        Schedule an appointment to get help on site, or call/email us for a faster response. We use powerful software to share your screen and get you help with a minimal wait.                            </p>
                     </div>
                  </div> 
                 </div>

           

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                  
                     <i className="bi bi-search  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Workstation management and maintenance</h4>
                        <p>
                        Rest assured knowing that our advanced monitoring software checks all of your devices 24 hours per day, automatically alerting us to start working on your problems before they interrupt your work.                            </p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-pc-display  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>  Mobile device support and sync   </h4>
                        <p>
                        We help you organize, configure, update, and secure your mobile devices. We can help you access your company data from anywhere and lock down devices if they are lost or stolen.                        </p>
                     </div>
                  </div> 
                 </div>
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className="bi bi-shield-lock  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Antivirus, Backup, and Security</h4>
                        <p>
                        Keep your workstations secure and protected from viruses, prying eyes, or thieves. Know where all of your machines are at all time and keep your data backed up 24/7.                        
                        </p>
                     </div>
                  </div> 
                 </div>

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className="bi bi-graph-up-arrow  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>IT inventory and tracking</h4>
                        <p>
                        We manage your IT inventory and document your systems so that you can keep track of what you have and where it is. Stop worrying about where your machines are and start receiving a monthly report on their status, health, location, and configuration.
                     </p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className="bi bi-gear  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Workstation upgrades and replacements</h4>
                        <p>
                        You’ll know when it’s time to upgrade or replace your workstations thanks to our advanced monitoring system. When it is, we’ll make it seamless by helping you select the right equipment, then onboarding it with minimal user impact.
                        </p>
                     </div>
                  </div> 
                 </div>
        </div>
        </div>

        {/* <div className="container mt-5">
        <h2 className="text-center fw-bold">Our support team helps businesses focus on business</h2>
            <div className="row mt-3 d-flex justify-content-evenly">

               <div className="col-md-5 mb-3">
                <div className="card customerSayBox shadow-sm">
                    <div className="card-body">
                         <p className="card-text">
                         <i className="bi bi-quote display-6"></i> Working with Computer Courage is like having an internal IT department without the expense. They are honest, reliable, responsive and make recommendations that are easy to implement and cause minimal disruption to our staff. I also love how creative they are to using new technologies to help us maximize our efficiency while feeling secure about the protection of our data. I highly recommend Computer Courage!
                         </p>
                         <div className="row mt-2 d-flex justify-content-end">
                               <div className="col-md-6 mt-1">
                                <div className="row">
                                <div className="col-sm-3 ">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2014/03/mindy-100x100.jpeg" width={50} height={50} className="rounded rounded-circle " alt="" /> 
                                </div>
                                <div className="col-md-9 ps-3  mt-1"> 
                                <h6 className="mb-0">MINDY GALOOB</h6>
                                   <small className="">Children's Creativity Museum</small>
                                </div>    
                               </div>
                               </div>
                         </div>
                    </div>
                </div>
               </div>
               <div className="col-md-5 mb-3">
                <div className="card customerSayBox shadow-sm">
                    <div className="card-body">
                         <p className="card-text">
                         <i className="bi bi-quote display-6"></i> 
                         We just moved our offices and Computer Courage was a godsend. Computer Courage developed and implemented a smooth plan for the transition of all things internet, server and phones to our new space. The computers, internet and phones were up before we could unpack the first box…really amazing. You can work in clutter but there is no way to work without your computer. Thanks Computer Courage!
                         </p>
                         <div className="row mt-2 d-flex justify-content-end">
                               <div className="col-md-6 mt-1">
                                <div className="row">
                                <div className="col-sm-3 ">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2014/03/nancy-100x100.jpg" width={50} height={50} className="rounded rounded-circle " alt="" /> 
                                </div>
                                <div className="col-md-9 ps-3  mt-1"> 
                                <h6 className="mb-0">NANCY HOLLIDAY</h6>
                                   <small className="">Holliday Development</small>
                                </div>    
                               </div>
                               </div>
                         </div>
                    </div>
                </div>
               </div>

              
            </div>
        </div> */}
        




        <div className="container-fluid p-0 m-0 mb-5 mt-4">
             <div  className="row p-0 m-0">
                <div className="col-md-12 p-0 m-0">
                  <div className="landing-page6">
                     <div className="wrapper6 ps-4">
                              <div className="container p-4 w-100 h-100 d-md-flex align-items-md-center align-content-md-between"> 
                                  <div className="col-md-6"> 
                                   <h2 className=" text-white">Request a Service Desk Tour</h2>
                                      <ul className="mt-3 mb-3 fs-5">
                                          <li>Learn how our technicians can support your employees</li>
                                          <li>Organize and manage your IT inventory</li>
                                          <li>Get fast help in case of IT emergencies</li>
                                   
                                      </ul>
                                  </div>
                                  <div className="col-md-6">
                                     <form>
                                         <div className="mb-3">
                                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" required placeholder="Your Name"/>
                                         </div>
                                         <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" required placeholder="Email Address"/>

                                            </div>
                                            <div className="col-md-6">
                                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" required placeholder="Phone"/>

                                            </div>
                                         </div> 

                                         <div className="mb-3">
                                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" required placeholder="Website"/>
                                         </div>

                                           <div className="mb-3">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Anything you'd like to add ? "></textarea>
                                           </div>
                                           <div className="mb-3">
                                            <button type="submit" className="btn btn-warning w-100">Submit</button>
                                           </div>
                                     </form>
                                  </div>
                              </div>
                          </div>
                     </div>
                </div>
             </div>
         </div>

         <div className="container mt-4">
           <h2 className="text-center">3 Reasons to Choose  Bluered Technology</h2>
        <div className="row mt-5">
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className="bi bi-headset  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Friendly, local technicians who know your name</h4>
                        <p>
                        Our technicians all work together here in our Berkeley office, sharing resources and getting to know our customers. We carefully select our technicians and our customers, allowing us to ensure a quality relationship built on trust.
                       </p>
                     </div>
                  </div> 
                 </div>

           

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                  
                     <i className="bi bi-clipboard  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Organized, accountable problem solving</h4>
                        <p>
                        We use industry-leading tools to track and monitor problems, collaborate between technicians, communicate with our clients, and keep careful records of all problem solving for full accountability.                         </p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-award  display-2 text-primary"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>  Reliable, trusted maintenance for all technology   </h4>
                        <p>
                        You’ll know that your systems are up to date and healthy with our meticulous reporting and monitoring. We add an extra human touch with manual system reviews, documentation updates, and strategy sessions.
                       </p>
                     </div>
                  </div> 
                 </div>
        
        </div>
        </div>
        </>
    )
}

export default DesktopUserSupportPage;