import React from "react";
import './Login.css'

const Login = () => {
    return (
        <>
        <div class="container">
            <div class="card">
                <form class="loginForm">
                    <h2>Login</h2>
                    <p>Don't have an account? <a href="/Sign_Up"><span>Sign Up</span></a></p>

                    <div class="formItem">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required/>
                    </div>
                    <div class="formItem">
                        <label for="Password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required/>
                    </div>
                    <div class="formButtons">
                        <button type="submit" id="submitButton" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                        <button type="reset" id="resetButton" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                    <p>Forgot Password?</p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;