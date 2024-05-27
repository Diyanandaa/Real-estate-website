import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./signin.css"

function Login(){
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/", {
                email,
                password
            });
            if (res.data === "exist") {
                history.push("/"); // Navigate to home page
            } else if (res.data === "notexist") {
                alert("User does not exist. Please sign up.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" className="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an Account? <button> <Link to="/signin" className>CREATE AN ACCOUNT</Link></button></p>
            {/* <br />
            <p>OR</p>
            <br />
            <Link to="/signin">Signup Page</Link> */}
        </div>
    );
}

export default Login;
/*This hook provides access to the history instance used for navigation. It allows the component to programmatically change the URL.
Try-Catch Block: The function wraps the asynchronous logic in a try-catch block to handle any potential errors that might occur during the process.

API Request: Inside the try block, the function makes an asynchronous POST request to "http://localhost:8000/" using axios.post. It sends an object containing the email and password as data to the server.
axios.post is a function provided by the Axios library for making HTTP POST requests. It is commonly used in web development for sending data to a server.
        If the response from the server (res.data) is "exist", it indicates that the user exists. In this case, the function redirects the user to the home page using history.push("/").
        If the response is "notexist", it means the user does not exist. In this case, an alert is displayed, notifying the user to sign up.

    Error Handling:
        Any errors that occur during the API request are caught in the catch block. The error is logged to the console using console.error, and an alert is displayed to the user informing them that something went wrong and to try again.

Overall, the submit function encapsulates the logic for handling form submission, making an API request, and handling the response or errors that occur during the process.*/