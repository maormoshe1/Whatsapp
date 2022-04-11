import { useRef } from 'react';
import './Login.css';
import {useHistory} from "react-router-dom"
import users from '../hard_coded/users'
import '../register/Register'


function Login({curUname}) {
  const username = useRef(null);
  const password = useRef(null);
  let history = useHistory();


  const handleLogin = (uname, password) => {
    for(let user of users){
      if(user.uname == uname.current.value && user.password == password.current.value){
        curUname(uname.current.value);
        history.push("/chat_page")
        
        //alert("Logged in successfully!")
        return;
      }
       //console.log(messages[messages.length-1].text)
    } 
      alert("Incorrect username and / or password ")
  }

  const handleRegister = () =>{
    history.push("/register")
  }
  
    return (

      <div>
        <img className='background' src="Images/registerBackground.png" />
        <img className='mainCanvas' src="Images/switchBackground.jpg" />
        <div className="mainCanvas">
          <div className='LoginCanvas'>
            <h1 className='text2'>Sign In</h1>
            <br />
            <input ref={username} className='input' type="uname" placeholder='Username' required />
            <br /><br />
            <input ref={password} className='input' type="pass" placeholder='Password' required />

            <button onClick={() => {handleLogin(username,password)}} className='btn-grad'>Login</button>
          </div>
          <div className='ChangeToRegisterCanvas'>
            <h1 className='textSwitch'>New Here?</h1>
            <br />
            <h7 className='textSwitch3'>Enter your personal details and let's get started!</h7>
            <br />
            <button onClick={() => {handleRegister()}} className='loginBtn'>Sign Up</button>
          </div>

        </div>
      </div>
    );
  }
  
  export default Login;
