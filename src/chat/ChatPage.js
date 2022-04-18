
import users from '../hard_coded/users'
import ChatItem from '../chat/ChatItem'
import ContactList from '../contact/ContactList';
import { useRef, useState } from 'react';
import './ChatPage.css';
import AddContact from '../contact/AddContact';


function ChatPage({ uname }) {
    const user = users.find((user) => {
        return user.uname == uname
    })

    const [contactList, setContactList] = useState(() => { return user.contacts })

    const [messages, setMessages] = useState(() => { return [] })

    const [addContact, setAddContact] = useState(false)

    const [curNameContact, setCurNameContact] = useState('')

    const [curImgContact, setCurImgContact] = useState('')

    const show_msg = function (messages, name, img) {
        setCurImgContact(img)
        setCurNameContact(name)
        setMessages(messages)
    }

    return (
        <div className="container">
            <img className='background' src="Images/registerBackground.png" />
            <div className="row myCan">
                <div className="col-4" style={{ overflow: "scroll", maxHeight: '100vh' }}>
                    <div id="settings">
                        <div className="d-flex align-items-center">
                            <div className="col-md-4">
                                <img id="profile" src={user.img} className="img-fluid rounded-circle mr-1"></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <i onClick={() => { setAddContact(true) }} id="add_contact" className="bi bi-person-plus-fill"></i>
                                    <h3 className="contact-name">{user.uname}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ContactList id="Contacts" contacts={contactList} show_msg={show_msg} />
                    </div>
                </div>
                <div className="col-8" style={{ overflow: "scroll", maxHeight: '90vh' }}>
                    <AddContact modal={addContact} show_modal={setAddContact} user={user} setContactList={setContactList} />
                    <ChatItem messages={messages} curImgContact={curImgContact} curNameContact={curNameContact}  user={user} />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;