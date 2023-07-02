import React from "react";
import Navbar from "../Component/Navbar";

const ResponsiveDesign=()=>{
    return(
        <>
          <Navbar/>
         <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page2 responsiveDesignHeaderImage">
                     <div className="wrapper2 ps-4 ">
                               <h1 className="display-5">Responsive Design</h1>
                               <h4>Convert mobile visitors to leads through a mobile friendly design</h4>
                          </div>
                     </div>
                </div>
             </div>
         </div>
        

         <div className="container-fluid p-4 bgbox1">

             <h1 className="fw-bold text-center ">Designs that Adapt to Any Screen Size</h1>
             <h6 className="text-center head4">Keep phone and tablet visitors on your site longer, improve site sales, and increase visitor engagement. Here’s how:</h6>
        </div>


        
        <div className="container mt-5">
           <div className="row">
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3   d-md-flex justify-content-md-center align-items-md-center">
                     <i className="bi bi-hand-thumbs-up display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>No More Pinching and Zooming</h4>
                        <p>Pinching and zooming to see content on a site without a responsive layer is frustrating and causes visitors to leave. Our mobile layers solve this problem.</p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                   
                     <i className="bi bi-graph-up-arrow display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Engage with Your Visitors</h4>
                        <p>
                        Mobile layers dramatically improve the website experience for visitors, which results in more opportunities for your visitors to engage with your business.
                        </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                     
                     <i className="bi bi-clipboard2-data display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Boost Your Analytics</h4>
                        <p>
                        Websites with mobile layers consistently see longer site visits, more page views, and fewer abandoned forms and carts.
                        </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                     
                     <i className="bi bi-phone display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Easy to Manage</h4>
                        <p>
                        Our responsive designs adapt a single set of content to a variety of layouts for different devices.
                        </p>
                     </div>
                  </div>  
               </div>
              
           </div>
        </div>


        {/* <div className="container mt-4">
        <h2 className="text-center fw-bold">Check Out Some of Our Responsive Designs</h2>
            <div className="row mt-4 d-flex justify-content-center ">
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2015/07/ucb-desktop-650x475.jpg"} className="card-img" alt="" />
                 <p className="text-center">UC Berkeley School of Law</p>
            </div> 
                             
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2013/10/MN-Builders-650x475.jpg"} className="card-img" alt="" />
                 <p className="text-center">Mueller Nicholls</p>
            </div> 

           <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2014/07/clinelawgroup-650x475.jpg"} className="card-img" alt="" />
                 <p className="text-center">Cline Law Group</p>
            </div>                    
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2016/07/la-tourangelle-desktop-650x475.png"} className="card-img" alt="" />
                 <p className="text-center">La Tourangelle</p>
            </div> 
           
            </div>
            <div className="row mt-4">
               <div className="col-md-2 m-auto">
                <button className="btn btn-warning  w-100">View Portfolio</button>
               </div>
            </div>
        </div>

        <div className="container mt-5">
        <h2 className="text-center fw-bold"> What our customers are saying...</h2>
            <div className="row mt-3 d-flex justify-content-evenly">

               <div className="col-md-5 mb-3">
                <div className="card customerSayBox shadow-sm">
                    <div className="card-body">
                         <p className="card-text">
                         <i className="bi bi-quote display-6"></i>  The team at Computer Courage made a real effort to understand our business and what makes us unique. It was a pleasure to talk to them about what we wanted in our website because they seemed so interested in the process. Their market research confirmed a lot of things we already thought we knew, but also drew out new insights and articulated them in helpful ways. Overall, the creative process was a lot of fun.
                         </p>
                         <div className="row mt-2 d-flex justify-content-end">
                               <div className="col-sm-7 mt-1">
                                <div className="row">
                                <div className="col-sm-2">
                                   <img src="data:image/jpeg;base64,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" width={50} height={50} className="rounded rounded-circle" alt="" /> 
                                </div>
                                <div className="col-sm-10 ps-3 mt-1"> 
                                <h6 className="mb-0">MICHAEL O'DONNELL</h6>
                                   <small className="">Executive Director UC Berkeley</small>
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
                         <i className="bi bi-quote display-6"></i>  Computer Courage designed and developed a makeover of our company website.  We are very pleased with the results.  The staff are super professional, responsive, and skilled.  A special thank you to Kyla Garrow & Mindy Lue.  We have a complex business with many hurdles to jump to present content efficiently and completely.  Kyla managed our project every step of the way, and Mindy “The Genius” made it all work so well.  And, CC quoted with care, and actually came out under their initial estimate for the job. Thank you to Computer Courage.  If you need a new or updated website, you should give them a call.
                         </p>
                         <div className="row mt-2 d-flex justify-content-end">
                               <div className="col-md-6 mt-1">
                                <div className="row">
                                <div className="col-sm-3 ">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2017/08/Beth-150x150.jpg" width={50} height={50} className="rounded rounded-circle " alt="" /> 
                                </div>
                                <div className="col-md-9 ps-3  mt-1"> 
                                <h6 className="mb-0">BETH GREEN</h6>
                                   <small className="">Assay Technology</small>
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
                         <i className="bi bi-quote display-6"></i> You and your team turned this vague vision into an incredible reality, and it has truly been an honor to work with you. The reaction from the extended L4LM team, community, etc. has been so overwhelmingly positive just within this first hour.
                         </p>
                         <div className="row mt-2 d-flex justify-content-end">
                               <div className="col-sm-7 mt-1">
                                <div className="row">
                                <div className="col-sm-2">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2016/09/L4LMsticker-150x150.png" width={50} height={50} className="rounded rounded-circle" alt="" /> 
                                </div>
                                <div className="col-sm-10 ps-3 mt-1"> 
                                <h6 className="mb-0">DAVE MELAMED</h6>
                                   <small className="">Editor-in-Chief, Live for Live Music</small>
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
                         <i className="bi bi-quote display-6"></i>  The best thing about working with Computer Courage is that everyone made sure to understand exactly what I wanted for my website.
                         </p>
                         <div className="row mt-2 d-flex justify-content-end">
                               <div className="col-sm-6 mt-1">
                                <div className="row">
                                <div className="col-sm-3">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2016/08/Julio-150x150.png" width={50} height={50} className="rounded rounded-circle" alt="" /> 
                                </div>
                                <div className="col-sm-9 ps-3 mt-1"> 
                                <h6 className="mb-0">JULIO HALLIVIS</h6>
                                   <small className="">Cinema Thread</small>
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
                  <div className="landing-page1">
                     <div className="wrapper1 ps-4">
                              <div className="container p-4 w-100 h-100 d-md-flex align-items-md-center align-content-md-between"> 
                                  <div className="col-md-6"> 
                                   <h2 className=" text-white">Get Started with WordPress Today</h2>
                                      <ul className="mt-3 mb-3 fs-5">
                                          <li>Talk with a WordPress expert</li>
                                          <li>Get your questions answered</li>
                                          <li>Get recommendations for changes to your site</li>
                                           <li>Speed up and optimize your existing WordPress site</li>
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
         


         <div className="container mt-5">
           <div className="row">
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3   d-md-flex justify-content-md-center align-items-md-center">
                     <i className="bi bi-door-open display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Lower Bounce Rate</h4>
                        <p>A “bounce rate” is the percentage of sessions in which the person left your site from the entrance page without interacting with the page. Sites with mobile designs see a lower bounce rate than those without.</p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                   
                     <i className="bi bi-graph-up display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>More Pages Visit</h4>
                        <p>
                        Sites with mobile designs see a higher number of pages viewed per visit after the mobile design than before.                        </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                     
                     <i className="bi bi-ui-checks display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>More time on each page</h4>
                        <p>
                        Mobile visitors actually read content when it’s presented to them in an easy to view format and they don’t have to pinch, zoom, pan, and squint to keep reading.                        </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                     
                     <i className="bi bi-telephone-outbound display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>More Inquiries</h4>
                        <p>
                        Mobile visitors respond well to inquiry forms that are easy for them to enter data into, sized for their screen, and fast to load.                        </p>
                     </div>
                  </div>  
               </div>
              
           </div>
        </div>



        {/* <div className="container-fluid p-0 m-0 mb-4">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page4 responsiveDesignHeaderImage">
                     <div className="wrapper4 ps-4 ">
                         <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
                              <div className="col-sm-8">
                              <h4 className="">Upgrade to Responsive</h4>
                               <h6>Speak with our web design experts about adding a mobile layer to your WordPress website.</h6>
                              </div>
                              <div className="col-sm-4">
                                   <button className="btn btn-warning w-100">Get a Mobile Site</button>
                              </div>
                         </div>
                               
                          </div>
                     </div>
                </div>
             </div>
         </div> */}


         <div className="container mt-5">
            <h3 className="text-center">Who is Viewing My Website on a Mobile Phone?</h3>
           <div className="row mt-5">
               <div className="col-md-4 mb-2">
                  <div className="row">
                     <div className="col-sm-3   ">
                     <i className="bi bi-file-bar-graph display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>	Google Searchers</h4>
                        <p>Over 20 percent of Google searches are now performed on some sort of mobile device.</p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-4 mb-2">
                  <div className="row">
                     <div className="col-sm-3 ">
                   
                     <i className="bi bi-phone display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Local Customers</h4>
                        <p>In 2012 over half of all local searches were done on a mobile device.                                    </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-4 mb-2">
                  <div className="row">
                     <div className="col-sm-3 ">
                     
                     <i className="bi bi-pie-chart display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>A Quarter of the Web</h4>
                        <p> 25 percent of Internet users only access the internet via a mobile device in the US.                                    </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-4 mb-2">
                  <div className="row">
                     <div className="col-sm-3 ">
                     
                     <i className="bi bi-envelope display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>People Checking their Email</h4>
                        <p>25.85 percent of all emails are opened on mobile phones, with another 10.16 percent being opened on tablets.                                  </p>
                     </div>
                  </div>  
               </div>
              
               <div className="col-md-4 mb-2">
                  <div className="row">
                     <div className="col-sm-3 ">
                     
                     <i className="bi bi-graph-up-arrow display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>More Visitors Every Day</h4>
                        <p>In 2014 mobile Internet usage is expected to overtake desktop usage. </p>
                     </div>
                  </div>  
               </div>


               <div className="col-md-4 mb-2">
                  <div className="row">
                     <div className="col-sm-3 ">
                     
                     <i className="bi bi-mortarboard display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Young Professionals</h4>
                        <p>
                        Mobile phones are being used for business by everyone, especially by the newer generation of consumers and businesses.
                        </p>
                     </div>
                  </div>  
               </div>

               
           </div>
        </div>


        <div className="container mt-5 mb-5">
                  <div className="row">
                     <div className="col-sm-10 m-auto">
                        <h4 className="text-center fw-bold">Frequently Asked Questions about Responsive Design</h4>

                        <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                WHAT DOES MY SITE LOOK LIKE ON A MOBILE PHONE IF I DON'T HAVE A RESPONSIVE DESIGN LAYER?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>If you don’t have a mobile design layer on your site, your site will render identically to the desktop version on a mobile device.  This may mean visitors will need to pinch, zoom or scroll to see all the content of the site.  Elements like videos and animation may not appear on the mobile site.</p>  
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                  WHAT'S THE DIFFERENCE BETWEEN A MOBILE WEB DESIGN AND A MOBILE APP?                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                      <p>A mobile website is similar to any other website in that it consists of browser-based HTML pages that are linked together and accessed through a web browser.  A mobile website from is designed for the smaller handheld display and touch-screen interface. Like any website, mobile websites can display text content, data, images and video. They can also access mobile-specific features such as click-to-call (to dial a phone number) or location-based mapping.</p>
                                    <p>Apps are actual applications that are downloaded and installed on your mobile device, rather than being rendered within a browser.  Usually these apps are cataloged and downloadable from Apple’s App Store and Android Market. The app may pull content and data from the Internet, in similar fashion to a website, or it may download the content so that it can be accessed without an Internet connection</p>
                               
                                </div>
                                </div>
                            </div>
                           
                         </div>
                     </div>
                  </div>
                 </div>


        </>
    )
}

export default ResponsiveDesign;