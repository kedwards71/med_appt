// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

// Function component Notification to display user notifications
const Notification2 = () => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [appList, setAppList] = useState([]);
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    if(storedUsername)
    {
        console.log(isLoggedIn);
        setIsLoggedIn(true)
        console.log(isLoggedIn);
    }
    console.log(isLoggedIn)
  })

  // useEffect hook to perform side effects in the component
/*  useEffect(() => {
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
      const updateArr = [...appList,newEntry];
      setAppList(updateArr);
      console.log(updateArr);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render
*/
  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <></>
  )
};

// Export Notification component for use in other parts of the application
export default Notification2;