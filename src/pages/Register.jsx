import React from "react";

const Register =() =>{
    return(
       <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="file" id="file"/>
                <label htmlFor="file"></label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account Sign in</p>
        </div>
       </div>
    )
}

export default Register