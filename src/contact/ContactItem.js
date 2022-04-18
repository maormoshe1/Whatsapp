import ChatItem from '../chat/ChatItem';
import LastMessage from '../messages/LastMessage';
import './ContactItem.css';



function ContactItem({ img, name, messages, show_msg }) {

    return (
        <div onClick={() => { show_msg(messages, name, img) }} className="contact-chat">
            <div className="d-flex align-items-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-circle mr-1"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="contact-name">{name}</h5>
                        <LastMessage messages={messages}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactItem;