import './App.css';
import ChatPage from './chat/ChatPage';
import Login from './login/Login';
import Register from './register/Register';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { useState } from 'react';
import AddContact from './contact/AddContact';


function App() { 
  //const username = ''
  const [uname,setUname] = useState('')

  const curUname = function(username){
     setUname(username)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={() => <Login curUname = {curUname}/>} />
        <Route exact path="/register" component= {Register} />
        <Route exact path="/chat_page" component={() => <ChatPage uname={uname} />} />
        <Route exact path="/add" component={AddContact} />
      </Switch>
    </Router>
    
  );
}

export default App;
