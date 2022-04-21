import "./Message.css"

function RecordAudio({ modal, show_modal, handleSend }) {
  if (!modal) {
    return null;
  }

  let audioIN = { audio: true };
  let audioSrc = null;

  navigator.mediaDevices.getUserMedia(audioIN).then(function (mediaStreamObj) {

    let start = document.getElementById('btnStart');

    let stop = document.getElementById('btnStop');

    let playAudio = document.getElementById('adioPlay');

    let mediaRecorder = new MediaRecorder(mediaStreamObj);

    start.addEventListener('click', function (ev) {

      mediaRecorder.start();

      console.log(mediaRecorder.state);

    })

    stop.addEventListener('click', function (ev) {
      mediaRecorder.stop();
    });

    mediaRecorder.ondataavailable = function (ev) {
      dataArray.push(ev.data);
    }

    let dataArray = [];

    mediaRecorder.onstop = function (ev) {
      let audioData = new Blob(dataArray, { 'type': 'audio/mp3;' });
      dataArray = [];
      audioSrc = window.URL.createObjectURL(audioData);
      playAudio.src = audioSrc;
    }
  })
    .catch(function (err) {
      console.log(err.name, err.message);
    });

  const add_media = function () {
    handleSend("audio", audioSrc)
    audioIN = { audio: false }
    show_modal(false);
  }

  const started = function () {
    document.getElementById('titleRecording').style.visibility = "visible";
  }

  const stopped = function() {
    document.getElementById('titleRecording').style.visibility = "collapse";
  }


  return (
    <div className="modal-content">
      <div className="modal-header">
        <img src="Images/recording.jpg" id='titleRecording' className="recordingMessage"/>

        <button onClick={() => { show_modal(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-footer">
        <div>
          <p>
            <button onClick={() => { started() }} id="btnStart">START RECORDING</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => { stopped() }} id="btnStop">STOP RECORDING</button>
          </p>
        </div>
        <button onClick={() => { add_media() }} type="button" className="btnSendAudio">Send</button>
      </div>
    </div>

  )
}

export default RecordAudio;