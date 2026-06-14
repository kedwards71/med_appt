// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import './Notification.css'
import Navbar from '../Navbar/Navbar';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
        if(localStorage.getItem('doctorData')!=null && sessionStorage.getItem('email')!=null)
        {
            // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
            const storedUsername = sessionStorage.getItem('email');
            const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
            const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
            // Set isLoggedIn state to true and update username if storedUsername exists
            if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
            }

            // Set doctorData state if storedDoctorData exists
            if (storedDoctorData) {
            setDoctorData(storedDoctorData);
            }

            // Set appointmentData state if storedAppointmentData exists
            if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
            const newEntry = {patient:storedAppointmentData,...storedDoctorData}
            console.log(newEntry);
            if(localStorage.getItem('email'))
            {
                let appList = JSON.parse(localStorage.getItem('email'))
                appList = [...appList,newEntry]
                const putty = JSON.stringify(appList);
                localStorage.setItem('email',putty);
                console.log(JSON.parse(localStorage.getItem('email')));
                JSON.parse(localStorage.getItem('email')).map((s)=>console.log(s.name));
            }
            else{
                localStorage.setItem('email',JSON.stringify(updateList));
                console.log(JSON.parse(localStorage.getItem('email')));
            }
        }
    }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render



  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div style={{position:'absolute', width:'100%', height: '100%'}}>
      {/* Render Navbar component */}
      <Navbar></Navbar>
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
          <div className='card-separator'>
          {JSON.parse(localStorage.getItem('email')).map(
            (appointmentDet) => (
                <div className="appointment-card" hidden={true}>
                <div className="appointment-card__content">
                  {/* Display title for appointment details */}
                  <h3 className="appointment-card__title">Appointment Details</h3>
                  <p className="appointment-card__message">
                    {/* Display doctor's name from doctorData */}
                    <strong>Doctor:</strong> {appointmentDet?.name} <br/>
                    <strong>Speciality:</strong> {appointmentDet?.speciality} <br/>
                    <strong>Patient Name:</strong> {appointmentDet?.patient?.name} <br/>
                    <strong>Phone Number:</strong> {appointmentDet?.patient?.phoneNumber} <br/>
                    <strong>Date of Appointment:</strong> {appointmentDet?.patient?.date} <br/>
                    <strong>Time Slot:</strong> {appointmentDet?.patient?.slot} <br/>
                  </p>
                </div>
              </div>            
            ))    }
          {/* <div className="appointment-card" hidden={true}>
            <div className="appointment-card__content"> */}
              {/* Display title for appointment details */}
              {/* <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message"> */}
                {/* Display doctor's name from doctorData */}
                {/* <strong>Doctor:</strong> {doctorData?.name} <br/>
                <strong>Speciality:</strong> {doctorData?.speciality} <br/>
                <strong>Patient Name:</strong> {appointmentData?.name} <br/>
                <strong>Phone Number:</strong> {appointmentData?.phoneNumber} <br/>
                <strong>Date of Appointment:</strong> {appointmentData?.date} <br/>
                <strong>Time Slot:</strong> {appointmentData.slot} <br/>
              </p>
            </div>
          </div> */}
        </div>
      )}
      {/* Render children components */}
      {children}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
