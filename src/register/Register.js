import './Register.css'
import '../login/Login'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Register() {
    return(
        <div>
            <img className='background' src="Images/registerBackground.png"/>
            <img className='mainCanvas' src="Images/switchBackground.jpg"/>
            <div className="mainCanvas">
                <div className='RegisterCanvas'>
                    <h1 className='text'>Registration</h1>
                    <br/>
                    <img className='profilePic' src="Images/profileLogo.png"/>
                    <button className='addPicture'/>
                    <br/><br/>
                    <input className='input' type="username" placeholder='Username' required/>
                    <br/><br/>
                    <input className='input' type="password" placeholder='Password' required/>
                    <br/><br/>
                    <input className='input' type="password2" placeholder='Re-enter password' required/>
                    <br/><br/>
                    <input className='input' type="displayName" placeholder='Display name' required/>

                    <button className='btn-grad'>Sign Up</button>
                </div>
                <div className='ChangeToLoginCanvas'>
                    <h1 className='textSwitch'>Welcome Back!</h1>
                    <br/>
                    <h7 className='textSwitch2'>already have an acount?</h7>
                    <br/>
                    <BrowserRouter>
                        <Link to='/Login'>
                            <button className='loginBtn'>Sign In</button>
                        </Link>
                    </BrowserRouter>                   
                </div>
                
            </div>
        </div>
        
    );
}

export default Register;