import './ContactItem.css';

function ContactItem({img,name,messages,show_msg}){
  

    return(
        <div onClick={() => {show_msg(name)}}className="contact-chat">
            <div className="d-flex align-items-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-circle mr-1"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="contact-name">{name}</h5>
                        <p className="contact-msg">{messages[messages.length-1].text}</p>
                        <p className="send-time"><small className="text-muted">{messages[messages.length-1].time}</small></p>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default ContactItem;