import './ChatItem.css';
import MessageList from '../messages/MessageList'
import messages from '../hard_coded/messages';
import { useRef, useState } from 'react';
import AddMedia from '../messages/AddMedia';

function ChatItem({ messages, user }) {
    let today = new Date();
    const msg = useRef(null);

    const [messageList, setMessageList] = useState(messages);
    const [addMedia, setAddMedia] = useState(false);
    const [type, setType] = useState('');

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

    const handleSend = (type, content) => {
        setMessageList(messages.push({type: type, content: content , time: getTime(), from: user.uname }));
      
        console.log(messages[messages.length-1])
        document.getElementById("toSendField").value = "";
    }

    const add_media = function(type){
        setAddMedia(true);
        setType(type);
    }

    if (messages.length == 0) {
        return (
            <div>
                <img id='background' src="Images/background.jpg" ></img>
            </div>
        );
    }

    return (
        <div>
            <img id='background' src="Images/background.jpg" ></img>

            <div className='message'>
                <MessageList messages={messages} />
            </div>
            <div className='add_media'>
                <AddMedia modal={addMedia} show_modal={setAddMedia} type={type} handleSend={handleSend} />
            </div>

            <div className='msg-controller'>
                <div id="attatchment" className="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-paperclip"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a  onClick={() => { add_media("img") }} class="dropdown-item" href="#"><i class="bi bi-card-image"></i></a></li>
                        <li><a onClick={() => { add_media("video") }} class="dropdown-item" href="#"><i class="bi bi-camera-reels"></i></a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-mic"></i></a></li>
                    </ul>
                </div>
                <i id="send" className="bi bi-send" onClick={() => { handleSend("text", msg.current.value) }}></i>
                <input id="toSendField" ref={msg} placeholder='type here...'></input>
            </div>
        </div>

    );
}

export default ChatItem;