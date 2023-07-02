import Rect from "react"
import { Link } from "react-router-dom";

const RequestFreeConsultation=()=>{
    return(
        <>
         

         <div className="container mt-5">
            <div className="row">
               <div className="col-md-5 m-auto">
                   <div className="card p-2 shadow-sm">
                      <div className="card-header ">
                         <h3 className="fw-light text-center">Request Free Consultation*</h3>
                         <small className="text-center">
                         Free consultation offer is for qualifying business or web development inquiries. Residential customers should request an appointment on the Residential Services page
                         </small>
                      </div>
                      <div className="card-body">

                         <form>
                           <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Name"/>
                            {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                           </div>
                           <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Email Address"/>
                            {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                           </div>
                           <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Website"/>
                            {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                           </div>
                           <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Phone"/>
                            {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                           </div>
                           <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Anything you'd Like to Add ? "></textarea>
                            {/* <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div> */}
                           </div>

                           <div className="row mb-3">
                            <div className="col-sm-6 mb-sm-2">
                            <button type="submit" className="btn btn-primary w-100 mb-2">Submit</button>
                            </div>
                            <div className="col-sm-6">
                             <Link to={"/"}>
                             <button type="submit" className="btn btn-danger w-100">Cancel</button>

                              </Link> 
                            </div>
                          
                           </div>
                         </form>                         

                      </div>
                   </div>
               </div>
            </div>
         </div>
                       

        </>
    )
}

export default RequestFreeConsultation;
