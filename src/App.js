import './App.css';
import ChatPage from './chat/ChatPage';
import Login from './login/Login';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { useState } from 'react';


function App() { 
  const username = ''
  const [uname,setUname] = useState(username)

  const curUname = function(username){
     setUname(username = username)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={() => <Login curUname = {curUname}/>} />
        <Route exact path="/chat_page" component={() => <ChatPage uname={uname} />} />
      </Switch>
    </Router>
    
  );
}

export default App;
