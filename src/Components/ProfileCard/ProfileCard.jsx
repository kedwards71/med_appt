import React, { useEffect, useState } from "react";
import './ProfileCard.css'

const ProfileCard = () => {
    const [userName,setUserName] = useState('');
    const [userPhone,setUserPhone] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userEmail,setUserEmail] = useState('');

    useEffect(()=>{
        const email = sessionStorage.getItem('email');
        if(email)
        {
            setUserName(sessionStorage.getItem(`name`));
            setUserPhone(sessionStorage.getItem(`phone`));
            setUserPassword(sessionStorage.getItem(`password`));
            setUserEmail(email);
        }
    },[])
    return (
        <>
            <div className="profile-container" hidden={true}>
                <div className="profile-card">
                    <h5>Your Profile</h5>
                    <div className="profile-details">
                        <p>Email:{userEmail}</p> 
                        <p>Name:{userName}</p> 
                        <p>Phone:{userPhone}</p> 
                        <p>Password:{userPassword}</p> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard