import React from "react";
import Navbar from "../Component/Navbar";


const ContactUsPage=()=>{
    return (
        <>
        
         <Navbar/>

             <div className="container mt-4">
                 <div className="row">
                     <div className="col-sm-12">
                         <h4>Contact Us</h4>
                         <p>
                         If you're seeking reliable and efficient IT support for your personal devices, look no further. Get in touch with us today to discuss your technology needs, and let us provide you with the peace of mind knowing that your devices are in capable hands. We look forward to serving you and being your trusted IT support partner.
                         </p>
                     </div>
                 </div>
             </div>

         <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Name</label>
                        <input type="text" className="form-control border border-dark" id="exampleInputText1" aria-describedby="textHelp"/>
                        {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Email Address</label>
                        <input type="email" className="form-control border border-dark" id="exampleInputText1" aria-describedby="textHelp"/>
                        {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Phone Number</label>
                        <input type="number" className="form-control border border-dark" id="exampleInputText1" aria-describedby="textHelp"/>
                        {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">What can we help you with today ? </label>
                        <input type="text" className="form-control border border-dark" id="exampleInputText1" aria-describedby="textHelp"/>
                        {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control border border-dark" id="exampleFormControlTextarea1" rows={3}></textarea>
                    </div>
                    <div className="mb-3">
                           <button className="btn btn-warning w-100">Submit</button>
                    </div>
                </div> 
            </div>
         </div>     


           {/* <div className="container mt-4">
            <div className="row">
                <div className="col-sm-9 m-auto">
                <div className="row d-flex justify-content-evenly">
                <div className="col">
                  <h4>Computer Courage</h4> 
                  <p>6550 Vallejo Street, Suite 102 <br />
                    Emeryville, CA 94608<br />
                    (510) 525-2226<br />
                    Public Transportation Directions<br />
                    Driving Directions</p>
                </div>
                <div className="col">
                <h4>IT Sales</h4> 
                 <p>Alyssa Tojino<br />
                    510-525-2226<br />
                    alyssa@computercourage.com</p>
                </div>
                <div className="col">
                <h4>Web Sales</h4> 
                 <p>Adam Schwartz<br />
                    510-900-3012<br />
                    adam@computercourage.com</p>
                </div>
            </div>
                </div>
            </div>
           </div> */}
        
        </>
    )
}

export default ContactUsPage;