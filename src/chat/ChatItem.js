import './ChatItem.css';
import MessageList from '../messages/MessageList'
import messages from '../hard_coded/messages';
import { useRef, useState } from 'react';

function ChatItem({ messages, show_msg, setLastMessage }) {
    let today = new Date();
    const msg = useRef(null);

    const [messageList, setMessageList] = useState(messages)

    const getTime = function () {
        let h = today.getHours();
        let m = today.getMinutes();
        if (h < 12) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        return h + ":" + m
    }

    const handleSend = (msg) => {
        messages.push({ text: msg.current.value, time: getTime(), from: true })
        setMessageList(messages);
        document.getElementById("toSendField").value = "";
    }


    if (messages.length == 0) {
        return (
            <div>
                hello
            </div>
        );
    }

    return (
        <div>
            {/* <img className='background' src="Images/background.jpg" ></img> */}
            <div className='message'>
                <MessageList messages={messages} />
            </div>
            <i id="send" className="bi bi-send" onClick={() => { handleSend(msg) }}></i>
            <input id="toSendField" ref={msg} className='typing' placeholder='type here...'></input>

        </div>

    );
}

export default ChatItem;