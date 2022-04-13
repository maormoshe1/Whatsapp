import './ChatItem.css';
import MessageList from '../messages/MessageList'
import messages from '../hard_coded/messages';
import { useRef , useState} from 'react';

function ChatItem({ messages, setMessages }) {
    let today = new Date();
    const msg = useRef(null);

    // const [messageList, setMessageList] = useState(messages)

    const getTime = function(){
        let h = today.getHours();
        let m = today.getMinutes();
        if(h<12){
            h = '0'+h;
        }
        if(m<10){
            m = '0'+m;
        }
        return h + ":" + m
    }

    const handleSend = (msg) => {
        //console.log(msg.current.value);
        
        //console.log(messages);
        //console.log(messageList);
        messages.push({ text: msg.current.value, time: getTime()  , from: true })
        setMessages(messages);
        //setMessageList(messages.push({ text: msg.current.value, time: getTime()  , from: true }));
        //last_msg = () => {};
        //add_msg(messages);
        // add_msg(messages);
        //console.log(messages);
        //console.log(messageList);
        
    }
    console.log("chatitem")
    console.log(messages)

    if (messages.length == 0) {
        return (
            <div>
                hello
            </div>
        );
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