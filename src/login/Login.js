import { useRef } from 'react';
import './Login.css';
import { useHistory } from "react-router-dom"
import users from '../hard_coded/users'


function Login({ curUname }) {
  const username = useRef(null);
  const password = useRef(null);
  const usernameR = useRef(null);
  const passwordR = useRef(null);
  const password2R = useRef(null);
  const displayName = useRef(null);
  let history = useHistory();


  const handleSwitchToLogin = () => {
    var divRegisterCanvas = document.getElementById("registerCan");
    document.getElementById("LoginCan").style.left = "0%";
    var intervalID = window.setInterval(myCallback, 10);
    var startLeft = 40;
    function myCallback() {
      if(startLeft == 30) {
        document.getElementById("ChangeToLoginCan").style.visibility = "collapse"; 
        document.getElementById("ChangeToRegisterCan").style.visibility = "visible";    
      }
      if (startLeft > 0) {
        startLeft -= 2;
        divRegisterCanvas.style.left = startLeft.toString() + "%";
      }
      else { 
        document.getElementById("registerCan").style.visibility = "collapse";
        document.getElementById("LoginCan").style.visibility = "visible";   
        clearInterval(intervalID);     
      }   
    }
  }

  const handleSwitchToRegister = () => {
    var divRegisterCanvas = document.getElementById("LoginCan");
    document.getElementById("registerCan").style.left = "40%";
    var intervalID = window.setInterval(myCallback, 10);
    var startLeft = 0;
    function myCallback() {
      if (startLeft == 10) {
        document.getElementById("ChangeToRegisterCan").style.visibility = "collapse";
        document.getElementById("ChangeToLoginCan").style.visibility = "visible";
      }
      if (startLeft < 40) {
        startLeft += 2;
        divRegisterCanvas.style.left = startLeft.toString() + "%";
      }
      else {
        document.getElementById("LoginCan").style.visibility = "collapse";
        document.getElementById("registerCan").style.visibility = "visible";
        clearInterval(intervalID);
      }   
    }
  }

  const handleLogin = (uname, password) => {
    for (let user of users) {
      if (user.uname == uname.current.value && user.password == password.current.value) {
        curUname(uname.current.value);
        history.push("/chat_page")

        return;
      }
    }
    alert("Incorrect username and / or password ")
  }

  const handleRegister = (usernameR, passwordR, password2R, displayName) => {
    for (let user of users) {
      if (user.uname == usernameR.current.value) {
        alert("This username is taken, try another one:)")
        document.getElementById("usernameR").value = "";
        document.getElementById("passwordR").value = "";
        document.getElementById("password2R").value = "";
        return;
      }

    }
    if (passwordR.current.value != password2R.current.value) {
      alert("The passwords do not match:(")
      document.getElementById("passwordR").value = "";
      document.getElementById("password2R").value = "";
      return;
    }

    users.push({uname : usernameR.current.value , password: passwordR.current.value, img : 'Images/anonymous.jpeg' , contacts: []})
    curUname(usernameR.current.value);
    history.push("/chat_page")
    
  }

  return (
    <div>
      <img className='background' src="Images/registerBackground.png" />
      <img className='mainCanvas' src="Images/switchBackground.jpg" />
      <div className="mainCanvas">
        <div id='LoginCan' className='LoginCanvas'>
          <h1 className='text2'>Sign In</h1>
          <br />
          <input ref={username} className='input' type="uname" placeholder='Username' required />
          <br /><br />
          <input ref={password} className='input' type="password" placeholder='Password' required />

          <button onClick={() => { handleLogin(username, password) }} className='btn-grad'>Login</button>
        </div>
        <div id='ChangeToRegisterCan' className='ChangeToRegisterCanvas'>
          <h1 className='textSwitch'>New Here?</h1>
          <br />
          <h7 className='textSwitch3'>Enter your personal details and let's get started!</h7>
          <br />
          <button onClick={() => { handleSwitchToRegister() }} className='loginBtn'>Sign Up</button>
        </div>


        <div id='registerCan' className='RegisterCanvas'>
          <h1 className='text'>Registration</h1>
          <br />
          <img className='profilePic' src="Images/profileLogo.png" />
          <button className='addPicture' />
          <br /><br />
          <input ref={usernameR} className='input' id="usernameR" placeholder='Username' required />
          <br /><br />
          <input ref={passwordR} className='input' id="passwordR" type="password" placeholder='Password' required />
          <br /><br />
          <input ref={password2R} className='input' id="password2R" type="password" placeholder='Re-enter password' required />
          <br /><br />
          <input ref={displayName} className='input' id="displayName" placeholder='Display name' required />

          <button onClick={() => { handleRegister(usernameR, passwordR, password2R, displayName) }} className='btn-grad'>Sign Up</button>
        </div>
        <div id='ChangeToLoginCan' className='ChangeToLoginCanvas'>
          <h1 className='textSwitch'>Welcome Back!</h1>
          <br />
          <h7 className='textSwitch2'>already have an acount?</h7>
          <br />
          <button id='hey' onClick={() => { handleSwitchToLogin() }} className='loginBtn'>Sign In</button>
        </div>

      </div>
    </div>
  );
}

export default Login;
