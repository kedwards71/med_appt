import React from 'react'
import './Navbar.css'
import medicalTeam from '../../assets/medical-team.png'

const Navbar = () => {
    function handleClick(){
        const navbarItems = document.querySelector(".navbarItems");
        const navIcon = document.querySelector(".nav__icon i");

        navbarItems.classList.toggle("active");

        if(navbarItems.classList.contains("active")){
            navIcon.classList.remove("fa-bars");
            navIcon.classList.add("fa-times");
        } else {
            navIcon.classList.remove("fa-times");
            navIcon.classList.add("fa-bars");
        }
    }
    
  return (
    <>
    <div>
        <div className="container">

            <nav className="navbar">
                {/* <!-- Logo and Company Name in the same group --> */}
                <div className="nav__logo">
                    <h3>StayHealthy</h3>
                    <img src={medicalTeam} height="70px" alt="Medical Team"/>
                </div>

                {/* <!-- Hamburger Menu w/ onClick event listener --> */}
                 <div className="nav__icon" onClick={handleClick}>
                    <i className="fa fa-times fa fa-bars"></i>
                 </div>



                {/* <!-- Individual Links in the same group --> */}
                <ul className="navbarItems">
                    <li className="link"><a href="../Login/Login.html">Login</a></li>
                    <li className="link"><a href="../Sign_Up/Sign_Up.html">Sign-Up</a></li>
                    <li className="link"><a href="#reviews">Reviews</a></li>
                    <li className="link"><a href="#appointments">Appointments</a></li>
                    <li className="link"><a href="#home">Home</a></li>
                </ul>
            </nav>

        </div>
    </div>
    </>
  )
}

export default Navbar