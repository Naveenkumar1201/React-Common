import React from 'react'
import './LoginFile.css'
import { GrLogin } from "react-icons/gr";


const LoginForm = () => {
    return (
        <>
            <div className='title' >

                <img width="52" height="52" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-glyph-shapes-tanah-basah-glyph-tanah-basah-30.png" alt="external-glyph-shapes-tanah-basah-glyph-tanah-basah-30" />
                <h3>ROS</h3>
            </div>
            <div className='LoginForm'>
                <form action="">
                    <div className='userInputs'>
                        <label htmlFor="userName">User ID</label>
                        <input type="text" id='userName' placeholder='Ex: executer@mail.com' />
                    </div>
                    <div className='userInputs'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='********' />
                    </div>
                    <div className='buttoncontainer'>
                        <span>Forgot Password? <h4>Click Here</h4></span>
                        <button><span>Login</span><GrLogin /></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm