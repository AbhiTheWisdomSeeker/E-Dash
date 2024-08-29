import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    const LoginButton = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:8000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();

        console.warn(result)
        if(result.name){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/')
        }else{
            alert("please enter correct Details")
        }
    }

    return (<div className='login'>
        <h1>Login</h1>
        <input className="inputBox" type='text' placeholder='Enter Email' value={email} onChange={(e) => { setemail(e.target.value); }} ></input>
        <input className="inputBox" type='password' placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value); }}></input>
        <button className="btn" type='button' onClick={LoginButton}>Login</button>
    </div>)
}

export default Login;