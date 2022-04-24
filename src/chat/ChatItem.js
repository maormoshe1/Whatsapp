import './ChatItem.css';
import MessageList from '../messages/MessageList'
import messages from '../hard_coded/messages';
import { useRef, useState } from 'react';
import AddMedia from '../messages/AddMedia';
import RecordAudio from '../messages/RecordAudio';
import CurrentSession from './CurrentSession';

function ChatItem({ messages, curImgContact, curNameContact, user , refreshLastMsg }) {

    let today = new Date();
    const msg = useRef(null);

    const [messageList, setMessageList] = useState(messages);
    const [addMedia, setAddMedia] = useState(false);
    const [type, setType] = useState('');
    const [recordAudio, setRecordAudio] = useState(false)
    

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
        if ((type == "text" && content != "") || type == "img" || type == "video" || type == "audio") {
            setMessageList(messages.push({ type: type, content: content, time: getTime(), from: user.uname }));
            console.log(messages[messages.length - 1])
            refreshLastMsg(messages[messages.length - 1]);
            document.getElementById("toSendField").value = "";
            document.getElementById("messagesDiv").scrollTop = document.getElementById("messagesDiv").scrollHeight;
        }
    }

    const add_media = function (type) {
        setAddMedia(true);
        setType(type);
    }

    if (curNameContact=="") {
        console.log(curNameContact)
        return (
            <div>
                <img id='background2' src="Images/background.jpg" ></img>
            </div>
        );
    }


    return (
        <div className='chats'>
            <CurrentSession uname={curNameContact} img={curImgContact} />
            <div className='theChat'>
                <img id='background' src="Images/background.jpg" />
                <div id='messagesDiv' className='message overflow-auto'>
                    <br />
                    <MessageList className='messageBubble' messages={messages} userName={user.uname} />
                </div>
                <div className='add_media'>
                    <AddMedia modal={addMedia} show_modal={setAddMedia} type={type} handleSend={handleSend} />
                    <RecordAudio modal={recordAudio} show_modal={setRecordAudio} handleSend={handleSend} />
                </div>

                <div className='msg-controller'>
                    <div id="attatchment" className="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-paperclip"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a onClick={() => { add_media("img") }} class="dropdown-item" href="#"><i class="bi bi-card-image"></i></a></li>
                            <li><a onClick={() => { add_media("video") }} class="dropdown-item" href="#"><i class="bi bi-camera-reels"></i></a></li>
                            <li><a onClick={() => { setRecordAudio(true) }} class="dropdown-item" href="#"><i class="bi bi-mic"></i></a></li>
                        </ul>
                    </div>
                    <i id="send" className="bi-send" onClick={() => { handleSend("text", msg.current.value) }}/>
                    <input id="toSendField" ref={msg} placeholder='type here...'></input>
                </div>
            </div>

        </div>

    );
}

export default ChatItem;