import './ChatItem.css';
import MessageList from '../messages/MessageList'

import { useRef, useState } from 'react';

function ChatItem({messages}){
    const msg = useRef(null);
    const [messageList, setMessageList] = useState(messages)

    const handleSend = (msg) => {
            console.log(msg.current.value);
            setMessageList(messages.push({text: msg.current.value ,time: '17:08',me: true}));

            // console.log(messages[3].text)
           
        } 

    return(
        <div>
            {/* <img className='background' src="Images/background.jpg" ></img> */}
            <div className='message'>
                <MessageList messages={messages}/>
            </div>
            <i id="send" className="bi bi-send" onClick={() => {handleSend(msg)}}></i>
            <input ref={msg} className='typing' placeholder='type here...'></input>
            
        </div>

    );
}

export default ChatItem;