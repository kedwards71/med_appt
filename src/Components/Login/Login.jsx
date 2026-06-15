import React, { useEffect, useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import {API_URL} from '../../../src/config.js';
import { Link } from "react-router-dom";

const Login = () => {
    const [password,setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        if(sessionStorage.getItem("auth-token") && sessionStorage.getItem()){
            navigate('/');
        }
    }, []);


    const login = async (e) => {
        e.preventDefault();
        // Send a POST request to the login API endpoint
        const res = await fetch(`${API_URL}/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
    
        // Parse the response JSON
        const json = await res.json();
        if (json.authtoken) {
          // If authentication token is received, store it in session storage
          sessionStorage.setItem('auth-token', json.authtoken);
          sessionStorage.setItem('email', email);
        //   if(localStorage.getItem(`${email}name`))
        //   {
        //     sessionStorage.setItem('name',localStorage.getItem(`${email}name`));
        //     sessionStorage.setItem('phone',localStorage.getItem(`${email}phone`));
        //     sessionStorage.setItem('password',localStorage.getItem(`${email}name`));
        //   }
    
          // Redirect to home page and reload the window
          navigate('/');
          window.location.reload();
        } else {
          // Handle errors if authentication fails
          if (json.errors) {
            for (const error of json.errors) {
              alert(error.msg);
            }
          } else {
            alert(json.error);
          }
        }
      };

    return (


        <>
        <div class="container">
            <div class="card">
                <form class="loginForm" onSubmit={login}>
                    <h2>Login</h2>
                    <p>Don't have an account? <Link to="/Sign_Up"><span className="signup-redir">Sign Up</span></Link></p>

                    <div class="formItem">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}required/>
                    </div>
                    <div class="formItem">
                        <label for="Password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <div class="formButtons">
                        <button type="submit" id="submitButton" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                        <button type="reset" id="resetButton" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                    <p style={{color:'white'}}>Forgot Password?</p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;