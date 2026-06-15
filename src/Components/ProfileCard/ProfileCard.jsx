import React, { useEffect, useState } from "react";
import './ProfileCard.css'
import ProfileForm from "./ProfileForm";

const ProfileCard = () => {
    const [userName,setUserName] = useState('');
    const [userPhone,setUserPhone] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userEmail,setUserEmail] = useState('');
    
    const handleProfile = () => {
        const profileEditor=document.querySelector("#profile-editor");
        profileEditor.hidden = false;
        const welcomeUser = document.querySelector('.welcome-userCard');
        welcomeUser.appendChild(profileEditor);
        document.querySelector("#profile-options").hidden=true;

    }

    // useEffect(()=>{
    //     const email = sessionStorage.getItem('email');
    //     if(email)
    //     {
    //         setUserName(sessionStorage.getItem(`name`));
    //         setUserPhone(sessionStorage.getItem(`phone`));
    //         setUserPassword(sessionStorage.getItem(`password`));
    //         setUserEmail(email);
    //     }
    // },[])
    return (
        <>
            <div className="profile-container" id="profile-options" hidden={true}>
                <div className="profile-card">
                    <h5><button className="btn btn-success" onClick={handleProfile}>Your Profile</button></h5>
                    <h5><button className="btn btn-success">Your Reports</button></h5>
                </div>
            </div>

                <ProfileForm></ProfileForm>
        </>
    )
}

export default ProfileCard