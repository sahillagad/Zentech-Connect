import React from "react";
import Navbar from "../Component/Navbar";

const MeetTheTeamPage=()=>{
    return(
        <>
        <Navbar/>

        <div className="container mt-3 mb-3">
             <div className="row">
                   <div className="col-sm-12">
                   <h1 className="text-center">Meet the Team</h1>
                   <h6 className="text-center">Each member of the Computer Courage staff represents our company philosophy of friendly support, helpful explanation, and professional knowledge.</h6>
                   </div>
             </div>
        </div>
       


        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2014/11/Adam2019-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Adam Schwartz</p>
                  <p className="text-center p-0 m-0">CEO & Founder</p>
            </div>
            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2014/11/Sam-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Sam Morris</p>
                  <p className="text-center p-0 m-0">Director of Web Services</p>
            </div>


            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2014/11/Kyla-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Kyla Garrow</p>
                  <p className="text-center p-0 m-0">Web Operations Manager</p>
            </div>

            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2020/11/Eric_2-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Eric Stroo</p>
                  <p className="text-center p-0 m-0">Director of Strategy</p>
            </div>

            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2022/06/Gina-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Gina Nowicki</p>
                  <p className="text-center p-0 m-0">Director of Brand Marketing</p>
            </div>


            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2016/11/Wes-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Wesley Lai</p>
                  <p className="text-center p-0 m-0">Senior Digital Strategist</p>
            </div>

            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2018/08/Michael-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Michael Rutledge</p>
                  <p className="text-center p-0 m-0">Web Project Manager</p>
            </div>


            <div className="col-md-3 col-sm-4 mb-2">
                <img src="https://www.computercourage.com/wp-content/uploads/2014/11/Mindy-768x768.jpg" className="img-fluid rounded rounded-circle" alt="" />                       
                   <p className="text-center fw-bold p-0 m-0">Mindy Lue</p>
                  <p className="text-center p-0 m-0">Lead Web Developer</p>
            </div>
          </div>
        </div>        


        </>
    )
}

export default MeetTheTeamPage;