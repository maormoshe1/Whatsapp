import Message from "./Message";
function MessageList({messages}){

     const messageList = messages.map((message, key) => {
        return <Message msg={message}  key={key}/>
    });

    return(
        <div className='message'>
                {messageList}
            </div>
    )
}

export default MessageList;