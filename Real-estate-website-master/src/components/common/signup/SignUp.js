import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import './signin.css'
function Signup() {
    const history = useHistory();
/*useHistory provides a way to navigate between different routes in a React application without directly relying on <Link>*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                email,
                password
            });
/*This ensures that the code execution will pause until the POST request is completed, and the response (if any) is received.*/
            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                alert("Signup successful. Please login.");
                history.push("/signup"); // Redirect to signup page after successful signup
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.",error);
        }
    }

    return (
        <div className="signup">
            {/* <br/> */}
            <h1>CREATE ACCOUNT</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
            {/* <br />
            <p>OR</p>
            <br /> */}
            <Link to="/login" className="color">Login Now</Link>
            {/* <Link to="/login">Login Page</Link> */}
        </div>
    );
}

export default Signup;
