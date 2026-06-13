import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/Landing_Page/LandingPage"
import Sign_Up from "./Components/Sign_Up/Sign_Up"
import Login from "./Components/Login/Login"
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation.jsx"
import AppointmentForm from "./Components/AppointmentForm/AppointmentForm.jsx"
import BookingConsultation from "./Components/BookingConsultation.jsx"
import Notification from "./Components/Notification/Notification.jsx"

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          {/* <Navbar/> */}

          {/* <LandingPage/> */}
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/Sign_Up' element={<Sign_Up/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/instant-consultation' element={<InstantConsultation/>}/>
              <Route path='/AppointmentForm' element={<AppointmentForm/>}/>
              <Route path='/BookingConsultation' element={<BookingConsultation/>}/>
              <Route path='/Notification' element={<Notification/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
