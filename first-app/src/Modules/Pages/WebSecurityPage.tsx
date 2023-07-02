import React from "react"
import Navbar from "../Component/Navbar";

const WebSecurityPage=()=>{
    return(
        <>
        
        <Navbar/>
        <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page2 responsiveDesignHeaderImage">
                     <div className="wrapper2 ps-4 ">
                               <h1 className="display-5">Web Security</h1>
                               <h4>Secure your website from internet threats and security breaches</h4>
                          </div>
                     </div>
                </div>
             </div>
        </div>

        <div className="container-fluid p-4 bgbox1">
        <h2 className="fw-bold text-center">Web security is more important than ever.</h2>
        <h6 className="text-center">We help people secure their websites and keep them that way. We clean up hacked websites, identify the source of the problem, and help site owners improve their security</h6>
        </div>



   
        <div className="container mt-5">
           <div className="row">
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3   d-md-flex justify-content-md-center align-items-md-center">
                     <i className="bi bi-bricks display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Secure Websites</h4>
                        <p>We block tens of thousands of known attacks, and we update our system every day to ensure even the newest attacks are blocked right away.</p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                   
                     <i className="bi bi-key display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Authentication Strategy</h4>
                        <p>
                        Multiple users accessing your site?  We’ll provide you with recommendations on the best way to securely authenticate and manage users.                        </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                     
                     <i className="bi bi-qr-code-scan display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Vulnerability Scan</h4>
                        <p>
                        Never wake up to your site having been hacked again. We automatically scan for, and fix, hacking attempts on your site.                        </p>
                     </div>
                  </div>  
               </div>
               <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-3 d-md-flex justify-content-md-center align-items-md-center">
                     
                     <i className="bi bi-database-lock display-2 text-success"></i>
                     </div>
                     <div className="col-sm-9">
                        <h4>Restore Hacked Site</h4>
                        <p>
                        Has your site been hacked?  Call us today and we can help you determine the cause of the hack and restore your site to its original condition.                       
                         </p>
                     </div>
                  </div>  
               </div>
              
           </div>
        </div>
        {/* <div className="container mt-5">
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
                                   <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAGAAYAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAQIHAP/aAAgBAQAAAABwtPJlzgDRcIPYxTDNsZDhACCs4x00+gS1P7QS7ohZyzFEka3wl4o76RtHtPCrXY6JQnLQKUHadYBjpCBVpktNMfGAL0xbXNCBPEQsVdc6/DWs1pjKuaNa5XOz+Sie8YFtUdKh3ZdUC30x4AaCzc6t+tZWP7IYrqiRwv8A/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/9oACgICEAMQAAAAx757KKjKLYCyXLmQUF5poFuA4LfJHeylUbp3xy1c/cUeFc3HN6RL5tGL/8QAMxAAAgEDAwIEBAQGAwAAAAAAAQIDAAQRBRIhMUETIlFhBjJxgRAUkcEjNEJSsdFyc6L/2gAIAQEAAT8A1GTBiXNQnc0knP8AFkJ+3QUh680g4pT71mm6daY802RHg1OW2+/So5GjaQ58pHNSuQ+V6E8f6rVcbvcIW/YVFwqj2pTg+5pDii2KzTcLzTjOaOAuM9qmGVODTMEIB6EHcfahIUkdG6birfWtTJM8g9Y1x7AVAwaMYFRkdO47UZY1UEsKEsbRggg08oUZq+1JbaPIQMxxgZxTX8ot2nkEarnA2kuf8CpL25mbdGDsBBwTsP2zSa3bu5hYSCbOApWrqd2RiqgZBA7mopmbL5zk5Oa1bEc8D9mQgj2zVnfRQwTmeRUEbsCT+3rTXN0ZGMaOA3RT82KS2laQtdTNGMDGMM2fpmkvxGBH4LY/pfPzfUdjTX6NAXSKUkDuMAcZpllnkDyAlRzwepp3v4ljNrBCRz5dgY/qSKY6i6ZubaDHcIcEVJYPDdxug2s8DjP/ABI/Y0sZ2tv6mpB4UeT0zWsiQEPnOMAVPbeNcwv2jnjyMcEO2KMVxKoaKTw94A3jrgVHpNtndJM/QZwfmI7k1BCu0ZAKk+WrOFXt2yg82TVqIwjRkcr/AIopcx5EGzHvijayIN877iT0FXf81GoOditn2L44qYYdh70tol0qROSBnPHcjnFXVst1BLCf61wD6Hsa/KvudH8pZShPdWU5H6EVaKzxArFhBwygfK/cVFaROu/wh9xU91bhjbxyq0xBBC87R3JIqIBYmAOAFqUtkbAd3UMOCKgudR4Bltmx/fGQf/NStqLjm5hj/wCqPn9WpbdYjlnZj6mrviUVDIQ6nHQ/hqcaJK7AAF1D/cHBqSFJWB3Mp9VODT2UG3Ekk0h9GkYilNrYpuVAq9CVFQahEImKOhVxip9XEMhjihaaQdl6CrWa6llMkkXhoExjPUmvzO07GNPlhxV4uChq2njhuYnkPkWQFvp+GqIDCj/2sQfowrzDFFnmk2IeB8xobNuCauNNWbm1fwpD16YNW2lraBjNNvZjknAFSSwxLUN7byyeENpdh0yM0IQsOffFaiB4efSpD/Cc+o/C5gFxBJETjcOD6EVJBJbTeFKwdsA7gMA5qa3QxYj8rN3q+h1eB1MboU3AEhfMBSS2KEKb66DYXJELkZ74wtPJprhwH1K5OBjZEUH6ttqa0N3lI7LwUJ+eSXe3THQcVp2m21lHtjXzE5Zu7GpnCx4NXz5hmancEMO346wYkFuxcCTdgDuVNRPuFSjIJAziogCOFx9qCTMvlbj0xipEkHBwKTCge3eobS41OZo42TftaR3kbaqqvJJJq4+H7to5PBvLCYojSFI51ZyEGTgU7YwO5NSapYRZzcBiOyAtU2ugA+DAfZpP9Ctbupo7OSd3JmkcYatM1AXECP0bHnX0NJIrgMp+tIMN1pOBtB6ipuPSrmeOEMxPFfC91aSarJFdTKkU1rLHlmC/NU1hpthPf3dvq1utobWcraiUNiZ4ymRXxDFGlxpQjRVzpdqxwMZJXk0kIVATzk4Hp9BUgJzlcKpGTjvXxM5K2654LHjHpVtNJCN8Zwwq01d0YMVyh6gUt/GVWRXyp70l7GPOH5xxzwM1c6inLNJwDyTV7fS3knHCDoKCjBJ6UPiJ4kSMaZpbbFC7mtVJNXN9candvcXBXIh2qqKFVVUYCqB0Ar//xAAgEQACAgICAgMAAAAAAAAAAAAAAQIREDESIQNBIjJx/9oACAECAQE/AJ6I4eF9USVoURip7R8SMuqG+LLdlvDESVoooaSJIWGqZvoqvQk5eyPi7SbOJOHJfg0xnjIbR//EACIRAAICAgEEAwEAAAAAAAAAAAABAhEDIRIxMkFhEyNCUf/aAAgBAwEBPwDD3ngojqxmRVNmOXGY8vpkJWTc/wAvR9iqpdf6ZMd0yGNTT9ChFxVkIRHDi3Ss4t7dDMTqa96FKKiczm222LLeiTpibTTIv5I2+vk41tSaOKfdKTJyWOnRPPptLoh5GYcrxy9MhNMTpszO6om9NH//2Q==" width={50} height={50} className="rounded rounded-circle" alt="" /> 
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
                                   <h2 className=" text-white">Free Web Security Consultation</h2>
                                      <ul className="mt-3 mb-3 fs-5">
                                          <li>Is your site vulnerable to attacks?</li>
                                          <li>Audit your current security procedures.</li>
                                          <li>Get your web security questions answered</li>
                                           <li>Learn about options for upgraded security</li>
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
          <h2 className="text-center">Get guaranteed security with our WordPress Hosting & Security services</h2> 

            <div className="row mt-4">
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     
                     <i className="bi bi-tools  display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Automatic Upgrades</h4>
                        <p>WordPress will be upgraded automatically for security and features</p>
                     </div>
                  </div> 
                 </div>

           

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                  
                     <i className="bi bi-lock  display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Security</h4>
                        <p>Your site will be regularly scanned for security and any issues will be fixed for you</p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-person-fill-lock   display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Reliability</h4>
                        <p>
                        Your site will be up and ready when you need it most
                        </p>
                     </div>
                  </div> 
                 </div>
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-shield-check   display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Hack Protection</h4>
                        <p>
                        If your site is hacked, CC will fix the problem free of charge
                        </p>
                     </div>
                  </div> 
                 </div>

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-stopwatch  display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Support</h4>
                        <p>
                        Computer Courage will be available for immediate support during business hours. 24/7 support is included
                        </p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-award      display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Extras</h4>
                        <p>CDN (for speed), SSL (for security), site monitoring, and yearly review all included</p>
                     </div>
                  </div> 
                 </div>

              
                
            </div>
        </div>
        </>
    )
}

export default WebSecurityPage;
