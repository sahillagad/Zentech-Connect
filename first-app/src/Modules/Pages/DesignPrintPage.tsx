import React from "react";
import Navbar from "../Component/Navbar";


const DesignPrintPage=()=>{
    return(
        <>

         <Navbar/>
         <div className="container-fluid p-0 m-0">
             <div  className="row p-0 m-0">
                <div className="col-sm-12 p-0 m-0">
                  <div className="landing-page2 Designimage">
                     <div className="wrapper2  ps-4">
                               <h1 className="display-5">Graphic and Print Design</h1>
                               <h4>We build beautiful custom graphic and print design for business</h4>
                          </div>
                     </div>
                </div>
             </div>
         </div>
         
         <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                     <i className="bi bi-palette2 display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Logos</h4>
                        <p>Elegant, modern logos to center your brand</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                    
                     <i className="bi bi-book display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Brochures</h4>
                        <p>Full color brochures with multiple layout options</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">

                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                     
                     <i className="bi bi-briefcase display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Business Cards</h4>
                        <p>Stand out with unique business card designs and formats</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                    
                     <i className="bi bi-card-text display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Letterhead</h4>
                        <p> Traditional or modern letterhead design for professional appeal</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                     <i className="bi bi-badge-ad display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Advertisements</h4>
                        <p> Print and web advertisements to help get the word out</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                     <i className="bi bi-file-post display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Posters</h4>
                        <p> Professionally designed posters for your office, booth, or product</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                     <i className="bi bi-graph-up-arrow display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Annual Reports</h4>
                        <p> Beautiful annual reports make your organization’s success tangible</p>
                     </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                     <div className="col-sm-4 text-md-center">
                     <i className="bi bi-postcard display-4 text-success"></i>
                     </div>
                     <div className="col-sm-8">
                        <h4>Mailers and Postcards</h4>
                        <p>Get the word out with eye catching mailers and postcards</p>
                     </div>
                  </div>
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
        </div>


 
        <div className="container-fluid mt-5">
             <div className="row pt-5 bgbox1 pb-5">
                  <div className="col-md-12 ">
                  <h3 className="text-center text-muted">Developed from the ground up</h3>
                   <h1 className="display-6 fw-bold text-center">Discover the advantage of a custom solution</h1>
                 
                     <div className="container mt-5">
                          <div className="row d-md-flex justify-content-md-center align-items-md-center ">
                             <div className="col-sm-5 mb-sm-4">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2017/03/ipad-820272_1920-675x380.jpg" className="img-fluid rounded rounded-3" alt="" />
                             </div>
                             <div className="col-sm-5">
                                       <h2>Beautiful Custom Design</h2>
                                       <p>Our designers have a passion for beautiful branding and design materials. Let us extend our design vision beyond the screen for you.</p>
                             </div>
                          </div>
                     </div>
                  </div>
                  <div className="col-md-12  ">
                
                     <div className="container">
                          <div className="row d-md-flex justify-content-md-center align-items-md-center">
                          <div className="col-sm-5">
                                       <h2>Ready for Press</h2>
                                       <p> We work with local printing presses to present you with affordable, high quality print services. Fast turnaround times, hardcopy comps, and local business.</p>
                             </div>
                             <div className="col-sm-5 mb-sm-4">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2014/07/color-paint-palette-wall-painting-675x380.jpg" className="img-fluid rounded rounded-3" alt="" />
                             </div>
                          
                          </div>
                     </div>
                  </div>
                  <div className="col-md-12 ">
            
                 
                     <div className="container mt-4">
                          <div className="row d-md-flex justify-content-md-center align-items-md-center ">
                             <div className="col-sm-5 mb-sm-4">
                                   <img src="https://www.computercourage.com/wp-content/uploads/2017/03/bench-accounting-49908-675x380.jpg" className="img-fluid rounded rounded-3" alt="" />
                             </div>
                             <div className="col-sm-5">
                                       <h2>	Flexible Pricing Models</h2>
                                       <p>We offer both hourly and fixed rate pricing models for design services, giving you control over your budget and the scope of work.</p>
                             </div>
                          </div>
                     </div>
                  </div>
             </div>
         </div>
        </>
    )
}

export default DesignPrintPage;