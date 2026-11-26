import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../service/AuthService';


const loginForm = {
    display: "flex",
    flexDirection: "column",
    /*Horizontal center*/
    justifyContent: "center",
    /*vertical center*/
    alignItems: "center",
    height: "100vh"
}
const inputField = {
    padding: "2px",
    margin: "2px"
}

const errorMess ={
    color: "red", 
    fontSize: "14px"
}

const Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();


    let handleLogin = (e) => {
        e.preventDefault();
           setError("");
        let user = {
            email: email,
            password: password
        }
        login(user).then(resp => {
            localStorage.setItem("token", resp.data.token)
            navigate("/home")
        }).catch(err => {
            setError("E-Mail oder Passwort falsch.");
    })

    };

    return (
        <div>
            <form style={loginForm} onSubmit={handleLogin}>
                <h3>Login</h3>
                    {error && <p style={errorMess}>{error}</p>}
                <input style={inputField} placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}  required />
                <input style={inputField} placeholder='Passwort' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login