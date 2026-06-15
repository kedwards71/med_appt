import React, {useState} from "react";
import './Sign_Up.css'
import { Link, useNavigate } from "react-router-dom";
import {API_URL} from '../../../src/config.js';


const Sign_Up = () =>{
    const [role, setRole] = useState('');
    // const [fName,setFName] = useState('');
    // const [lName,setLName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); 
    const navigate = useNavigate();

    const register = async (e) =>{
        e.preventDefault();

        //API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: role,
                // fName: fName,
                // lName: lName,
                name:name,
                email: email,
                phone: phone,
                password: password,
            }),

        });

        const json = await response.json(); //Parse the response JSON

        if(json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            // sessionStorage.setItem("fName",fName);
            // sessionStorage.setItem("lName",lName);
            sessionStorage.setItem('name',name);
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("phone",phone);
            sessionStorage.setItem("password",password);
            localStorage.setItem(`${email}name`,name);
            localStorage.setItem(`${email}phone`,phone);
            localStorage.setItem(`${email}password`,password);
            //Redirect to home page
            navigate("/");
            window.location.reload(); //Refresh
        } else {
            if(json.errors){
                for (const error of json.errors){
                    setShowerr(error.msg);// Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }

    };

    


    return(
        <>
        <div class="container">
            <div class="card">

                <form class="signUpForm" method="POST" onSubmit={register}>
                    <h2>Sign-Up</h2>
                    <div class="formItem">
                        <label for="role">Role</label>
                        <select name="role" id="role" onChange={(e)=>setRole(e.target.value)} required>
                            <option value="">Select Role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    {/* <div class="formItem">
                        <label for="fName">First Name</label>
                        <input type="text" name="fName" value={fName} id="fName" onChange={(e)=>setFName(e.target.value)} placeholder="First Name" required/>
                        {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>}
                    </div>
                    <div class="formItem">
                        <label for="lName">Last Name</label>
                        <input type="text" name="lName" value={lName} id="lName" onChange={(e)=>setLName(e.target.value)} placeholder="Last Name" required/>
                        {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>}                        
                    </div> */}
                    <div class="formItem">
                        <label for="name">Name</label>
                        <input type="text" name="name" value={name} id="name" onChange={(e)=>setName(e.target.value)} placeholder="Name" required/>
                        {/* {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>}                         */}
                    </div>
                    <div class="formItem">
                        <label for="email">Email</label>
                        <input type="email" name="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
                        {/* {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>} */}
                    </div>
                    <div class="formItem">
                        <label for="phone">Phone Number</label>
                        <input type="text" name="phone" value={phone} id="phone" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="123-456-7890" pattern="[1-9]{3}-[0-9]{3}-[0-9]{4}$" required/>
                        {/* {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>} */}

                    </div>
                    <div class="formItem">
                        <label for="Password">Password</label>
                        <input type="password" name="password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
                        {/* {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>} */}
                    </div>
                    <div class="formButtons">
                        <button type="submit" id="submitButton" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" id="resetButton" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        {/* {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>} */}
                    </div>
                    <p>Already have an account? <Link to="/Login"><span>Login</span></Link></p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Sign_Up