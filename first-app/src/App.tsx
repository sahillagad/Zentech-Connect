import React from 'react';
import './App.css';
import Navbar from './Modules/Component/Navbar';
import RequestFreeConsultation from './Modules/Pages/RequestFreeConsultation';
import WordPressDevelopmentPage from './Modules/Pages/WordPressDevelopmentPage';
import WebApplicationPage from './Modules/Pages/WebApplicationPage';
import DesignPrintPage from './Modules/Pages/DesignPrintPage';
import ECommercePage from './Modules/Pages/ECommercePage';
import ResponsiveDesign from './Modules/Pages/ResponsiveDesign';
import WebSecurityPage from './Modules/Pages/WebSecurityPage';
import ManagedITServices from './Modules/Pages/ManagedITServices';
import DesktopUserSupportPage from './Modules/Pages/DesktopUserSupportPage';
import EmailAndCloudServices from './Modules/Pages/EmailAndCloudServices';
import ServerAndNetworkSupportPage from './Modules/Pages/ServerAndNetworkSupportPage';
import SecurityAndVirusProtection from './Modules/Pages/SecurityAndVirusProtection';
import BackupDisasterRecovery from './Modules/Pages/BackupDisasterRecovery';
import OverviewPage from './Modules/Pages/OverviewPage';
import ContactUsPage from './Modules/Pages/ContactUsPage';
import MeetTheTeamPage from './Modules/Pages/MeetTheTeamPage';
import CareersPage from './Modules/Pages/CareersPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Modules/Pages/Home';
import Footer from './Modules/Component/Footer';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    


            <BrowserRouter>
            
                  <Routes>
                      <Route path={"/"} element={<Home/>}></Route>
                      <Route path={"/RequestFreeConsultation"} element={<RequestFreeConsultation/>}></Route>
                      <Route path={"/webDevelopment/WordPressDevelopmentPage"} element={<WordPressDevelopmentPage/>}></Route>
                      <Route path={"/webDevelopment/WebApplicationPage"} element={<WebApplicationPage/>}></Route>
                      <Route path={"/webDevelopment/DesignPrintPage"} element={<DesignPrintPage/>}></Route>
                      <Route path={"/webDevelopment/ECommercePage"} element={<ECommercePage/>}></Route>
                      <Route path={"/webDevelopment/ResponsiveDesign"} element={<ResponsiveDesign/>}></Route>
                      <Route path={"/webDevelopment/WebSecurityPage"} element={<WebSecurityPage/>}></Route>
                      
                      
                      <Route path={"/ITSupport/ManagedITServices"} element={<ManagedITServices/>}></Route>
                      <Route path={"/ITSupport/ServerAndNetworkSupportPage"} element={<ServerAndNetworkSupportPage/>}></Route>
                      <Route path={"/ITSupport/DesktopUserSupportPage"} element={<DesktopUserSupportPage/>}></Route>
                      <Route path={"/ITSupport/SecurityAndVirusProtection"} element={<SecurityAndVirusProtection/>}></Route>
                      <Route path={"/ITSupport/EmailAndCloudServices"} element={<EmailAndCloudServices/>}></Route>
                      <Route path={"/ITSupport/BackupDisasterRecovery"} element={<BackupDisasterRecovery/>}></Route>
                      
                      
                      
                      <Route path={"/AboutUs/OverviewPage"} element={<OverviewPage/>}></Route>
                      <Route path={"/AboutUs/ContactUsPage"} element={<ContactUsPage/>}></Route>
                      <Route path={"/AboutUs/MeetTheTeamPage"} element={<MeetTheTeamPage/>}></Route>
                      <Route path={"/AboutUs/CareersPage"} element={<CareersPage/>}></Route>

                  </Routes>
                  <Footer/>
            </BrowserRouter>





    </>
  );
}

export default App;
