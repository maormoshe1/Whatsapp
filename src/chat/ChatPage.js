
import users from '../hard_coded/users'
import ChatItem from '../chat/ChatItem'
import ContactList from '../contact/ContactList';
import { useRef, useState } from 'react';
import './ChatPage.css';


function ChatPage({uname}){
  const user = users.find((user) => {
      //console.log(uname)
      return user.uname == uname})

    const [contactList, setContactList] = useState(user.contacts)
  
    return(
        <div className="container">
            <div className="row">
                <div className="col-4" style={{overflow: "scroll", maxHeight: '100vh' }}>
                    <div className="settings">
                        <i className="bi bi-person-plus-fill"></i>
                        <i id = 'settings'className="bi bi-three-dots-vertical"></i>
                    </div>  
                    
                    <ContactList contacts={user.contacts}/>
                </div>
                <div className="col-8" style={{overflow: "scroll", maxHeight: '90vh' }}>
                    <ChatItem messages = {user.contacts[0].messages}/>  
                </div>
            </div>
        </div>
    );
}

export default ChatPage;