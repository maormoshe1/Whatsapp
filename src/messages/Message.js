import './Message.css';

function Message({ msg, userName }) {

  if (msg.type == "text") {
    if (msg.from == userName) {
      return (
        <div className="grid">
          <p id="text-msg" >
            <text className='msg-text'> {msg.content} </text>
            <small className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="grid">
          <p id="reciveMsg-text" >
            <text className='msg-text'> {msg.content} </text>
            <small className="text-muted"> {msg.time}</small>
          </p>
        </div>
      );

    }

  }
  if (msg.type == "img") {
    if (msg.from == userName) {
      return (
        <div className="grid">
          <p id="img-msg">
            <img src={msg.content} className='msg-text' id='media' controls />
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="grid">
          <p id="reciveMsg-media">
            <img src={msg.content} className='reciveMsg' id='media' />
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }

  }
  if (msg.type == "video") {
    if (msg.from == userName) {
      return (
        <div className="grid">
          <p id="img-msg" className="g-col-6 ">
            <video src={msg.content} controls id='media' />
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="grid">
          <p id="reciveMsg-media" className="g-col-6 ">
            <video src={msg.content} className='reciveMsg' id='media' controls />
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }

  }

  if (msg.type == "audio") {
    if (msg.from == userName) {
      return (
        <div className="grid">
          <p id="img-msg" className="g-col-6 ">
            <audio src={msg.content} controls />
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="grid">
          <p id="reciveMsg-media" className="g-col-6 ">
            <audio src={msg.content} className='reciveMsg' controls />
            <small id="img-msg-time" className="text-muted">{msg.time}</small>
          </p>
        </div>
      );
    }

  }

  return (
    <div className="grid">

    </div>
  );
}

export default Message;