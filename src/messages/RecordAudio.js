function RecordAudio({ modal, show_modal, handleSend }){
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
        handleSend("audio",audioSrc)
        audioIN = {audio: false}
         show_modal(false);
     }
   

    return (
        <div className="modal-content">
        <div className="modal-header">
            <button onClick={() => { show_modal(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    
        <div className="modal-footer">
        <div>
            <p>
                <button id="btnStart">START RECORDING</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button id="btnStop">STOP RECORDING</button>
            </p>
        </div>
            <button  onClick={() => {add_media() }} type="button" className="btn btn-primary">Send</button>
        </div>
    </div>
        
   
    )
}

export default RecordAudio;