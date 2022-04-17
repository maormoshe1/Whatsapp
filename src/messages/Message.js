
import './Message.css';

function Message({msg}){
  if(msg.type == "text"){
    return (
      <div className="grid">
        <p id="text-msg" className="g-col-6 ">
            <text className='msg-text'> {msg.content} </text>
            <small className="text-muted">{msg.time}</small>
          </p>
      </div>
    );
  }
  if(msg.type == "img"){
    console.log(msg.content)
    return (
      <div className="grid">
        <p id="img-msg" className="g-col-6 ">
            <img src={msg.content} className='msg-text'/>
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
      </div>
    );
  }
    if(msg.type == "video"){
      console.log(msg.content)
      return (
        <div className="grid">
          <p id="img-msg" className="g-col-6 ">
              <video src={msg.content} autoPlay controls/>
              <small id="img-msg-time" className="text-muted">{msg.time}</small>
            </p>
        </div>
      );
  }

  return (
    <div className="grid">
    
    </div>
  );
}

export default Message;