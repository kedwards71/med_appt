import React, {useState} from 'react'
import './Navbar.css'
import medicalTeam from '../../assets/medical-team.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
        const [email,setEmail] = useState(sessionStorage.getItem('email'));
        // const [name,setName] = useState('');
        let name = '';
        if(email)
        {
            const index = email.indexOf('@');
            name =(email.slice(0,index));
        }
    function handleLogout(){
        alert("")
        sessionStorage.setItem("email","");
        setEmail(sessionStorage.getItem('email'));
    }
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
                    {email && email.trim() !== '' ? 
                        <>
                            <li className="link" style={{display:"flex",gap:"10px", alignItems:"baseline"}}>                            <p className='welcome-user'>Hello,<strong>{name}</strong></p> <button className='btn btn-danger mb-2 waves-effect waves-light' onClick={handleLogout}>Logout</button></li>

                        </>

                        : 
                        <li className="link"><Link to="/Login">Login</Link></li>
                    }
                    <li className="link"><Link to="/Sign_Up">Sign-Up</Link></li>
                    <li className="link"><Link to="#reviews">Reviews</Link></li>
                    <li className="link"><Link to="/BookingConsultation">Appointments</Link></li>
                    <li className='link'><Link to="instant-consultation">Instant-Consultation</Link></li>
                    <li className="link"><Link to="/">Home</Link></li>
                </ul>
            </nav>

        </div>
    </div>
    </>
  )
}

export default Navbar