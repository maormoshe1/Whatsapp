
import './Message.css';

function Message({msg}){

  return (
    <div className="grid">
      <p id="msg" className="g-col-6 ">
          <text className='msg-text'> {msg.text} </text>
          <small className="text-muted">{msg.time}</small>
        </p>
    </div>
  );
}

export default Message;