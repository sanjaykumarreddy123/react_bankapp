import React, { useState } from 'react';
import { useNavigate } from "react-router";
import './Login.css';
const Login=()=> {
    const [uname,setUname] = useState('');
    const [pwd,setPwd] = useState();
    const navigate=useNavigate();

    const handleLogin=()=>{
        console.log("username:"+uname);
        console.log("password:"+pwd);
        if(uname==="sanjay" && pwd==="sanjay"){
            alert("authenticated successfully")
            navigate('/list')

        }else{
            alert("Invalid credentials")
        }
    }
    return (
        <div className='row container '>
            <div className='w-lg-50 mt-5 ms-2'>
            <h3 className='text-center'>Login Form</h3>

            <form className='form container'>
                <div className='from_grope'>
                <div className='form_lable'>
                <label>Username</label>
                <input className='form-control' type='text' onChange={(event)=>setUname(event.target.value)} name='uname' id='uname' placeholder='Enter name'/>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='from_pwd'>
                <label className='form-label' htmlFor='pwd'>Password</label>
                <input className='form-control' type='password' onChange={(event)=>setPwd(event.target.value)} id='pwd' placeholder='enter password'/>
                </div>
                &nbsp;&nbsp;
                <div className='my-3'>
                <button className='btn btn-primary text-center' onClick={handleLogin}>Submit</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Login
