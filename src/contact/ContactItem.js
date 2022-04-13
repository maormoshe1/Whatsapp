import ChatItem from '../chat/ChatItem';
import './ContactItem.css';



function ContactItem({ img, name, messages, show_msg }) {

    var lastMessage = "", lastMessageTime = "";
    if(messages.length != 0) {
        lastMessage = messages[messages.length - 1].text;
        lastMessageTime = messages[messages.length - 1].time;
    }

    return (
        <div onClick={() => { show_msg(messages) }} className="contact-chat">
            <div className="d-flex align-items-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-circle mr-1"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="contact-name">{name}</h5>
                        <p className="contact-msg">{lastMessage}</p>
                        <p className="send-time"><small className="text-muted">{lastMessageTime}</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactItem;