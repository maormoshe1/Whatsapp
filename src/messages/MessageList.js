import Message from "./Message";
import './Message.css'
function MessageList({ messages, userName }) {

    var messageList = [];
    if(messages.length != 0) {
        
        messageList = messages.map((message, key) => {
            return <Message msg={message} userName={userName} key={key} />
        });
    
    }

    return (
        <div>
            {messageList}
        </div>
    )
}

export default MessageList;