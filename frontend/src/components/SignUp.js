import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';






const SignUP = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth){
            Navigate('/');
        }
    })
    
    
    const collectData = async ()=>{
        let result = await fetch('http://localhost:8000/register',{
        method: 'POST',
        body:JSON.stringify({name,email,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        result = await result.json();
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result));
        Navigate("/");
    }
    
   





    return (
        

        <div>

            
            <h1>Sign Up</h1>

            <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value); }} placeholder='Enter name' />

            <input className="inputBox" type="text" value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder='Enter Email' />

            <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder='Enter Password' />


            <button className="btn" onClick={collectData}>Sign Up</button>
        </div>
    )
}
export default SignUP;



// fetch is used for 
// 1. sending HTTP request
// 2. receiving HTTP response
// 3. handling HTTP response
// 4. handling HTTP errors
// 5. handling HTTP status codes
// 6. handling HTTP headers
// 7. handling HTTP body
// 8. handling HTTP query parameters
// 9. handling HTTP request body
// fetch is assigend to a variable because
// 1. it is a function
// 2. it is asynchronous
// 3. it is used to handle HTTP response



/////////////////////////////////////////////////////////////////////////////////////////////

// How to use navigate
// 1. import { Navigate } from 'react-router-dom';
// 2. <Navigate to="/path" />; // Navigate to the path
 
////////////////////////////////////////////////////////////////////////////////////////////

//LocalStorage is
// 1. a client-side storage
// 2. a key-value pair storage
// 3. a storage that is accessible from any page of the application
// 4. a storage that is accessible from any tab of the application
// 5. a storage that is accessible from any window of the application
// 6. a storage that is accessible from any frame of the application
// 7. a storage that is accessible from any iframe of the application
// 8. a storage that is accessible from any worker of the application
// 9. a storage that is accessible from any service worker of the application



///////////////////////////////////////////////////////////////////////////////////////////////

//'Content-Type': 'application/json'   This line is used for
// 1. sending JSON data in the request body
// 2. sending JSON data in the request headers
// 3. sending JSON data in the request query parameters
// 4. sending JSON data in the request cookies
// 5. sending JSON data in the request authorization headers
// We use this because
// 1. JSON data is not sent as a string
// 2. JSON data is sent as a binary data
//How this works?
// 1. The browser sends a request to the server
// 2. The server receives the request
// 3. The server processes the request
// 4. The server sends a response back to the browser
