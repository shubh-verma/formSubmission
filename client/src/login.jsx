import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https//:127.0.0.1:5000/login', loginData);
            // console.log(loginData);
            const {success, message} = response.data;
            if (success) {
                console.log('Login Successfully');
            }else{
                console.log(message);
            }
        } catch (error) {
            console.error('login error', error);
            
        }
        setLoginData({
            username:"",
            password:"",
        })
    }

const handleLoginChange = ((e) => {
        const {name, value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        console.log(loginData);
    })
    return (
        <div>
            <h1>login page</h1>
            <form onSubmit={handleLoginSubmit}>
                <input type="text"
                name='username'
                placeholder='User Name'
                value= {loginData.username}
                onChange={handleLoginChange}
                required />
                <input type="password"
                name='password'
                placeholder='Password'
                value= {loginData.password}
                onChange={handleLoginChange}
                required />
                <button type='submit'>Login</button>
                <p>Not registered yet? <Link to= "/registration">Register Here</Link> </p>

            </form>
        </div>
    )
}

export default LoginPage