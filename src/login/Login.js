import { useRef, useState } from 'react';
import './Login.css';
import { useHistory } from "react-router-dom"
import users from '../hard_coded/users'
import { wait } from '@testing-library/user-event/dist/utils';


function Login({ curUname }) {
	const username = useRef(null);
	const password = useRef(null);
	const usernameR = useRef(null);
	const passwordR = useRef(null);
	const password2R = useRef(null);
	const displayName = useRef(null);
	const profile_img = useRef(null)
	const reader = new FileReader();
	let history = useHistory();

	const [profile, setProfie] = useState("Images/profileLogo.png")

	const handleSwitchToLogin = () => {
		closeAlert();
		var divRegisterCanvas = document.getElementById("registerCan");
		document.getElementById("LoginCan").style.left = "0%";
		var intervalID = window.setInterval(myCallback, 10);
		var startLeft = 40;
		function myCallback() {
			if (startLeft == 30) {
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
		closeAlert();
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

		document.getElementById('alert').style.visibility = "collapse";
		document.getElementById('alert').innerHTML = "Incorrect username and / or password";
		document.getElementById('alert').style.visibility = "visible";
	}

	const add_profile = function () {
		reader.addEventListener("load", () => { setProfie(reader.result) });
		reader.readAsDataURL(profile_img.current.files[0])
	}
	const handleRegister = (usernameR, passwordR, password2R, displayName) => {
		for (let user of users) {
			if (user.uname == usernameR.current.value) {
				document.getElementById('alert').style.visibility = "collapse";
				document.getElementById('alert').innerHTML = "This username is taken, try another one:)";
				document.getElementById('alert').style.visibility = "visible";

				document.getElementById("usernameR").value = "";
				document.getElementById("passwordR").value = "";
				document.getElementById("password2R").value = "";
				return;
			}

		}
		if (passwordR.current.value != password2R.current.value) {
			document.getElementById('alert').style.visibility = "collapse";
			document.getElementById('alert').innerHTML = "The passwords do not match:(";
			document.getElementById('alert').style.visibility = "visible";

			document.getElementById("passwordR").value = "";
			document.getElementById("password2R").value = "";
			return;
		}

		if (usernameR.current.value == "" || passwordR.current.value == "" || displayName.current.value == "") {
			document.getElementById('alert').style.visibility = "collapse";
			document.getElementById('alert').innerHTML = "Something is missing";
			document.getElementById('alert').style.visibility = "visible";	
			return
		}

		users.push({ uname: usernameR.current.value, dname: displayName.current.value, password: passwordR.current.value, img: profile, contacts: [] })
		console.log(profile)
		curUname(usernameR.current.value);
		history.push("/chat_page")

	}

	const closeAlert = function() {
		document.getElementById('alert').style.visibility = "collapse";
	}


	return (
		<div>
			<img className='background' src="Images/registerBackground.png" />
			<img className='mainCanvas' src="Images/switchBackground.jpg" />
			<div className="mainCanvas">
				<div id='LoginCan' className='LoginCanvas'>
					<h1 className='text2'>Sign In</h1>
					<br />
					<input onClick={() => { closeAlert() }} ref={username} className='input' type="uname" placeholder='Username' required />
					<br /><br />
					<input onClick={() => { closeAlert() }} ref={password} className='input' type="password" placeholder='Password' required />

					<button  onClick={() => { handleLogin(username, password) }} className='btn-grad'>Login</button>

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

					<div className='profilePicDiv'>
						<img className='profilePic' id="defaultPhoto" src={profile} />
						<input ref={profile_img} type="file" id="image-input" accept="image/*" />
						<label for="image-input" id="uploadPicBtn">Choose picture</label>
					</div>
					<button onClick={() => { add_profile() }} type="button" className="btnUpload">Upload</button>
					<br /><br />
					<input onClick={() => { closeAlert() }} ref={usernameR} className='input' id="usernameR" placeholder='Username' required />
					<br /><br />
					<input onClick={() => { closeAlert() }} ref={passwordR} className='input' id="passwordR" type="password" placeholder='Password' required />
					<br /><br />
					<input onClick={() => { closeAlert() }} ref={password2R} className='input' id="password2R" type="password" placeholder='Re-enter password' required />
					<br /><br />
					<input onClick={() => { closeAlert() }} ref={displayName} className='input' id="displayName" placeholder='Display name' required />

					<button onClick={() => { handleRegister(usernameR, passwordR, password2R, displayName) }} className='btn-grad'>Sign Up</button>
				</div>
				<div id='ChangeToLoginCan' className='ChangeToLoginCanvas'>
					<h1 className='textSwitch'>Welcome Back!</h1>
					<br />
					<h7 className='textSwitch2'>already have an acount?</h7>
					<br />
					<button id='hey' onClick={() => { handleSwitchToLogin() }} className='loginBtn'>Sign In</button>
				</div>
				<div className="alert alert-warning" role="alert" id='alert'/>

			</div>
		</div>
	);
}

export default Login;
