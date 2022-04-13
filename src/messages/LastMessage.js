function LastMessage({ messages }) {
    return (
        <div>
            <p className="contact-msg">{messages[messages.length - 1].text}</p>
            <p className="send-time"><small className="text-muted">{messages[messages.length - 1].time}</small></p>
        </div>
    );
}

export default LastMessage;