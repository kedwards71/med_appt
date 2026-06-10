import React from "react";
import './Sign_Up.css'

const Sign_Up = () =>{
    return(
        <>
        <div class="container">
            <div class="card">

                <form class="signUpForm">
                    <h2>Sign-Up</h2>
                    <div class="formItem">
                        <label for="role">Role</label>
                        <select name="role" id="role" required>
                            <option value="">Select Role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div class="formItem">
                        <label for="fName">First Name</label>
                        <input type="text" name="fName" id="fName" placeholder="First Name" required/>
                    </div>
                    <div class="formItem">
                        <label for="lName">Last Name</label>
                        <input type="text" name="lName" id="lName" placeholder="Last Name" required/>
                    </div>
                    <div class="formItem">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required/>
                    </div>
                    <div class="formItem">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="123-456-7890" pattern="[1-9]{3}-[0-9]{3}-[0-9]{4}$" required/>
                    </div>
                    <div class="formItem">
                        <label for="Password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required/>
                    </div>
                    <div class="formButtons">
                        <button type="submit" id="submitButton" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" id="resetButton" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                    <p>Already have an account? <a href="/Login"><span>Login</span></a></p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Sign_Up