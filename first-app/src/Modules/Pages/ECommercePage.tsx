import React from "react";
import Navbar from "../Component/Navbar";


const ECommercePage=()=>{
     return(
        <>
          <Navbar/>
         <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page2 ecommerceImage">
                     <div className="wrapper2 ps-4 ">
                               <h1 className="display-5">eCommerce</h1>
                               <h4>Grow your business by selling products and services online</h4>
                          </div>
                     </div>
                </div>
             </div>
         </div>
        


         <div className="container-fluid p-4 bgbox1">
             <h5 className="text-center">It's easy to get started</h5>
             <h1 className="display-4 fw-bold text-center">We build custom eCommerce solutions</h1>
             <h6 className="text-center">We develop customized online stores, shopping carts, order management systems and payment systems that are accessible from within your WordPress website.</h6>
        </div>


        <div className="container mt-4">
            <div className="row">
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     
                     <i className="bi bi-credit-card-2-front  display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Payments</h4>
                        <p>Collect payments through PayPal or credit cards.  We can integrate almost any payment gateway into your solution.</p>
                     </div>
                  </div> 
                 </div>

           

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                    
                     <i className="bi bi-truck  display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Shipping</h4>
                        <p>Set up shop with the options of offering free shipping, or flat rate shipping. You can choose from your favorite shipping provider.</p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-box    display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Inventory</h4>
                        <p>Easily manage your digital or physical products with our intuitive and WP centric UI. Rest assured your shop will scale with your growth.</p>
                     </div>
                  </div> 
                 </div>
                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-clipboard2-data    display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Reporting</h4>
                        <p>Keep a birds-eye view of incoming sales & reviews, stock levels & general store performance, all from your WordPress backend.</p>
                     </div>
                  </div> 
                 </div>

                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className="bi bi-envelope-paper     display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Marketing</h4>
                        <p>Run complex coupon campaigns offering a range of discount options, usage limits & product / user restrictions as well as free shipping.</p>
                     </div>
                  </div> 
                 </div>


                 <div className="col-md-4">
                 <div className="row">
                     <div className="col-md-4 text-md-end">
                     <i className=" bi bi-cash-coin    display-2 text-success"></i>
                     </div>
                     <div className="col-md-8">
                        <h4>Taxes</h4>
                        <p>Tax is the last thing you want to think about when opening a shop. We’ve made it simple. Configure tax settings with tax classes & local tax rates.</p>
                     </div>
                  </div> 
                 </div>

              
                
            </div>
        </div>

{/* 
        <div className="container mt-4">
        <h2 className="text-center fw-bold">Featured Work</h2>
            <div className="row mt-4 d-flex justify-content-center ">
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2016/07/la-tourangelle-desktop-650x475.png"} className="card-img" alt="" />
                 <p className="text-center text-muted">La Tourangelle</p>
            </div> 
                             
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2015/12/nab-desktop-650x475.jpg"} className="card-img" alt="" />
                 <p className="text-center text-muted">North Atlantic Books</p>
            </div> 

           <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2014/11/Palm-Press-650x475.jpg"} className="card-img mb-1" alt="" />
                 <p className="text-center text-muted">Palm Press  </p>
            </div>                    
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2017/03/biochain-desktop-650x475.png"} className="card-img mb-1" alt="" />
                 <p className="text-center text-muted">BioChain</p>
            </div> 
           
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2015/07/lwe-desktop-650x475.jpg"} className="card-img mb-1" alt="" />
                 <p className="text-center text-muted">Lindsay Wildlife Experience</p>
            </div> 
           
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2015/07/mayfest-desktop-650x475.jpg"} className="card-img mb-1" alt="" />
                 <p className="text-center text-muted">MAYfest NY Festival</p>
            </div> 
           
            <div className="col-md-3">
                 <img src={"https://www.computercourage.com/wp-content/uploads/2015/12/bw166-desktop-650x475.jpg"} className="card-img mb-1" alt="" />
                 <p className="text-center text-muted">BW166</p>
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
                  <div className="landing-page3 ecommerceContactImage">
                     <div className="wrapper3 ps-4">
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



         <div className="container mt-3 mb-5">
                  <div className="row">
                     <div className="col-sm-10 m-auto">
                        <h4 className="text-center fw-bold">Frequently Asked Questions about eCommerce</h4>

                        <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                CAN I USE MY CURRENT SHIPPING PROVIDER?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Yes.  We develop our custom eCommerce solutions to work with the major shipping supplies like UPS, FedEx and UPS.  You can select your preferred shipping provider or you can let your customers decide on the shipping method.  You may choose to have flat rate shipping or you can generate the rates automatically based on the shipping location and product size.</p>  
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                WILL YOU TRAIN MY STAFF HOW TO USE THE SYSTEM?

                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                   <p>Absolutely.  All of our eCommerce solutions include individual or small group training.  We deliver training in-person, by phone or through web  conference.</p>    
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                WHAT TYPE OF FEES SHOULD I EXPECT TO CHARGE FOR EACH TRANSACTION?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>This depends on which platform we use to build the eCommerce store and the payment gateway you select.  The fees range from $0/transaction up to 2.9% + $.30/transaction.</p>        
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


export default ECommercePage;
