import Message from "./Message";
function MessageList({ messages }) {

    var messageList = [];
    if(messages.length != 0) {
        
        messageList = messages.map((message, key) => {
            return <Message msg={message} key={key} />
        });
    
    }

    return (
        <div className='message'>
            {messageList}
        </div>
    )
}

export default MessageList;