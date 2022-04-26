function LastMessage({ messages }) {
    var lastMessage = "", lastMessageTime = "";
    if(messages.length != 0) {
        lastMessage = messages[messages.length - 1];
        lastMessageTime = messages[messages.length - 1].time;
    }
    const last_msg = messages[messages.length - 1];
    if(lastMessage.type == "text"){
        return(
        <>
            <p className="contact-msg">{lastMessage.content}</p>
            <p className="send-time"><small className="text-muted">{lastMessageTime}</small></p>
        </>
        )
    }
    if(lastMessage.type == "audio"){
        return(
        <>
            <p><i className="bi bi-mic"></i> voice message</p>
            <p className="send-time"><small className="text-muted">{lastMessageTime}</small></p>
        </>
        )
    }
    if(lastMessage.type == "img"){
        return(
        <>
            <p><i className="bi bi-card-image"></i> image </p>
            <p className="send-time"><small className="text-muted">{lastMessageTime}</small></p>
        </>
        )
    }
    if(lastMessage.type == "video"){
        return(
        <>
            <p><i className="bi bi-camera-reels"></i> video </p>
            <p className="send-time"><small className="text-muted">{lastMessageTime}</small></p>
        </>
        )
    }
    return (
        <div>
        </div>
    );
}

export default LastMessage;