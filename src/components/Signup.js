import React from 'react';
import { useNavigate } from 'react-router';
const Signup = () => {
    const navigate = useNavigate();
    const validate = () => {
        alert("account created successfully")
        navigate('/login')
    }
    return (
        <div className='row d-flex align-items-center justify-content-center'>
            <div className='w-lg-50 mt-5 ms-3'>
                <h3 className='text-center'>Sign-Up Form</h3>
                <form className='form container'>
                    <label>Username</label>
                    <input className='form-control' type='text' name='uname' id='uname' placeholder='Enter name' />
                    <label>Email</label>
                    <input className='form-control' type='email' id='email' placeholder='enter email' />
                    <label className='form-label' htmlFor='pwd'>Password</label>
                    <input className='form-control' type='password' id='pwd' placeholder='enter password' />
                    <label className='form-label' htmlFor='cpwd'>Confirm Password</label>
                    <input className='form-control' type='password' id='cpwd' placeholder='confirm password' />
                    <div className='my-3'>
                        <button className='btn btn-primary text-center' onClick={validate}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup
