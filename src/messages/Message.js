
import './Message.css';

function Message({msg}){
  let kind_of_msg = 'reciveMsg'
  if(msg.me == true){
    kind_of_msg = 'sendMsg'
  }
  return (

    <div id={kind_of_msg} className="grid">
      <p className="g-col-6 ">
          <text className='msg-text'> {msg.text} </text>
          <small className="text-muted">{msg.time}</small>
        </p>

    </div>
  );
}

export default Message;