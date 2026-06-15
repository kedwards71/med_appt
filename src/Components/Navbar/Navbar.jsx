import React, {useEffect, useState} from 'react'
import './Navbar.css'
import medicalTeam from '../../assets/medical-team.png'
import notificationLogo from '../../assets/noti.svg';
import { Link } from 'react-router-dom'
import ProfileCard from '../ProfileCard/ProfileCard';

const Navbar = () => {
        const [email,setEmail] = useState(sessionStorage.getItem('email'));
        const [authorization,setAuthorization] = useState(false);
        // const [name,setName] = useState('');
        let name = '';
        if(email)
        {
            const index = email.indexOf('@');
            name =(email.slice(0,index));
        }
    function handleLogout(){
        sessionStorage.setItem("email","");
        setEmail(sessionStorage.getItem('email'));
        sessionStorage.removeItem('auth-token');
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


    function toggleNotification(){
        const noti = document.querySelectorAll('.appointment-card');
        if(!noti||!sessionStorage.getItem('email')){

            alert('You need to make sure you are logged in and have booked an appointment.');
            return;
        }
        noti.forEach(n=>{
            if(n.hidden===true){
                n.hidden=false;
            }else if(n.hidden===false){
                n.hidden=true;
            }
        })

        
        const bellIcons = document.querySelector('.bell_icon i');
        if(bellIcons.classList.contains('fa-bell')){
            bellIcons.classList.remove('fa-bell');
            bellIcons.classList.add('fa-bell-slash');
        }
        else{
            bellIcons.classList.remove('fa-bell-slash');
            bellIcons.classList.add('fa-bell');
        }

    }

    const handleHover = () => {
        const profileCard = document.querySelector('#profile-options');
        profileCard.hidden = false;
        profileCard.onmouseleave = () => handleExit();
        const welcomeUser = document.querySelector('.welcome-userCard');
        welcomeUser.appendChild(profileCard);
    }

    const handleExit = () => {
        const profileCard = document.querySelector('#profile-options');
        profileCard.hidden = true;

    }

    useEffect(()=>{
        try{
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email");
            if(authtoken||email)
            {
                setAuthorization(true)
            }
        }catch(error){
            console.log(error);
        }
    },[])
    
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

                 <div className='bell_icon' onClick={toggleNotification}>
                    <i className='fa fa-bell-slash '></i>
                 </div>



                {/* <!-- Individual Links in the same group --> */}
                <ul className="navbarItems">
                    {email && email.trim() !== '' ? 
                        <>
                            <li className="link" style={{display:"flex",gap:"10px", alignItems:"baseline"}}> 
                            <div className="welcome-userCard" onMouseEnter={handleHover} >
                                <p className='welcome-user'>Hello,<strong>{name}</strong></p> 
                            </div>
                                <button className='btn btn-danger mb-2 waves-effect waves-light' onClick={handleLogout}>Logout</button>
                            </li>

                        </>

                        :
                        <>
                            <li className="link"><Link to="/Login">Login</Link></li>
                            <li className="link" id='Sign_Up'><Link to="/Sign_Up">Sign-Up</Link></li>
                        </> 
                    }
                    <li className="link"><Link to="/GiveReviews">Reviews</Link></li>
                    <li className="link"><Link to="/BookingConsultation">Appointments</Link></li>
                    <li className='link'><Link to="instant-consultation">Instant-Consultation</Link></li>
                    <li className="link"><Link to="/">Home</Link></li>
                </ul>
            </nav>

        </div>
        {authorization && (
            <ProfileCard></ProfileCard>
            )}
    </div>
    </>
  )
}

export default Navbar